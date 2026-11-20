const LINE_PUSH_URL = 'https://api.line.me/v2/bot/message/push';

interface NotifyPayload {
  event: 'lot_created' | 'rain_alert' | 'dry_ready' | 'deal_sold';
  lotId?: string;
  weightKg?: number;
  process?: string;
  sensor?: string;
  moisture?: number;
  pricePerKg?: number;
  floorPrice?: number;
  totalValue?: number;
  buyer?: string;
}

function buildFlexMessage(data: NotifyPayload) {
  const lotId = data.lotId || 'CPN-2610-07';
  const weightKg = data.weightKg || 500;

  if (data.event === 'lot_created') {
    return {
      type: 'flex',
      altText: `เริ่มติดตามล็อต ${lotId} (${weightKg} กก.)`,
      contents: {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          backgroundColor: '#1e4630',
          paddingAll: '14px',
          contents: [
            {
              type: 'text',
              text: `เริ่มติดตามล็อต ${lotId}`,
              color: '#ffffff',
              weight: 'bold',
              size: 'sm',
            },
          ],
        },
        body: {
          type: 'box',
          layout: 'vertical',
          paddingAll: '16px',
          spacing: 'xs',
          contents: [
            { type: 'text', text: `${weightKg} กก. · ${data.process || 'ตาก + อบ'}`, weight: 'bold', size: 'md', color: '#26221c' },
            { type: 'text', text: `เซนเซอร์: ${data.sensor || 'ลานตาก 1'} (ESP32)`, size: 'sm', color: '#615a4e' },
            { type: 'text', text: 'ระบบจะแจ้งเตือนเมื่อความชื้นถึง ≤ 12.5%', size: 'xs', color: '#2c6144', margin: 'sm' },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              style: 'primary',
              color: '#2c6144',
              height: 'sm',
              action: { type: 'uri', label: 'ดูความชื้นใน LIFF', uri: 'https://robosta.canet.team/liff?tab=lots' },
            },
          ],
        },
      },
    };
  }

  if (data.event === 'rain_alert') {
    return {
      type: 'flex',
      altText: `⚠ แจ้งเตือนฝนใกล้ตก · ล็อต ${lotId}`,
      contents: {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          backgroundColor: '#f2c14e',
          paddingAll: '14px',
          contents: [
            {
              type: 'text',
              text: `⚠ แจ้งเตือนฝนใกล้ตก · ${lotId}`,
              color: '#26221c',
              weight: 'bold',
              size: 'sm',
            },
          ],
        },
        body: {
          type: 'box',
          layout: 'vertical',
          paddingAll: '16px',
          spacing: 'xs',
          contents: [
            { type: 'text', text: `ความชื้นตอนนี้ ${data.moisture ?? 13.4}%`, weight: 'bold', size: 'xl', color: '#9a4a12' },
            { type: 'text', text: 'คาดว่าฝนจะตกใน 2 ชม. แนะนำคลุมผ้าใบหรือย้ายเข้าเครื่องอบ (เหลืออีก ~1 วัน)', size: 'sm', color: '#615a4e', wrap: true },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              style: 'primary',
              color: '#8f500c',
              height: 'sm',
              action: { type: 'uri', label: 'เช็กความชื้นล่าสุด', uri: 'https://robosta.canet.team/liff?tab=lots' },
            },
          ],
        },
      },
    };
  }

  if (data.event === 'dry_ready') {
    return {
      type: 'flex',
      altText: `✓ ความชื้น ${data.moisture ?? 11.8}% แห้งได้ที่แล้ว · ${lotId}`,
      contents: {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          backgroundColor: '#2c6144',
          paddingAll: '14px',
          contents: [
            {
              type: 'text',
              text: `✓ แห้งได้ที่แล้ว · ล็อต ${lotId}`,
              color: '#ffffff',
              weight: 'bold',
              size: 'sm',
            },
          ],
        },
        body: {
          type: 'box',
          layout: 'vertical',
          paddingAll: '16px',
          spacing: 'xs',
          contents: [
            { type: 'text', text: `${data.moisture ?? 11.8}%`, weight: 'bold', size: '3xl', color: '#2c6144' },
            { type: 'text', text: 'ผ่านเกณฑ์มาตรฐาน ≤ 12.5% พร้อมนำเข้ากล้องตรวจเม็ดเสีย (Pi 5)', size: 'sm', color: '#615a4e', wrap: true },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              style: 'primary',
              color: '#06c755',
              height: 'sm',
              action: { type: 'uri', label: 'ตรวจเม็ดเสียต่อ', uri: 'https://robosta.canet.team/liff?tab=lots' },
            },
          ],
        },
      },
    };
  }

  // deal_sold
  const pricePerKg = data.pricePerKg || 120;
  const floorPrice = data.floorPrice || 116;
  const totalValue = data.totalValue || pricePerKg * weightKg;
  const buyer = data.buyer || 'ผู้ส่งออก B';

  return {
    type: 'flex',
    altText: `✓ ขายสำเร็จ · ล็อต ${lotId} · ${totalValue.toLocaleString()} ฿`,
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#1e4630',
        paddingAll: '14px',
        contents: [
          {
            type: 'text',
            text: `✓ ขายสำเร็จ · ล็อต ${lotId}`,
            color: '#ffffff',
            weight: 'bold',
            size: 'sm',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '18px',
        contents: [
          {
            type: 'text',
            text: `${totalValue.toLocaleString()} ฿`,
            weight: 'bold',
            size: '3xl',
            color: '#2c6144',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'md',
            spacing: 'xs',
            contents: [
              { type: 'text', text: `${buyer} · ${pricePerKg} ฿/กก. × ${weightKg} กก.`, size: 'sm', color: '#615a4e', wrap: true },
              { type: 'text', text: `สูงกว่าราคาขั้นต่ำ +${Math.max(0, pricePerKg - floorPrice)} ฿/กก.`, size: 'sm', weight: 'bold', color: '#2c6144', wrap: true },
              { type: 'text', text: 'นัดรับสินค้า 2 พ.ย. 09:00', size: 'sm', color: '#615a4e', wrap: true },
            ],
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: '#06c755',
            height: 'sm',
            action: { type: 'message', label: 'ดูสัญญา', text: `ดูสัญญา ล็อต ${lotId}` },
          },
          {
            type: 'button',
            style: 'secondary',
            height: 'sm',
            action: { type: 'uri', label: 'ดูประวัติการขาย', uri: 'https://robosta.canet.team/liff?tab=history' },
          },
        ],
      },
    },
  };
}

export default async function handler(req: { method?: string; body?: NotifyPayload }, res: { status: (code: number) => { json: (body: unknown) => void } }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const userId = process.env.LINE_USER_ID;

  if (!token || !userId) {
    return res.status(500).json({ error: 'LINE server env vars not configured' });
  }

  try {
    const flex = buildFlexMessage(req.body || { event: 'deal_sold' });
    const response = await fetch(LINE_PUSH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        to: userId,
        messages: [flex],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
