import { Property } from '../types/property';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: '静かな住宅地の一軒家',
    description: '閑静な住宅街にある2階建ての一軒家。庭付きで、リノベーションで新たな魅力を引き出せる物件です。駅から徒歩15分、近くにスーパーや学校があり生活に便利です。',
    price: 15000000,
    size: 120,
    propertyType: '一戸建て',
    rooms: 4,
    age: 35,
    renovated: false,
    status: 'available',
    condition: 'good',
    location: {
      prefecture: '神奈川県',
      city: '横浜市青葉区',
      address: '〇〇町1-2-3',
      coordinates: {
        lat: 35.5461,
        lng: 139.4471
      }
    },
    features: ['駐車場', '庭', '南向き'],
    images: [
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '山田不動産',
      phone: '045-123-4567',
      email: 'info@yamada-estate.co.jp'
    }
  },
  {
    id: '2',
    title: 'レトロな雰囲気の古民家',
    description: '築80年の趣ある古民家。梁や柱などの木材は状態が良く、伝統的な日本家屋の魅力を残しています。リノベーションにより現代的な生活空間として甦らせることが可能です。',
    price: 8500000,
    size: 150,
    propertyType: '古民家',
    rooms: 6,
    age: 80,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    location: {
      prefecture: '長野県',
      city: '松本市',
      address: '〇〇町4-5-6',
      coordinates: {
        lat: 36.2380,
        lng: 137.9720
      }
    },
    features: ['土蔵', '井戸', '庭園'],
    images: [
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '古家再生不動産',
      phone: '0263-78-9012',
      email: 'info@kominka-estate.jp'
    }
  },
  {
    id: '3',
    title: 'リノベーション済みの町家',
    description: '伝統的な町家をモダンにリノベーション。木材の風合いを残しながら、水回りや断熱性能を現代的にアップデート。古き良き雰囲気と現代の快適さを両立した稀少物件です。',
    price: 29800000,
    size: 90,
    propertyType: '町家',
    rooms: 3,
    age: 70,
    renovated: true,
    status: 'pending',
    condition: 'excellent',
    location: {
      prefecture: '京都府',
      city: '京都市下京区',
      address: '〇〇町7-8-9',
      coordinates: {
        lat: 35.0116,
        lng: 135.7681
      }
    },
    features: ['坪庭', '格子窓', '土間'],
    images: [
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg'
    ],
    contact: {
      name: '京町家再生プロジェクト',
      phone: '075-345-6789',
      email: 'info@kyomachiya-project.jp'
    }
  },
  {
    id: '4',
    title: '海が見える2階建てコテージ',
    description: '太平洋を望む丘の上に建つ2階建てコテージ。天気の良い日には水平線まで見渡せる絶景が魅力。バルコニーからの朝日鑑賞は格別です。避暑地や週末の別荘としても最適。',
    price: 22500000,
    size: 85,
    propertyType: 'コテージ',
    rooms: 3,
    age: 20,
    renovated: false,
    status: 'available',
    condition: 'good',
    location: {
      prefecture: '千葉県',
      city: '南房総市',
      address: '〇〇町10-11-12',
      coordinates: {
        lat: 34.9400,
        lng: 139.8400
      }
    },
    features: ['海望', 'バルコニー', '駐車場'],
    images: [
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '房総リゾート不動産',
      phone: '0470-12-3456',
      email: 'info@boso-resort.jp'
    }
  },
  {
    id: '5',
    title: '緑に囲まれた山小屋風コテージ',
    description: '四季折々の自然を楽しめる山間部の小さなコテージ。薪ストーブがあり、冬は暖かく過ごせます。敷地内には小川が流れ、自然との調和を感じられる物件です。',
    price: 12800000,
    size: 60,
    propertyType: '山小屋',
    rooms: 2,
    age: 15,
    renovated: true,
    status: 'available',
    condition: 'excellent',
    location: {
      prefecture: '長野県',
      city: '北安曇郡白馬村',
      address: '〇〇13-14-15',
      coordinates: {
        lat: 36.7000,
        lng: 137.8300
      }
    },
    features: ['薪ストーブ', '渓流', '天然林'],
    images: [
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg'
    ],
    contact: {
      name: '白馬マウンテン不動産',
      phone: '0261-72-3456',
      email: 'info@hakuba-mountain.jp'
    }
  },
  {
    id: '6',
    title: '森の中のドームハウス',
    description: '自然との調和を追求したユニークなドーム型住居。エコフレンドリーな設備を完備し、快適な暮らしと環境への配慮を両立しています。',
    price: 225000,
    size: 90,
    propertyType: 'ドームハウス',
    rooms: 3,
    age: 5,
    renovated: false,
    status: 'available',
    condition: 'excellent',
    location: {
      prefecture: '山梨県',
      city: '富士河口湖町',
      address: '〇〇町58-59-60',
      coordinates: {
        lat: 35.5171,
        lng: 138.7516
      }
    },
    features: ['太陽光発電', '雨水利用システム', '地熱利用'],
    images: [
      'https://images.pexels.com/photos/14025502/pexels-photo-14025502.jpeg',
      'https://images.pexels.com/photos/14025503/pexels-photo-14025503.jpeg',
      'https://images.pexels.com/photos/14025504/pexels-photo-14025504.jpeg'
    ],
    contact: {
      name: 'エコハウス不動産',
      phone: '0555-12-3456',
      email: 'info@eco-house.jp'
    }
  },
  {
    id: '7',
    title: '港町のゲストハウス',
    description: '港町の中心部に位置する築50年の古い建物を改装したゲストハウス。国際交流の拠点として人気を集めています。',
    price: 135000,
    size: 150,
    propertyType: 'ゲストハウス',
    rooms: 8,
    age: 50,
    renovated: true,
    status: 'available',
    condition: 'good',
    location: {
      prefecture: '神奈川県',
      city: '横浜市中区',
      address: '〇〇町49-50-51',
      coordinates: {
        lat: 35.4478,
        lng: 139.6425
      }
    },
    features: ['共用キッチン', 'ラウンジ', 'コインランドリー'],
    images: [
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
      'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg',
      'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg'
    ],
    contact: {
      name: '横浜ハーバー不動産',
      phone: '045-123-4567',
      email: 'info@yokohama-harbor.jp'
    }
  },
  {
    id: '8',
    title: '茶畑の中の古民家',
    description: '緑豊かな茶畑に囲まれた築100年の古民家。茶室付きで、日本の伝統文化を体験できる貴重な物件です。',
    price: 165000,
    size: 130,
    propertyType: '古民家',
    rooms: 5,
    age: 100,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    location: {
      prefecture: '静岡県',
      city: '掛川市',
      address: '〇〇町52-53-54',
      coordinates: {
        lat: 34.7689,
        lng: 138.0149
      }
    },
    features: ['茶室', '茶畑付き', '蔵'],
    images: [
      'https://images.pexels.com/photos/5997978/pexels-photo-5997978.jpeg',
      'https://images.pexels.com/photos/5997979/pexels-photo-5997979.jpeg',
      'https://images.pexels.com/photos/5997980/pexels-photo-5997980.jpeg'
    ],
    contact: {
      name: '静岡茶園不動産',
      phone: '0537-12-3456',
      email: 'info@shizuoka-tea.jp'
    }
  },
  {
    id: '9',
    title: '海辺のアーティストレジデンス',
    description: '波音が聞こえる海辺のアトリエ付き住居。芸術家の創作活動に最適な環境です。',
    price: 195000,
    size: 140,
    propertyType: 'アトリエ',
    rooms: 4,
    age: 15,
    renovated: true,
    status: 'available',
    condition: 'excellent',
    location: {
      prefecture: '神奈川県',
      city: '葉山町',
      address: '〇〇町55-56-57',
      coordinates: {
        lat: 35.2719,
        lng: 139.5847
      }
    },
    features: ['アトリエスペース', 'オーシャンビュー', 'ウッドデッキ'],
    images: [
      'https://images.pexels.com/photos/6207318/pexels-photo-6207318.jpeg',
      'https://images.pexels.com/photos/6207319/pexels-photo-6207319.jpeg',
      'https://images.pexels.com/photos/6207320/pexels-photo-6207320.jpeg'
    ],
    contact: {
      name: '湘南アート不動産',
      phone: '046-876-5432',
      email: 'info@shonan-art.jp'
    }
  },
  {
    id: '10',
    title: '山頂のリゾート別荘',
    description: '標高1000mの山頂に位置する贅沢なリゾート別荘。雄大な山々を一望できる絶景ポイントです。',
    price: 280000,
    size: 200,
    propertyType: 'リゾート',
    rooms: 6,
    age: 20,
    renovated: true,
    status: 'available',
    condition: 'excellent',
    location: {
      prefecture: '長野県',
      city: '軽井沢町',
      address: '〇〇町46-47-48',
      coordinates: {
        lat: 36.3489,
        lng: 138.6271
      }
    },
    features: ['温泉付き', 'サウナ', '屋上テラス'],
    images: [
      'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg',
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg',
      'https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg'
    ],
    contact: {
      name: '軽井沢リゾート不動産',
      phone: '0267-12-3456',
      email: 'info@karuizawa-resort.jp'
    }
  }
];