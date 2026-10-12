export const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'microsoft', name: 'مايكروسوفت' },
  { id: 'antivirus', name: 'برامج الحماية' },
  { id: 'bundles', name: 'باقات التوفير' },
  { id: 'linkedin', name: 'اشتراكات LinkedIn' },
  { id: 'software', name: 'برامج متنوعه' }
];

export const products = [
  // Microsoft
  {
    id: 1,
    title: 'Microsoft Office 365 Pro Plus Account 1 Year Warranty',
    category: 'microsoft',
    originalPrice: 75.00,
    price: 12.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Office-365-Acc-Source-300x300.png',
    badge: 'تخفيض!'
  },
  {
    id: 2,
    title: 'Windows 10 Pro Key For 1 Pc',
    category: 'microsoft',
    originalPrice: 45.00,
    price: 9.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Windows-10-pro-key-1-pc-source-300x300.png',
    badge: 'تخفيض!'
  },
  {
    id: 3,
    title: 'Windows 11 Pro Key For 1 Pc',
    category: 'microsoft',
    originalPrice: 350.00,
    price: 10.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Win-11-Pro-300x300.png',
    badge: 'تخفيض!'
  },
  {
    id: 4,
    title: 'Microsoft Office 2021 Professional Plus Key For 1 Pc',
    category: 'microsoft',
    originalPrice: 440.00,
    price: 16.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/office-2021-Key-300x300.png',
    badge: 'تخفيض!'
  },
  {
    id: 5,
    title: 'Microsoft Office 2019 Professional Plus Key For 1 Pc',
    category: 'microsoft',
    originalPrice: 79.00,
    price: 14.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Office-2019-Key-Source-300x300.png',
    badge: 'تخفيض!'
  },

  // LinkedIn
  {
    id: 6,
    title: 'LinkedIn Premium Career Subscription 6 Months',
    category: 'linkedin',
    originalPrice: 360.00,
    price: 80.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/linkedin-career-6-months-300x300.png',
    badge: 'غير متوفر',
    outOfStock: true
  },
  {
    id: 7,
    title: 'LinkedIn Premium Business Subscription 1 Year',
    category: 'linkedin',
    originalPrice: 575.88,
    price: 144.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/linkedin-1-year-300x300.png',
    badge: 'غير متوفر',
    outOfStock: true
  },

  // Antivirus
  {
    id: 8,
    title: 'McAfee Total Protection 1 Use (28-03-2029)',
    category: 'antivirus',
    originalPrice: 60.00,
    price: 7.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Mcafee-total-protection-source-copy-300x300.png',
    badge: 'تخفيض!'
  },
  {
    id: 9,
    title: 'Kaspersky Premium For 1 Device 1 Year',
    category: 'antivirus',
    originalPrice: 56.00,
    price: 21.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2020/08/kaspersky-premium-total-security-source--300x300.png',
    badge: 'تخفيض!'
  },
  {
    id: 10,
    title: 'Avast Ultimate 1 Device 1 Year',
    category: 'antivirus',
    originalPrice: 50.00,
    price: 19.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Avast-Ultimate-300x300.png',
    badge: 'تخفيض!'
  },

  // Bundles
  {
    id: 11,
    title: 'Keys Bundle 1',
    category: 'bundles',
    originalPrice: 110.00,
    price: 20.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Bundle-1-source-300x300.png',
    badge: 'تخفيض!'
  },
  {
    id: 12,
    title: 'Win 11 Pro + Office 2021 Professional Plus ( Discount 40% )',
    category: 'bundles',
    originalPrice: 30.00,
    price: 18.50,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/Bundle-21-source-300x300.png',
    badge: 'تخفيض!'
  },

  // Software
  {
    id: 13,
    title: 'Internet Download Manager Lifetime License For 1 PC',
    category: 'software',
    originalPrice: 25.00,
    price: 22.99,
    image: 'https://bunny-wp-pullzone-v2boqa0sn9.b-cdn.net/wp-content/uploads/2024/07/idm-lifetime-1pc-source-300x300.png',
    badge: 'تخفيض!'
  }
];
