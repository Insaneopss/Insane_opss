import { Product, DeviceBrand, FAQItem } from '../types';

export const STORE_UPI_ID = 'insanesensi@upi';

export const PRODUCTS: Product[] = [
  {
    id: 'premium',
    name: 'INSANE SENSI Premium',
    badge: 'BEST SELLER',
    price: 399,
    originalPrice: 999,
    tagline: 'Custom mathematical sensitivity calibration tailored strictly for your exact smartphone.',
    accentColor: '#7B2EDA',
    glowClass: 'border-[#7B2EDA]/40 hover:border-[#7B2EDA] glow-purple',
    badgeClass: 'bg-[#7B2EDA]/15 text-[#C084FC] border-[#7B2EDA]/30',
    features: [
      'Tailored General, Red Dot, 2x, 4x & Sniper values',
      'Custom DPI multiplier & Pointer Speed calibration',
      'Exact Fire Button size percentage & screen positioning',
      'Anti-recoil drag physics & U-Shape drag tutorials',
      'Instant direct delivery via Instagram DM / Telegram'
    ],
    route: '/premium',
    ctaText: 'Get Premium Sensi',
    popular: true,
  },
  {
    id: 'free',
    name: 'INSANE SENSI Free Pack',
    badge: '100% FREE',
    price: 0,
    tagline: 'Universal starter sensitivity setup for casual players and test evaluation.',
    accentColor: '#A855F7',
    glowClass: 'border-[#A855F7]/30 hover:border-[#A855F7]/70',
    badgeClass: 'bg-[#A855F7]/15 text-[#D8B4FE] border-[#A855F7]/30',
    features: [
      'Universal baseline settings compatible with any device',
      'Basic drag headshot general configuration',
      'Standard Fire Button recommendations',
      'Instant ad-supported gateway download',
      'Upgrade to Premium anytime for phone-specific calibration'
    ],
    route: '/free',
    ctaText: 'Download Free Pack',
  }
];

export const DEVICE_BRANDS: DeviceBrand[] = [
  {
    name: 'Samsung Galaxy',
    popularModels: ['S24 / S23 Ultra', 'A54 / A52s', 'M34 / M14', 'S21 FE'],
    recommendedDpiRange: '411 - 560 DPI',
    fireButtonRange: '42% - 46%'
  },
  {
    name: 'Apple iPhone',
    popularModels: ['iPhone 15 / 15 Pro', 'iPhone 13 / 14', 'iPhone 11 / 12', 'iPhone XR / SE'],
    recommendedDpiRange: 'Native iOS Touch Glider (115 - 120)',
    fireButtonRange: '39% - 44%'
  },
  {
    name: 'OnePlus',
    popularModels: ['OnePlus 12 / 12R', 'OnePlus 11 / 10 Pro', 'Nord 3 / CE 3 Lite', 'Nord 2T'],
    recommendedDpiRange: '420 - 580 DPI',
    fireButtonRange: '43% - 47%'
  },
  {
    name: 'Xiaomi / Redmi',
    popularModels: ['Redmi Note 13 / 12 Pro', 'Redmi Note 10 / 11', 'Redmi 12 5G', 'Xiaomi 13T'],
    recommendedDpiRange: '392 - 480 DPI',
    fireButtonRange: '45% - 50%'
  },
  {
    name: 'Realme',
    popularModels: ['Realme GT 6 / Neo 5', 'Realme 12 Pro+ / 11 Pro', 'Realme 9 Pro / 8', 'Narzo 60'],
    recommendedDpiRange: '410 - 520 DPI',
    fireButtonRange: '44% - 48%'
  },
  {
    name: 'Poco',
    popularModels: ['Poco X6 Pro / X5 Pro', 'Poco F5 / F6', 'Poco X3 Pro', 'Poco M6 Pro'],
    recommendedDpiRange: '430 - 590 DPI',
    fireButtonRange: '42% - 47%'
  },
  {
    name: 'Vivo / iQOO',
    popularModels: ['iQOO Neo 9 Pro / 7', 'iQOO Z9 / Z7', 'Vivo V30 / V29 Pro', 'Vivo T2 Pro'],
    recommendedDpiRange: '411 - 540 DPI',
    fireButtonRange: '43% - 48%'
  },
  {
    name: 'Motorola / ROG',
    popularModels: ['Moto Edge 50 Pro', 'Moto G84 / G54', 'ROG Phone 8 / 7', 'Infinix GT 20 Pro'],
    recommendedDpiRange: '440 - 600 DPI',
    fireButtonRange: '40% - 45%'
  }
];

