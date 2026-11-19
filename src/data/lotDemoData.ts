export interface ExplorerStep {
  id: number;
  shortLabel: string;
  chipLabel: string;
  headline: string;
  b2bTitle: string;
  b2bSummary: string;
  b2bBullets: string[];
  techTag: string;
}

export const LOT_DATA = {
  lotId: 'CPN-2610-07',
  weightKg: 500,
  origin: 'อ.สวี ชุมพร',
  process: 'ตาก + อบ',
  moistureCurrent: 11.8,
  moistureTarget: 12.5,
  moistureHistory: [
    { day: '27 ต.ค.', value: 21.0 },
    { day: '28 ต.ค.', value: 16.0 },
    { day: '29 ต.ค.', value: 13.4 },
    { day: '30 ต.ค.', value: 11.8 },
  ],
  scanTotalBeans: 35,
  scanGood: 32,
  scanBroken: 1,
  scanImmature: 1,
  scanBlack: 1,
  defectBeforePct: 8.6,
  defectAfterPct: 0.0,
  grade: 'A',
  marketMin: 112,
  marketMax: 124,
  recommendedPrice: 120,
  floorPrice: 116,
  totalValue: 60000,
  pickupDate: '2 พ.ย. 09:00',
  offers: [
    { buyer: 'คาเฟ่ C', location: 'ชุมพร', price: 114, status: 'rejected' as const, note: 'ต่ำกว่าขั้นต่ำ' },
    { buyer: 'โรงคั่ว A', location: 'กรุงเทพฯ', price: 116, status: 'outbid' as const, note: 'เท่าขั้นต่ำ' },
    { buyer: 'ผู้ส่งออก B', location: 'ระยอง', price: 120, status: 'accepted' as const, note: 'ตกลง 120 ฿/กก.' },
  ],
  historyTotal: 97200,
  historySuccessCount: 2,
  historyTotalCount: 3,
};

