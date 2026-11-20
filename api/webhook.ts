const LINE_REPLY_URL = 'https://api.line.me/v2/bot/message/reply';

interface LineWebhookEvent {
  type: string;
  replyToken?: string;
  message?: { type: string; text?: string };
}

function buildReplyMessages(text: string) {
  const q = text.trim().toLowerCase();

  if (q.includes('ดูสัญญา')) {
    return [
      {
        type: 'flex',
        altText: 'สัญญาซื้อขายดิจิทัล · ล็อต CPN-2610-07',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            backgroundColor: '#1e4630',
            paddingAll: '14px',
            contents: [{ type: 'text', text: 'สัญญาซื้อขาย · CPN-2610-07', color: '#ffffff', weight: 'bold', size: 'sm' }],
          },
          body: {
            type: 'box',
            layout: 'vertical',
            paddingAll: '16px',
            spacing: 'xs',
            contents: [
              { type: 'text', text: 'ผู้ซื้อ: ผู้ส่งออก B (ระยอง)', size: 'sm', weight: 'bold', color: '#26221c' },
              { type: 'text', text: 'ปริมาณ: 500 กก. · เกรด A (0.0%)', size: 'sm', color: '#615a4e' },
              { type: 'text', text: 'ความชื้นยืนยัน: 11.8% (ESP32)', size: 'sm', color: '#615a4e' },
              { type: 'text', text: 'ราคารวม: 60,000 ฿ (120 ฿/กก.)', size: 'md', weight: 'bold', color: '#2c6144', margin: 'sm' },
              { type: 'text', text: 'นัดรับสินค้า: 2 พ.ย. 09:00 · อ.สวี ชุมพร', size: 'xs', color: '#615a4e' },
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
                action: { type: 'uri', label: 'เปิดดูในประวัติการขาย', uri: 'https://robosta.canet.team/liff?tab=history' },
              },
            ],
          },
        },
      },
    ];
  }

  if (q.includes('ให้คะแนนผู้ซื้อ')) {
    return [
      {
        type: 'text',
        text: 'บันทึกคะแนนความน่าเชื่อถือให้ผู้ส่งออก B (5/5 ดาว) เรียบร้อยแล้ว ขอบคุณที่ร่วมสร้างตลาดโปร่งใสกับ Robosta',
      },
    ];
  }

  if (q.includes('สถานะ') || q.includes('ความชื้น') || q.includes('ล็อต')) {
    return [
      {
        type: 'flex',
        altText: 'สถานะล็อต CPN-2610-07 · ความชื้น 11.8% · เกรด A',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            backgroundColor: '#1e4630',
            paddingAll: '14px',
            contents: [{ type: 'text', text: 'สถานะล่าสุด · CPN-2610-07', color: '#ffffff', weight: 'bold', size: 'sm' }],
          },
          body: {
            type: 'box',
            layout: 'vertical',
            paddingAll: '16px',
            spacing: 'xs',
            contents: [
              { type: 'text', text: 'ความชื้น: 11.8% ✓ แห้งได้ที่', size: 'md', weight: 'bold', color: '#2c6144' },
              { type: 'text', text: 'ผลตรวจ Pi 5: เกรด A · เม็ดเสียหลังคัด 0.0%', size: 'sm', color: '#26221c' },
              { type: 'text', text: '500 กก. · อ.สวี ชุมพร · ตาก + อบ', size: 'xs', color: '#615a4e' },
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
                action: { type: 'uri', label: 'เปิดดูกราฟ ESP32', uri: 'https://robosta.canet.team/liff?tab=lots' },
              },
            ],
          },
        },
      },
    ];
  }

  if (q.includes('ราคา')) {
    return [
      {
        type: 'flex',
        altText: 'ราคากลางเกรด A วันนี้ 112–124 ฿/กก.',
        contents: {
          type: 'bubble',
          header: {
            type: 'box',
            layout: 'vertical',
            backgroundColor: '#1e4630',
            paddingAll: '14px',
            contents: [{ type: 'text', text: 'ราคากลางวันนี้ · เกรด A', color: '#ffffff', weight: 'bold', size: 'sm' }],
          },
          body: {
            type: 'box',
            layout: 'vertical',
            paddingAll: '16px',
            spacing: 'xs',
            contents: [
              { type: 'text', text: 'แนะนำ 120 ฿/กก.', size: 'xxl', weight: 'bold', color: '#2c6144' },
              { type: 'text', text: 'ช่วงตลาดวันนี้: 112 – 124 ฿/กก.', size: 'sm', color: '#615a4e' },
              { type: 'text', text: 'ขั้นต่ำที่แนะนำ: 116 ฿/กก. (≈ 60,000 ฿ ทั้งล็อต)', size: 'xs', color: '#26221c' },
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
                action: { type: 'uri', label: 'ให้ AI Agent ขายแทน', uri: 'https://robosta.canet.team/liff?tab=price' },
              },
            ],
          },
        },
      },
    ];
  }

  // Default interactive menu card
  return [
    {
      type: 'flex',
      altText: 'Robosta Lot Passport — เลือกคำสั่งที่ต้องการ',
      contents: {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          paddingAll: '16px',
          spacing: 'sm',
          contents: [
            { type: 'text', text: 'Robosta พร้อมช่วยดูแลล็อตกาแฟ', weight: 'bold', size: 'md', color: '#1e4630' },
            { type: 'text', text: 'พิมพ์ "สถานะ" หรือ "ราคา" เพื่อเช็กข้อมูล หรือเลือกจากปุ่มด้านล่างได้เลย', size: 'xs', color: '#615a4e', wrap: true },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'xs',
          contents: [
            {
              type: 'button',
              style: 'primary',
              color: '#2c6144',
              height: 'sm',
              action: { type: 'message', label: 'เช็กสถานะ & ความชื้น', text: 'สถานะ' },
            },
            {
              type: 'button',
              style: 'secondary',
              height: 'sm',
              action: { type: 'message', label: 'เช็กราคากลางวันนี้', text: 'ราคา' },
            },
          ],
        },
      },
    },
  ];
}

export default async function handler(
  req: { method?: string; body?: { events?: LineWebhookEvent[] } },
  res: { status: (code: number) => { json: (body: unknown) => void } }
) {
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, service: 'robosta-line-webhook' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const events = req.body?.events ?? [];

  if (!token || events.length === 0) {
    return res.status(200).json({ ok: true });
  }

  for (const event of events) {
    if (!event.replyToken) continue;

    let messages: unknown[] = [];
    if (event.type === 'follow') {
      messages = [
        { type: 'text', text: 'ระบบ Robosta พร้อมติดตามคุณภาพกาแฟของคุณแล้ว' },
        { type: 'text', text: 'กด “เพิ่มล็อต” ที่เมนูด้านล่าง หรือพิมพ์ “สถานะ” / “ราคา” เพื่อสอบถามได้ทันที' },
      ];
    } else if (event.type === 'message' && event.message?.type === 'text' && event.message.text) {
      messages = buildReplyMessages(event.message.text);
    }

    if (messages.length > 0) {
      await fetch(LINE_REPLY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          replyToken: event.replyToken,
          messages,
        }),
      });
    }
  }

  return res.status(200).json({ ok: true });
}
