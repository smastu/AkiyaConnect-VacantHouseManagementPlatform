import { Property } from '../types/property';

export const sampleProperties: Property[] = [
  // 既存の15件の物件データは維持...

  {
    id: '16',
    title: '山頂のリゾート別荘',
    description: '標高1000mの山頂に位置する贅沢なリゾート別荘。雄大な山々を一望できる絶景ポイント。',
    price: 280000,
    size: 200,
    propertyType: 'リゾート',
    rooms: 6,
    age: 20,
    renovated: true,
    status: 'available',
    condition: 'excellent',
    hashtags: ['#リゾート', '#絶景', '#別荘', '#山暮らし'],
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
  },
  {
    id: '17',
    title: '港町のゲストハウス',
    description: '港町の中心部に位置する築50年の古い建物を改装したゲストハウス。国際交流の拠点として人気。',
    price: 135000,
    size: 150,
    propertyType: 'ゲストハウス',
    rooms: 8,
    age: 50,
    renovated: true,
    status: 'available',
    condition: 'good',
    hashtags: ['#ゲストハウス', '#国際交流', '#港町', '#観光'],
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
    id: '18',
    title: '茶畑の中の古民家',
    description: '緑豊かな茶畑に囲まれた築100年の古民家。茶室付きで、日本の伝統文化を体験できる貴重な物件。',
    price: 165000,
    size: 130,
    propertyType: '古民家',
    rooms: 5,
    age: 100,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#茶畑', '#古民家', '#茶室', '#日本文化'],
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
    id: '19',
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
    hashtags: ['#アーティスト', '#アトリエ', '#海辺', '#創作'],
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
    id: '20',
    title: '森の中のドームハウス',
    description: '自然との調和を追求したユニークなドーム型住居。エコフレンドリーな設備を完備。',
    price: 225000,
    size: 90,
    propertyType: 'ドームハウス',
    rooms: 3,
    age: 5,
    renovated: false,
    status: 'available',
    condition: 'excellent',
    hashtags: ['#ドームハウス', '#エコ住宅', '#自然', '#ユニーク'],
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
      'https://images.pexels.com/photos/6508175/pexels-photo-6508175.jpeg',
      'https://images.pexels.com/photos/6508176/pexels-photo-6508176.jpeg',
      'https://images.pexels.com/photos/6508177/pexels-photo-6508177.jpeg'
    ],
    contact: {
      name: 'エコハウス不動産',
      phone: '0555-12-3456',
      email: 'info@eco-house.jp'
    }
  }
];