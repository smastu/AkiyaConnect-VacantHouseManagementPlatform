import { Property } from '../types/property';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: '静かな住宅地の一軒家',
    description: '閑静な住宅街にある2階建ての一軒家。庭付きで、リノベーションで新たな魅力を引き出せる物件です。駅から徒歩15分、近くにスーパーや学校があり生活に便利です。',
    price: 2800000,
    size: 120,
    propertyType: '一戸建て',
    rooms: 4,
    age: 35,
    renovated: false,
    status: 'available',
    condition: 'good',
    hashtags: ['#駅近', '#庭付き', '#リノベ向け'],
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
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg'
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
    price: 2500000,
    size: 150,
    propertyType: '古民家',
    rooms: 6,
    age: 80,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#古民家', '#伝統家屋', '#リノベ物件'],
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
      'https://images.pexels.com/photos/5997978/pexels-photo-5997978.jpeg',
      'https://images.pexels.com/photos/5997979/pexels-photo-5997979.jpeg',
      'https://images.pexels.com/photos/5997980/pexels-photo-5997980.jpeg'
    ],
    contact: {
      name: '古家再生不動産',
      phone: '0263-78-9012',
      email: 'info@kominka-estate.jp'
    }
  },
  {
    id: '3',
    title: '森の中のドームハウス',
    description: '自然との調和を追求したユニークなドーム型住居。エコフレンドリーな設備を完備し、快適な暮らしと環境への配慮を両立しています。',
    price: 2250000,
    size: 90,
    propertyType: 'ドームハウス',
    rooms: 3,
    age: 5,
    renovated: false,
    status: 'available',
    condition: 'excellent',
    hashtags: ['#エコハウス', '#自然派', '#ユニーク物件'],
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
      'https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg',
      'https://images.pexels.com/photos/9828171/pexels-photo-9828171.jpeg',
      'https://images.pexels.com/photos/9828172/pexels-photo-9828172.jpeg'
    ],
    contact: {
      name: 'エコハウス不動産',
      phone: '0555-12-3456',
      email: 'info@eco-house.jp'
    }
  },
  {
    id: '4',
    title: '港町のゲストハウス',
    description: '港町の中心部に位置する築50年の古い建物を改装したゲストハウス。国際交流の拠点として人気を集めています。',
    price: 1350000,
    size: 150,
    propertyType: 'ゲストハウス',
    rooms: 8,
    age: 50,
    renovated: true,
    status: 'available',
    condition: 'good',
    hashtags: ['#ゲストハウス', '#国際交流', '#港町'],
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
    id: '5',
    title: '茶畑の中の古民家',
    description: '緑豊かな茶畑に囲まれた築100年の古民家。茶室付きで、日本の伝統文化を体験できる貴重な物件です。',
    price: 1650000,
    size: 130,
    propertyType: '古民家',
    rooms: 5,
    age: 100,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#茶室付き', '#茶畑', '#伝統文化'],
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
      'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
      'https://images.pexels.com/photos/6186523/pexels-photo-6186523.jpeg'
    ],
    contact: {
      name: '静岡茶園不動産',
      phone: '0537-12-3456',
      email: 'info@shizuoka-tea.jp'
    }
  }
];