export const PREMIUM_FAQS: FAQItem[] = [
  {
    question: 'Is INSANE SENSI Premium 100% safe? Will my Free Fire ID get banned?',
    answer: 'It is 100% safe and anti-ban guaranteed. We do NOT use third-party injection scripts, mod APKs, obb files, or memory injectors. Our system provides exact mathematical sensitivity, pointer speed values, developer DPI calibrations, and touch multipliers that optimize the device and in-game settings cleanly without violating Garena terms of service.',
    tag: 'Safety'
  },
  {
    question: 'How do I receive the pack after payment?',
    answer: 'Delivery is instant via Instagram DM or Telegram chat. As soon as you complete the UPI payment and send the screenshot via our checkout button, our verified support confirms your transaction and delivers the tailor-made PDF guide, sensitivity numbers, and video explanation directly within 2 to 3 minutes.',
    tag: 'Delivery'
  },
  {
    question: 'What if I upgrade or change my phone later?',
    answer: 'We provide free recalculation updates for 30 days. If you switch devices or get a major Android/iOS OS update, message our support with your previous payment reference, and we will calibrate new settings for your new device at no extra charge.',
    tag: 'Support'
  },
  {
    question: 'Does this work for both Free Fire and Free Fire MAX?',
    answer: 'Yes, absolutely. Both versions share the same physics engine for bullet dispersion and drag mechanics. Our settings include specific tweaks for both Free Fire standard and Free Fire MAX with enhanced visual stability.',
    tag: 'Compatibility'
  },
  {
    question: 'What is included in the ₹399 pack?',
    answer: 'You receive: 1) Device-specific General, Red Dot, 2x, 4x, and AWM sensitivity; 2) Exact recommended Developer DPI multiplier; 3) Optimal Pointer Speed & Large Mouse Pointer toggle settings; 4) Fire button size (percentage) and screen height placement; 5) Straight-drag and Rotation-drag headshot tutorial guide.',
    tag: 'Contents'
  }
];

export const COMPARISON_DATA = [
  {
    metric: 'Drag Headshot Consistency',
    defaultSetting: '30% - 40% (Frequent body shot lock & miss)',
    insaneSensiPremium: '75% - 95% (Perfect vertical crosshair auto-lock)'
  },
  {
    metric: 'Recoil & Bullet Bloom',
    defaultSetting: 'High recoil spray after 3rd bullet',
    insaneSensiPremium: 'Stabilized drag multiplier with zero screen shake'
  },
  {
    metric: 'DPI & Pointer Speed',
    defaultSetting: 'Random default values causing over-aiming',
    insaneSensiPremium: 'Calculated DPI multiplier matching screen PPI & aspect ratio'
  },
  {
    metric: 'Fire Button Placement',
    defaultSetting: 'Default oversized button causing missed drag swipes',
    insaneSensiPremium: 'Exact mm coordinate positioning & thumb arc radius'
  },
  {
    metric: 'Hardware & Model Matching',
    defaultSetting: 'Generic for all 10,000+ phone models',
    insaneSensiPremium: 'Calibrated specifically for your exact phone model'
  },
  {
    metric: 'Account Safety & Fair Play',
    defaultSetting: 'Default',
    insaneSensiPremium: '100% Anti-Ban, no APK modification, no files altered'
  }
];

export const FREE_STARTER_SETTINGS = {
  general: 98,
  redDot: 94,
  scope2x: 88,
  scope4x: 82,
  sniperScope: 55,
  freeLook: 70,
  recommendedDpi: 411,
  pointerSpeed: '7/10 clicks',
  fireButtonSize: '46%',
  fireButtonPosition: 'Lower-Right thumb quadrant (approx 22% from bottom)'
};
