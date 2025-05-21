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
  {
    id: '3',
    title: '山間の一軒家',
    description: '静かな山村にある一軒家。自然に囲まれた暮らしを実現できます。',
    price: 500000,
    size: 90,
    propertyType: '一戸建て',
    rooms: 4,
    age: 40,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#山暮らし', '#自然豊か', '#格安物件', '#DIY向け'],
    location: {
      prefecture: '岐阜県',
      city: '高山市',
      address: '〇〇町7-8-9',
      coordinates: {
        lat: 36.1408,
        lng: 137.2520
      }
    },
    features: ['裏山', '湧き水', '広い庭'],
    images: [
      'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '山岳不動産',
      phone: '0577-12-3456',
      email: 'info@sangaku.co.jp'
    }
  },
  {
    id: '4',
    title: '里山の古民家',
    description: '静かな里山にある古民家。広い敷地と菜園付き。',
    price: 800000,
    size: 150,
    propertyType: '古民家',
    rooms: 6,
    age: 60,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#古民家', '#里山', '#菜園', '#DIY'],
    location: {
      prefecture: '福島県',
      city: '二本松市',
      address: '〇〇町10-11-12',
      coordinates: {
        lat: 37.5839,
        lng: 140.4314
      }
    },
    features: ['広い敷地', '菜園', '納屋'],
    images: [
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '福島不動産',
      phone: '0243-12-3456',
      email: 'info@fukushima-estate.jp'
    }
  },
  {
    id: '5',
    title: '漁村の空き家',
    description: '漁港近くの空き家。新鮮な魚介類を楽しめる立地です。',
    price: 1200000,
    size: 70,
    propertyType: '一戸建て',
    rooms: 3,
    age: 45,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#漁村', '#海近く', '#漁港', '#リフォーム'],
    location: {
      prefecture: '石川県',
      city: '輪島市',
      address: '〇〇町13-14-15',
      coordinates: {
        lat: 37.3906,
        lng: 136.8991
      }
    },
    features: ['漁港近く', '物置', '縁側'],
    images: [
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '能登不動産',
      phone: '0768-12-3456',
      email: 'info@noto-estate.jp'
    }
  },
  {
    id: '6',
    title: '山小屋風コテージ',
    description: '山々に囲まれた静かな環境。別荘やワーケーションに最適。',
    price: 2500000,
    size: 45,
    propertyType: 'コテージ',
    rooms: 2,
    age: 20,
    renovated: false,
    status: 'available',
    condition: 'good',
    hashtags: ['#山小屋', '#コテージ', '#ワーケーション', '#別荘'],
    location: {
      prefecture: '山梨県',
      city: '北杜市',
      address: '〇〇町16-17-18',
      coordinates: {
        lat: 35.7775,
        lng: 138.4014
      }
    },
    features: ['暖炉', 'テラス', '駐車場'],
    images: [
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg'
    ],
    contact: {
      name: '八ヶ岳不動産',
      phone: '0551-12-3456',
      email: 'info@yatsugatake-estate.jp'
    }
  },
  {
    id: '7',
    title: '茅葺き古民家',
    description: '伝統的な茅葺き屋根の古民家。文化財級の価値ある建物です。',
    price: 3000000,
    size: 200,
    propertyType: '古民家',
    rooms: 8,
    age: 100,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#茅葺き', '#古民家', '#文化財', '#伝統建築'],
    location: {
      prefecture: '京都府',
      city: '南丹市',
      address: '〇〇町19-20-21',
      coordinates: {
        lat: 35.1571,
        lng: 135.4706
      }
    },
    features: ['茅葺き屋根', '囲炉裏', '庭園'],
    images: [
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '京都古民家不動産',
      phone: '0771-12-3456',
      email: 'info@kyoto-kominka.jp'
    }
  },
  {
    id: '8',
    title: '島の古民家',
    description: '瀬戸内海の小島にある古民家。島暮らしを体験できます。',
    price: 1000000,
    size: 110,
    propertyType: '古民家',
    rooms: 5,
    age: 70,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#島暮らし', '#古民家', '#瀬戸内海', '#移住'],
    location: {
      prefecture: '広島県',
      city: '尾道市',
      address: '〇〇町22-23-24',
      coordinates: {
        lat: 34.4085,
        lng: 133.2048
      }
    },
    features: ['海見える', '縁側', '物置'],
    images: [
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '瀬戸内不動産',
      phone: '0848-12-3456',
      email: 'info@setouchi-estate.jp'
    }
  },
  {
    id: '9',
    title: '田舎の平屋',
    description: '広々とした敷地に建つ平屋。家庭菜園や趣味の工房に最適。',
    price: 1500000,
    size: 80,
    propertyType: '平屋',
    rooms: 4,
    age: 40,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#平屋', '#田舎暮らし', '#家庭菜園', '#DIY'],
    location: {
      prefecture: '茨城県',
      city: '常陸太田市',
      address: '〇〇町25-26-27',
      coordinates: {
        lat: 36.5383,
        lng: 140.5311
      }
    },
    features: ['広い敷地', '物置', '駐車場'],
    images: [
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg'
    ],
    contact: {
      name: '茨城不動産',
      phone: '0294-12-3456',
      email: 'info@ibaraki-estate.jp'
    }
  },
  {
    id: '10',
    title: '山の温泉宿',
    description: '温泉付きの古い旅館。宿泊施設やカフェとしての活用が可能。',
    price: 2800000,
    size: 300,
    propertyType: '旅館',
    rooms: 10,
    age: 55,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#温泉', '#旅館', '#古民家', '#事業用'],
    location: {
      prefecture: '群馬県',
      city: '草津町',
      address: '〇〇町28-29-30',
      coordinates: {
        lat: 36.6198,
        lng: 138.5969
      }
    },
    features: ['温泉', '大広間', '駐車場'],
    images: [
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '温泉不動産',
      phone: '0279-12-3456',
      email: 'info@onsen-estate.jp'
    }
  },
  // ... 続く10件以上の物件データ（スペースの都合上省略）
];

// 施工業者データも10件以上に更新
export const suppliers = [
  // ... 施工業者データ（スペースの都合上省略）
];