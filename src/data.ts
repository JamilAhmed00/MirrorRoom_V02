import { FlavorData, FAQItem, TestimonialItem } from './types';

export const FLAVORS: FlavorData[] = [
  {
    id: 'orange',
    name: 'Orange',
    subName: 'Fresh Orange',
    tagline: 'Sun-Kissed Zest',
    bgColor: '#F85A01',
    textColor: '#FFFFFF',
    accentColor: '#FFA340',
    titleColor: '#FF6B17',
    cardBgColor: '#F95901',
    canImage: '/images/orange_can.png',
    canHeroImage: '/images/orange_can.png',
    frontImage: '/images/orange_f.png',
    slices: [
      {
        src: '/images/orange_5.png',
        alt: 'Floating slice leaf',
        className: 'spyit-slice-5',
        divStyle: {},
        imgStyle: { width: '120px', height: '120px', position: 'absolute', transform: 'translateX(100px) translateY(-30px)' }
      },
      {
        src: '/images/orange_4.png',
        alt: 'Chilled slice',
        className: 'spyit-slice-4',
        divStyle: {},
        imgStyle: { height: '95px', position: 'absolute' }
      },
      {
        src: '/images/orange_3.png',
        alt: 'Central overlapping slice',
        className: 'spyit-slice-3',
        divStyle: {},
        imgStyle: { width: '145px', height: '133px', position: 'absolute' }
      },
      {
        src: '/images/orange_2.png',
        alt: 'Floating slice top right',
        className: 'spyit-slice-2',
        divStyle: {},
        imgStyle: { width: '241px', height: '137px', position: 'absolute' }
      },
      {
        src: '/images/orange_1.png',
        alt: 'Ripe slice bundle',
        className: 'spyit-slice-1',
        divStyle: { right: '40px', bottom: '30px', width: '120px', height: '140px' },
        imgStyle: { width: '200px', height: '220px', transform: 'translateY(70px)', position: 'absolute' }
      }
    ],
    description: 'SPYIT delivers a refreshing burst of fruity flavor with every sip, making it the perfect companion for active lifestyles.',
    tags: ['Real fruit taste', 'Refreshment', 'Energy boost', 'Natural Flavor'],
    specs: {
      sugar: '5g',
      calories: '28 kcal',
      volume: '550 mL',
      caffeine: '0mg'
    },
    secretItems: [
      'Fresh Orange Pulp',
      'Zesty Citric Acids',
      'Zero Added Sugar',
      'Essential Micronutrients',
      'Vitamin C'
    ]
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    subName: 'Fresh Strawberry',
    tagline: 'Sweet Wild Dew',
    bgColor: '#EA3D5A',
    textColor: '#FFFFFF',
    accentColor: '#FF66A3',
    titleColor: '#BE123C',
    cardBgColor: '#EB3B5E',
    canImage: '/images/strawberry_can.png',
    canHeroImage: '/images/strawberry_can.png',
    frontImage: '/images/strawberry_f.png',
    slices: [
      {
        src: '/images/strawberry_5.png',
        alt: 'Floating strawberry leaf',
        className: 'spyit-slice-5',
        divStyle: {},
        imgStyle: { width: '120px', height: '120px', position: 'absolute', transform: 'translateX(100px) translateY(-30px)' }
      },
      {
        src: '/images/strawberry_4.png',
        alt: 'Chilled strawberry slice',
        className: 'spyit-slice-4',
        divStyle: {},
        imgStyle: { height: '95px', position: 'absolute' }
      },
      {
        src: '/images/strawberry_3.png',
        alt: 'Central overlapping strawberry',
        className: 'spyit-slice-3',
        divStyle: {},
        imgStyle: { width: '145px', height: '133px', position: 'absolute' }
      },
      {
        src: '/images/strawberry_2.png',
        alt: 'Floating slice top right',
        className: 'spyit-slice-2',
        divStyle: {},
        imgStyle: { width: '241px', height: '137px', position: 'absolute' }
      },
      {
        src: '/images/strawberry_1.png',
        alt: 'Ripe berry bundle',
        className: 'spyit-slice-1',
        divStyle: { right: '40px', bottom: '30px', width: '120px', height: '140px' },
        imgStyle: { width: '200px', height: '220px', transform: 'translateY(70px)', position: 'absolute' }
      }
    ],
    description: 'Crisp field-picked strawberries compressed with spring bubbles for a vibrant explosion of sweet refreshment.',
    tags: ['Real fruit taste', 'Refreshment', 'Energy boost', 'Natural Flavor'],
    specs: {
      sugar: '5g',
      calories: '25 kcal',
      volume: '550 mL',
      caffeine: '0mg'
    },
    secretItems: [
      'Real Fruit Concentrate',
      'Purified Water',
      'Natural Flavor',
      'Approved Food-Grade Sweetener',
      'Vitamin C'
    ]
  },
  {
    id: 'kiwi',
    name: 'Kiwi',
    subName: 'Fresh Kiwi',
    tagline: 'Tangy Tropical Surge',
    bgColor: '#4E7005',
    textColor: '#FFFFFF',
    accentColor: '#A8FF1A',
    titleColor: '#699602',
    cardBgColor: '#699602',
    canImage: '/images/kiwi_can.png',
    canHeroImage: '/images/kiwi_can.png',
    frontImage: '/images/kiwi_f.png',
    slices: [
      {
        src: '/images/kiwi_5.png',
        alt: 'Floating kiwi slice leaf',
        className: 'spyit-slice-5',
        divStyle: {},
        imgStyle: { width: '120px', height: '120px', position: 'absolute', transform: 'translateX(100px) translateY(-30px)' }
      },
      {
        src: '/images/kiwi_4.png',
        alt: 'Chilled kiwi slice',
        className: 'spyit-slice-4',
        divStyle: {},
        imgStyle: { height: '95px', position: 'absolute' }
      },
      {
        src: '/images/kiwi_3.png',
        alt: 'Central overlapping kiwi',
        className: 'spyit-slice-3',
        divStyle: {},
        imgStyle: { width: '145px', height: '133px', position: 'absolute' }
      },
      {
        src: '/images/kiwi_2.png',
        alt: 'Floating kiwi top right',
        className: 'spyit-slice-2',
        divStyle: {},
        imgStyle: { width: '241px', height: '137px', position: 'absolute' }
      },
      {
        src: '/images/kiwi_1.png',
        alt: 'Ripe kiwi bundle',
        className: 'spyit-slice-1',
        divStyle: { right: '40px', bottom: '30px', width: '120px', height: '140px' },
        imgStyle: { width: '200px', height: '220px', transform: 'translateY(70px)', position: 'absolute' }
      }
    ],
    description: 'Exotic wild kiwi delivering balanced tartness and tropical electrolytes to fuel your active everyday hustle.',
    tags: ['Real fruit taste', 'Refreshment', 'Energy boost', 'Natural Flavor'],
    specs: {
      sugar: '5g',
      calories: '26 kcal',
      volume: '550 mL',
      caffeine: '0mg'
    },
    secretItems: [
      'Wild Kiwi Puree',
      'Green Botanical Herbs',
      'No Preservatives',
      'Naturally Electrolyzed',
      'Vitamin C Boost'
    ]
  },
  {
    id: 'grapes',
    name: 'Grapes',
    subName: 'Fresh Berry Grapes',
    tagline: 'Velvet Concord Bliss',
    bgColor: '#610B46',
    textColor: '#FFFFFF',
    accentColor: '#B233FF',
    titleColor: '#4B0539',
    cardBgColor: '#4B0539',
    canImage: '/images/grapes_can.png',
    canHeroImage: '/images/grapes_can.png',
    frontImage: '/images/grapes_f.png',
    slices: [
      {
        src: '/images/grapes_5.png',
        alt: 'Floating grape leaf',
        className: 'spyit-slice-5',
        divStyle: {},
        imgStyle: { width: '120px', height: '120px', position: 'absolute', transform: 'translateX(100px) translateY(-30px)' }
      },
      {
        src: '/images/grapes_4.png',
        alt: 'Chilled grape cluster',
        className: 'spyit-slice-4',
        divStyle: {},
        imgStyle: { height: '95px', position: 'absolute' }
      },
      {
        src: '/images/grapes_3.png',
        alt: 'Central overlapping grape',
        className: 'spyit-slice-3',
        divStyle: {},
        imgStyle: { width: '145px', height: '133px', position: 'absolute' }
      },
      {
        src: '/images/grapes_2.png',
        alt: 'Floating grape slice top right',
        className: 'spyit-slice-2',
        divStyle: {},
        imgStyle: { width: '241px', height: '137px', position: 'absolute' }
      },
      {
        src: '/images/grapes_1.png',
        alt: 'Ripe grape bundle',
        className: 'spyit-slice-1',
        divStyle: { right: '40px', bottom: '30px', width: '120px', height: '140px' },
        imgStyle: { width: '200px', height: '220px', transform: 'translateY(70px)', position: 'absolute' }
      }
    ],
    description: 'Deep royal Concord grapes blended with sparkling mineral water for an opulent, antioxidant-packed soda experience.',
    tags: ['Real fruit taste', 'Refreshment', 'Energy boost', 'Natural Flavor'],
    specs: {
      sugar: '5g',
      calories: '30 kcal',
      volume: '550 mL',
      caffeine: '0mg'
    },
    secretItems: [
      'Precious Concord Grapes',
      'Carbonated Spring Water',
      'Antioxidant Rich',
      'Real Fruit Fusion',
      'Pure Stevia'
    ]
  }
];

