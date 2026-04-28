export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface GalleryImage {
  url: string;
  alt: string;
  location: string;
}

export const SERVICES: Service[] = [
  {
    id: 'luxury-picnics',
    title: 'Luxury Picnics',
    description: 'Bespoke, aesthetically curated setups for any occasion. From birthdays to anniversaries, we handle everything so you can just show up.',
    image: '/images/picnic-natural.jpg',
  },
  {
    id: 'slow-social',
    title: 'The Slow Social',
    description: 'Community-focused events designed to foster connection and joy. Join our regular meetups in Newcastle’s most beautiful spots.',
    image: '/images/picnic-pink.jpg',
  },
  {
    id: 'proposals',
    title: 'Proposals',
    description: 'The ultimate romantic gesture. We create the perfect, private setting for your special moment, complete with all the details.',
    image: '/images/picnic-blue.jpg',
  }
];

export const PRICING_DETAIL = {
  main: [
    { range: 'Up to 4 people', price: '$250' },
    { range: '5-8 people', price: '$320' },
    { range: '9-12 people', price: '$390' },
    { range: '13-16 people', price: '$460' },
  ],
  extras: [
    { item: 'Fluffy Chair', price: '$25' },
    { item: 'Personalised Sign', price: '$50' },
    { item: 'Gold Ice Bucket', price: '$10' },
    { item: 'Ice for Ice Bucket', price: '$5' },
  ],
  proposals: { title: 'Proposals', price: '$450' }
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: '/images/picnic-natural.jpg',
    alt: 'Natural elegance setup',
    location: 'King Edward Park'
  },
  {
    url: '/images/picnic-blue.jpg',
    alt: 'Blue themed picnic',
    location: 'Redhead Beach'
  },
  {
    url: '/images/picnic-pink.jpg',
    alt: 'Pink & red celebration',
    location: 'Nobbys Beach'
  },
  {
    url: '/images/picnic-glassware.jpg',
    alt: 'Premium glassware service',
    location: 'Lake Macquarie'
  }
];
