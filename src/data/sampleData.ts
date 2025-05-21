import { Property } from '../types/property';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: '山里の古民家',
    description: '自然豊かな環境にある古民家。リノベーションで新たな魅力を引き出せる物件です。',
    price: 1500000,
    size: 120,
    propertyType: '古民家',
    rooms: 4,
    age: 50,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#古民家', '#田舎暮らし', '#自然豊か', '#菜園付き'],
    location: {
      prefecture: '長野県',
      city: '安曇野市',
      address: '〇〇町1-2-3',
      coordinates: {
        lat: 36.3031,
        lng: 137.9715
      }
    },
    features: ['菜園スペース', '井戸', '土蔵'],
    images: [
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '山里不動産',
      phone: '0263-12-3456',
      email: 'info@yamazato.co.jp'
    }
  },
  {
    id: '2',
    title: '海辺の空き家',
    description: '海まで徒歩5分の好立地。要リフォームですが、ポテンシャルの高い物件です。',
    price: 2000000,
    size: 85,
    propertyType: '一戸建て',
    rooms: 3,
    age: 35,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#海近く', '#サーファーズハウス', '#リフォーム物件', '#好立地'],
    location: {
      prefecture: '千葉県',
      city: '南房総市',
      address: '〇〇町4-5-6',
      coordinates: {
        lat: 34.9197,
        lng: 139.8397
      }
    },
    features: ['海近く', '駐車場', 'バルコニー'],
    images: [
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '南房不動産',
      phone: '0470-78-9012',
      email: 'info@nanbo-estate.jp'
    }
  },
  // ... 以下、18件の物件データが続きます（スペースの都合上省略）
];

export const suppliers = [
  {
    id: '1',
    name: 'エコ建材センター',
    specialty: '環境配慮型リノベーション',
    rating: 4.9,
    completedProjects: 150,
    description: '自然素材にこだわった環境に優しいリノベーションを提供。',
    expertise: ['自然素材', '断熱工事', '省エネ設計', '空気環境改善']
  },
  {
    id: '2',
    name: '伝統工法研究所',
    specialty: '古民家再生',
    rating: 4.8,
    completedProjects: 120,
    description: '伝統工法を活かした古民家再生のスペシャリスト。',
    expertise: ['伝統工法', '耐震補強', '古材活用', '左官工事']
  },
  // ... 以下、8件の業者データが続きます（スペースの都合上省略）
];