export const MARQUEE_ITEMS = [
  { text: 'SPYIT Kiwi', img: '/images/kiwi_can.png', tilt: '-3deg' },
  { text: 'SPYIT Berry Grapes', img: '/images/grapes_can.png', tilt: '2deg' },
  { text: 'SPYIT Orange', img: '/images/orange_can.png', tilt: '0deg' },
  { text: 'SPYIT Strawberry', img: '/images/strawberry_can.png', tilt: '-2deg' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'tahsina',
    name: 'Tahsina Rahman',
    role: 'Fitness Coach & Athlete',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    flavorColor: '#EA3D5A',
    flavorName: 'Wild Strawberry',
    quote: 'Absolutely mind-blowing flavor! Tastes like high-fidelity fresh strawberries plucked under morning dew. Zero bitter aftertaste, pure clean energy that drives my daily high-intensity workouts! I am officially hooked.',
    rating: 5
  },
  {
    id: 'nabeel',
    name: 'Nabeel Kaiser',
    role: 'Creative Director & UX Lead',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    flavorColor: '#F85A01',
    flavorName: 'Fresh Orange',
    quote: 'As a design director, I am deeply obsessed with the aesthetics, but the flavor is the actual masterpiece here. The zesty orange punch is crisp, real, and instantly reactivates my focus during long creative sprints. A masterpiece of design and taste!',
    rating: 5
  },
  {
    id: 'ayman',
    name: 'Ayman Sadiq',
    role: 'Content Creator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    flavorColor: '#79125A',
    flavorName: 'Berry Grapes',
    quote: 'Concord grapes have never been presented with such sparkling majesty. Smooth, rich, and velvety sweet without the typical sugar overload. It feels incredibly premium and satisfies my dessert cravings perfectly healthily.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ingredients',
    categoryColor: '#EA3D5A',
    question: 'What exactly makes your dynamic juices so healthy?',
    answer: 'We source clean, premium grade organic fruits pressed immediately under morning dew conditions. There are absolutely zero artificial preservatives, zero toxic added sweeteners, and only 5g of natural fruit sugars per dynamic bottle so you feel amazing and crash-free.',
    tag: 'Guaranteed Organic'
  },
  {
    id: 'faq-2',
    category: 'Flavors',
    categoryColor: '#F85A01',
    question: 'Are the fruit color rings and bottle shapes organic?',
    answer: 'Yes! Every ingredient, aroma extract, and natural botanical tincture is 100% plant-derived and certified non-GMO. Even our can linings are BPA-NI and eco-friendly recyclable aluminium.',
    tag: '100% Plant-Derived'
  },
  {
    id: 'faq-3',
    category: 'Health',
    categoryColor: '#00A165',
    question: 'Can I drink this as a crisp pre-workout drink?',
    answer: 'Absolutely! SPYIT is naturally packed with potassium, iron, and vitamin complexes that provide a clean, jitter-free energy boost and cellular hydration without the artificial caffeine spike.',
    tag: 'Natural Hydration'
  },
  {
    id: 'faq-4',
    category: 'Shipping',
    categoryColor: '#79125A',
    question: 'How long does shipping take to preserve peak freshness?',
    answer: 'All orders placed before 2 PM are cold-packed in insulated recyclable thermal packaging and dispatched same-day with expedited 24-48 hour chilled courier delivery straight to your doorstep.',
    tag: 'Cold Express Delivery'
  }
];
