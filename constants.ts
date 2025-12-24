
import { ServiceCategory, ServiceType } from './types';

export const CONTACT_PHONE = '+201550999550';
export const BRAND_NAME = 'Halim Wedding';

export const PACKAGES_DATA: ServiceType[] = [
  {
    category: ServiceCategory.COMBO,
    packages: [
      {
        id: 1,
        name: 'PACKAGE 1',
        features: [
          '12 hours with 2 photographer',
          'Promo 5-7 minutes',
          'Instagram Reel',
          'Media coverage by mobile',
          'Editing all photos',
          'Online gallery and download'
        ],
        price: '16000 L.E',
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'PACKAGE 2',
        features: [
          '12 hours with 2 photographer',
          'Promo 5-7 minutes',
          'Instagram Reel',
          'Editing all photos',
          'Online gallery and download'
        ],
        price: '14000 L.E',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 3,
        name: 'PACKAGE 3',
        features: [
          '12 hours with 2 photographer',
          'Media Coverage by Mobile',
          'Editing all photos',
          'Online gallery and download'
        ],
        price: '12000 L.E',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    category: ServiceCategory.VIDEOGRAPHY,
    note: 'above packages without Photography',
    packages: [
      {
        id: 1,
        name: 'PACKAGE 1',
        features: [
          '12 hours with 1 Videographer',
          'Media coverage by mobile',
          'Promo 5-7 minutes',
          'Instagram Reel'
        ],
        price: '10000 L.E',
        image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'PACKAGE 2',
        features: [
          '12 hours with 1 Videographer',
          'Promo 5-7 minutes',
          'Instagram Reel'
        ],
        price: '7000 L.E',
        image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 3,
        name: 'PACKAGE 3',
        features: [
          'Half day with 1 videographer',
          'Session + (Party or Wedding Ceremony)',
          'Up to 8hrs',
          'Promo 4-6 minutes',
          'Instagram Reel'
        ],
        price: '5000 L.E',
        image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    category: ServiceCategory.PHOTOGRAPHY,
    note: 'above packages without Videography & Media Coverage',
    packages: [
      {
        id: 1,
        name: 'PACKAGE 1',
        features: [
          '12 hours with 2 photographer',
          'Pre, session & Party',
          'Editing all photos',
          'Online gallery and download'
        ],
        price: '10000 L.E',
        image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'PACKAGE 2',
        features: [
          'Half day with 2 photographer',
          'Session & Party',
          'Up to 8hrs',
          'Editing all photos',
          'Online gallery and download'
        ],
        price: '6000 L.E',
        image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 3,
        name: 'PACKAGE 3',
        features: [
          'Half day (Ceremony) with 2 photographer',
          'Session & Wedding Ceremony (Ktp-Ketap)',
          'Up to 8hrs',
          'Editing all photos',
          'Online gallery and download'
        ],
        price: '5000 L.E',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    category: ServiceCategory.MEDIA_COVERAGE,
    note: 'above packages without Photography & Videography',
    packages: [
      {
        id: 1,
        name: 'PACKAGE 1',
        features: [
          'By Camera',
          '12 hours',
          'Full raw data',
          '2 Instagram Reel',
          'TikTok Videos'
        ],
        price: '7000 L.E',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'PACKAGE 2',
        features: [
          'By Mobile',
          '12 hours',
          'Full raw data',
          '2 Instagram Reel',
          'TikTok Videos'
        ],
        price: '4000 L.E',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 3,
        name: 'PACKAGE 3',
        features: [
          'Half day with 1 Mobile',
          'Session + (Party or Wedding Ceremony)',
          'Up to 8hrs',
          'Full raw data',
          '1 Instagram Reel'
        ],
        price: '3500 L.E',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    category: ServiceCategory.FULL_RECORD,
    packages: [
      {
        id: 1,
        name: 'PACKAGE 1',
        features: [
          'Two 4k Camera',
          'Up to 5 hours',
          'Includes full hall recording (up to 4hrs)'
        ],
        price: '8000 L.E',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'PACKAGE 2',
        features: [
          'One 4k Camera',
          'Up to 5 hours',
          'Includes full hall recording (up to 4hrs)'
        ],
        price: '5000 L.E',
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 3,
        name: 'PACKAGE 3',
        features: [
          'One 4k Camera',
          '2nd 4k Camera with Crane',
          'Up to 5 hours',
          'Includes full hall recording (up to 4hrs)'
        ],
        price: '11000 L.E',
        image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=800&auto=format&fit=crop'
      }
    ]
  }
];