export const EXPLORER_STEPS: ExplorerStep[] = [
  {
    id: 1,
    shortLabel: 'เพิ่มล็อตใหม่',
    chipLabel: '1 · ลงทะเบียนล็อตผ่าน LINE LIFF',
    headline: 'สร้าง Digital Lot Passport ตั้งแต่วันแรกที่เก็บเกี่ยว',
    b2bTitle: 'Origin & Process Traceability',
    b2bSummary:
      'ทุกล็อตมีรหัสเฉพาะ (เช่น CPN-2610-07) ผูกกับพิกัดแปลงปลูก น้ำหนัก และวิธีลดความชื้น เพื่อใช้อ้างอิงตลอดห่วงโซ่อุปทาน',
    b2bBullets: [
      'ระบุแหล่งที่มาชัดเจน: อ.สวี จ.ชุมพร (500 กก.)',
      'บันทึกกระบวนการแปรรูป: ตาก + อบ พร้อมผูกเครื่องวัดเฉพาะลานตาก',
      'ลดปัญหาการปนเปื้อนข้ามล็อตก่อนเข้าสู่กระบวนการคัดเกรด',
    ],
    techTag: 'LINE LIFF · Lot Registry',
  },
  {
    id: 2,
    shortLabel: 'ความชื้น · ESP32',
    chipLabel: '2 · วัดความชื้นแบบ Real-time ด้วย ESP32',
    headline: 'พิสูจน์ความชื้นมาตรฐาน ≤ 12.5% ลดความเสี่ยงเชื้อราและน้ำหนักหาย',
    b2bTitle: 'Continuous IoT Telemetry',
    b2bSummary:
      'โรงคั่วและผู้ส่งออกไม่ต้องเดาจากความรู้สึก เซนเซอร์ ESP32 ส่งค่าความชื้นต่อเนื่องทุกวันจนถึงจุดปลอดภัย 11.8%',
    b2bBullets: [
      'กราฟความชื้นย้อนหลัง 4 วัน: 21.0% → 16.0% → 13.4% → 11.8%',
      'แจ้งเตือนความเสี่ยงฝนตกอัตโนมัติ (ที่ 13.4%) เพื่อย้ายเข้าเครื่องอบทันเวลา',
      'ส่งข้อมูลผ่าน Wi-Fi / MQTT เข้าสู่ Lot Passport โดยตรง',
    ],
    techTag: 'ESP32 · Wi-Fi / MQTT Telemetry',
  },
  {
    id: 3,
    shortLabel: 'ตรวจเม็ดเสีย · Pi 5',
    chipLabel: '3 · สแกนเม็ดเสียด้วยกล้อง Raspberry Pi 5',
    headline: 'คัดแยกเม็ดเสียระดับรายเม็ดบน Edge AI ได้เกรด A โปร่งใส',
    b2bTitle: 'Edge Computer Vision Audit',
    b2bSummary:
      'ประมวลผลบน Raspberry Pi 5 CPU ทันที ตรวจจับเม็ดแตก ไม่สุก และเม็ดดำ แสดงผลก่อนคัด (8.6%) และหลังคัด (0.0%) อย่างชัดเจน',
    b2bBullets: [
      'ตัวอย่าง 35 เม็ด: ดี 32, แตก 1, ไม่สุก 1, ดำ 1',
      'หลังคัดแยกเม็ดเสียออก เหลือเม็ดเสีย 0.0% ผ่านเกณฑ์เกรด A',
      'มีภาพถ่ายหลักฐานและ log เวลา 09:12 น. ผูกกับ Lot ID',
    ],
    techTag: 'Raspberry Pi 5 · Edge Vision',
  },
  {
    id: 4,
    shortLabel: 'ราคากลาง · AI',
    chipLabel: '4 · คำนวณราคากลางและอธิบายด้วย AI',
    headline: 'ตัวเลขคำนวณด้วยสมการตลาดจริง AI ช่วยอธิบายเหตุผลที่ตรวจสอบได้',
    b2bTitle: 'Deterministic Pricing + Explainable AI',
    b2bSummary:
      'ระบบคำนวณช่วงราคากลางเกรด A (112–124 ฿/กก.) และราคาแนะนำ (120 ฿/กก.) ด้วยโค้ดที่ตรวจสอบได้ ไม่ปล่อยให้ LLM คิดราคาเอง',
    b2bBullets: [
      'ราคาแนะนำ 120 ฿/กก. (มูลค่ารวม ≈ 60,000 ฿ ทั้งล็อต)',
      'กำหนดราคาขั้นต่ำปลอดภัยที่ 116 ฿/กก. อ้างอิงคุณภาพสูงกว่าค่าเฉลี่ย',
      'โมเดลภาษาขนาดเล็กในเครื่องสรุปเหตุผลเป็นภาษาไทยที่โปร่งใส',
    ],
    techTag: 'Deterministic Engine · Local LLM',
  },
  {
    id: 5,
    shortLabel: 'ยืนยันเงื่อนไข',
    chipLabel: '5 · Human-in-the-Loop กำหนดกรอบเจรจา',
    headline: 'ผู้ขายคุมเพดานราคาและปริมาณเอง 100% ก่อนเปิดรับข้อเสนอ',
    b2bTitle: 'Strict Guardrails & Auditability',
    b2bSummary:
      'AI Agent จะไม่เริ่มขายจนกว่าเกษตรกรจะกดยืนยันเงื่อนไข และไม่สามารถปิดดีลต่ำกว่าราคาขั้นต่ำ (116 ฿/กก.) ได้โดยเด็ดขาด',
    b2bBullets: [
      'ต้องติ๊กยินยอมและกดยืนยันก่อนเปิดตลาด RFQ 24 ชม.',
      'ล็อก Floor Price 116 ฿/กก. ป้องกันการขายขาดทุนจากความผิดพลาด',
      'สามารถกด "หยุดขาย" หรือปรับเงื่อนไขได้ตลอดเวลา',
    ],
    techTag: 'Human-in-the-Loop · Guardrails',
  },
  {
    id: 6,
    shortLabel: 'AI Agent ขาย',
    chipLabel: '6 · AI Agent เจรจาตลาด RFQ แบบอัตโนมัติ',
    headline: 'จับคู่ผู้ซื้อที่ให้ราคาและเงื่อนไขดีที่สุด ปิดดีล 60,000 ฿ ใน 11 นาที',
    b2bTitle: 'Automated Ratio-Ladder RFQ Bidding',
    b2bSummary:
      'ระบบส่งข้อมูล Lot Passport ให้ผู้ซื้อหลายรายพร้อมกัน คัดกรองข้อเสนอต่ำกว่าเกณฑ์อัตโนมัติ และปิดดีลกับผู้ส่งออก B ที่ 120 ฿/กก.',
    b2bBullets: [
      'คาเฟ่ C เสนอ 114 ฿/กก. → ปฏิเสธอัตโนมัติ (ต่ำกว่าขั้นต่ำ)',
      'โรงคั่ว A เสนอ 116 ฿/กก. → แพ้ราคาคู่แข่ง',
      'ผู้ส่งออก B ปิดดีลที่ 120 ฿/กก. (+4 ฿/กก. เหนือขั้นต่ำ) นัดรับ 2 พ.ย. 09:00',
    ],
    techTag: 'Ratio Ladder · RFQ Market API',
  },
  {
    id: 7,
    shortLabel: 'ประวัติการขาย',
    chipLabel: '7 · Lot Passport ฉบับสมบูรณ์ & ประวัติย้อนหลัง',
    headline: 'หลักฐานดิจิทัลครบวงจรสำหรับโรงคั่ว ผู้ส่งออก และสถาบันการเงิน',
    b2bTitle: 'Immutable Lot Passport & Track Record',
    b2bSummary:
      'ทุกการขายถูกบันทึกเป็น Digital Record ยืนยันความน่าเชื่อถือของผู้ผลิต (เช่น ขายสำเร็จ 2 จาก 3 ครั้ง มูลค่ารวม ฿97,200)',
    b2bBullets: [
      'รวมข้อมูล ความชื้น (11.8%) + เกรด (A · 0.0%) + ราคาปิดดีล (120 ฿/กก.) ในใบเดียว',
      'รองรับการตรวจสอบย้อนหลัง (Traceability) สำหรับการส่งออกและ ESG',
      'สร้าง Credit Scoring จากประวัติคุณภาพจริงของเกษตรกรและสหกรณ์',
    ],
    techTag: 'Digital Passport · Traceability',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'ผู้ซื้อและโรงคั่วจะมั่นใจได้อย่างไรว่าข้อมูลความชื้นและเกรดเมล็ดไม่ถูกปลอมแปลง?',
    a: 'ค่าความชื้นส่งตรงจากเซนเซอร์ ESP32 ผ่าน Wi-Fi/MQTT พร้อม timestamp และประวัติการลดความชื้นต่อเนื่อง 4 วัน ส่วนการคัดเกรดประมวลผลจากภาพถ่ายจริงบน Raspberry Pi 5 พร้อมเก็บสถิติรายเม็ด (ดี/แตก/ไม่สุก/ดำ) ผูกกับรหัสล็อตเฉพาะ',
  },
  {
    q: 'AI Agent คิดราคาหรือตัดสินใจขายเองทั้งหมดโดยไม่มีคนคุมหรือไม่?',
    a: 'ไม่ครับ ระบบแยกส่วนชัดเจน: การประเมินมูลค่า (Appraisal) และกรอบราคา (Ratio Ladder) คำนวณด้วยสมการคณิตศาสตร์ที่ตรวจสอบได้ (Deterministic Code) ส่วน AI ในเครื่องทำหน้าที่อธิบายเหตุผล และ Agent จะเริ่มเจรจาได้ต่อเมื่อผู้ขายกดยืนยันราคาขั้นต่ำ (Floor Price) แล้วเท่านั้น',
  },
  {
    q: 'ระบบรองรับการทำงานกรณีอินเทอร์เน็ตช้าหรือ LLM Gateway ขัดข้องหรือไม่?',
    a: 'รองรับเต็มรูปแบบครับ วิสัยทัศน์หลักของสถาปัตยกรรมคือ Edge-First และ Rule-Fallback — ตัว Raspberry Pi 5 ประมวลผลภาพบนบอร์ด (CPU) ได้โดยไม่ต้องพึ่ง Cloud และฝั่ง RFQ Agent มีโหมดกฎล้วน (USE_LLM=0) ที่ยังสามารถประเมินราคาและส่งข้อเสนอได้อย่างต่อเนื่อง',
  },
  {
    q: 'ผู้ซื้อ (โรงคั่ว / คาเฟ่ / ผู้ส่งออก) และนักลงทุนสามารถเริ่มต้นใช้งานได้อย่างไร?',
    a: 'สามารถลงทะเบียนผ่านปุ่ม "ขอรับสิทธิ์เข้าถึงระบบ (B2B Early Access)" เพื่อทดลองเชื่อมต่อรับข้อมูล Lot Passport ของกลุ่มเกษตรกรนำร่องใน อ.สวี จ.ชุมพร หรือทดสอบ API ตลาดกลาง RFQ สำหรับจัดซื้อล็อตจริง',
  },
];
