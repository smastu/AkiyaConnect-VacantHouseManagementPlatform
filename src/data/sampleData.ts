import { Property } from '../types/property';

export const sampleProperties: Property[] = [
  // 既存の10件の物件データは省略...

  {
    id: '11',
    title: '海辺の別荘',
    description: '波の音が聞こえる海辺の別荘。サーフィンや海水浴に最適な立地です。',
    price: 180000,
    size: 110,
    propertyType: '別荘',
    rooms: 4,
    age: 25,
    renovated: false,
    status: 'available',
    condition: 'good',
    hashtags: ['#海辺の暮らし', '#サーフィン', '#リゾート', '#別荘'],
    location: {
      prefecture: '千葉県',
      city: '一宮町',
      address: '〇〇町31-32-33',
      coordinates: {
        lat: 35.3789,
        lng: 140.3906
      }
    },
    features: ['オーシャンビュー', 'サーフボード置き場', 'バーベキューエリア'],
    images: [
      'https://images.pexels.com/photos/3951751/pexels-photo-3951751.jpeg',
      'https://images.pexels.com/photos/3951752/pexels-photo-3951752.jpeg',
      'https://images.pexels.com/photos/3951753/pexels-photo-3951753.jpeg'
    ],
    contact: {
      name: '千葉リゾート不動産',
      phone: '0475-12-3456',
      email: 'info@chiba-resort.jp'
    }
  },
  {
    id: '12',
    title: '里山の古民家',
    description: '自然豊かな里山にある古民家。有機農業や自給自足生活に最適です。',
    price: 95000,
    size: 160,
    propertyType: '古民家',
    rooms: 6,
    age: 70,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#里山暮らし', '#自給自足', '#古民家再生', '#田舎暮らし'],
    location: {
      prefecture: '福島県',
      city: '二本松市',
      address: '〇〇町34-35-36',
      coordinates: {
        lat: 37.5839,
        lng: 140.4314
      }
    },
    features: ['田畑付き', '井戸', '薪ストーブ'],
    images: [
      'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
      'https://images.pexels.com/photos/6492404/pexels-photo-6492404.jpeg',
      'https://images.pexels.com/photos/6492405/pexels-photo-6492405.jpeg'
    ],
    contact: {
      name: '福島田舎暮らし不動産',
      phone: '0243-12-3456',
      email: 'info@fukushima-inaka.jp'
    }
  },
  {
    id: '13',
    title: '山小屋カフェ',
    description: '山々に囲まれた静かな場所にある山小屋。カフェとして使用されていました。',
    price: 145000,
    size: 85,
    propertyType: '山小屋',
    rooms: 3,
    age: 30,
    renovated: true,
    status: 'available',
    condition: 'good',
    hashtags: ['#山小屋', '#カフェ', '#山暮らし', '#自然'],
    location: {
      prefecture: '山梨県',
      city: '北杜市',
      address: '〇〇町37-38-39',
      coordinates: {
        lat: 35.7775,
        lng: 138.4242
      }
    },
    features: ['キッチン設備', 'テラス席', '駐車場'],
    images: [
      'https://images.pexels.com/photos/6775267/pexels-photo-6775267.jpeg',
      'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg',
      'https://images.pexels.com/photos/6775269/pexels-photo-6775269.jpeg'
    ],
    contact: {
      name: '山梨マウンテン不動産',
      phone: '0551-12-3456',
      email: 'info@yamanashi-mountain.jp'
    }
  },
  {
    id: '14',
    title: '町屋ギャラリー',
    description: 'アートギャラリーとして使用されていた町屋。展示スペースとしても居住スペースとしても利用可能。',
    price: 220000,
    size: 120,
    propertyType: '町家',
    rooms: 5,
    age: 80,
    renovated: true,
    status: 'available',
    condition: 'excellent',
    hashtags: ['#町家', '#ギャラリー', '#アート', '#金沢'],
    location: {
      prefecture: '石川県',
      city: '金沢市',
      address: '〇〇町40-41-42',
      coordinates: {
        lat: 36.5617,
        lng: 136.6562
      }
    },
    features: ['展示スペース', '蔵', '中庭'],
    images: [
      'https://images.pexels.com/photos/6186523/pexels-photo-6186523.jpeg',
      'https://images.pexels.com/photos/6186524/pexels-photo-6186524.jpeg',
      'https://images.pexels.com/photos/6186525/pexels-photo-6186525.jpeg'
    ],
    contact: {
      name: '金沢伝統家屋不動産',
      phone: '076-123-4567',
      email: 'info@kanazawa-estate.jp'
    }
  },
  {
    id: '15',
    title: '海の見える民宿',
    description: '漁港近くの元民宿。新鮮な魚介類を使ったレストランや宿としての再開業に最適。',
    price: 165000,
    size: 180,
    propertyType: '民宿',
    rooms: 8,
    age: 35,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#民宿', '#漁港', '#海の幸', '#観光'],
    location: {
      prefecture: '三重県',
      city: '鳥羽市',
      address: '〇〇町43-44-45',
      coordinates: {
        lat: 34.4811,
        lng: 136.8427
      }
    },
    features: ['業務用キッチン', '大浴場', '駐車場'],
    images: [
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg',
      'https://images.pexels.com/photos/2476633/pexels-photo-2476633.jpeg',
      'https://images.pexels.com/photos/2476634/pexels-photo-2476634.jpeg'
    ],
    contact: {
      name: '三重観光不動産',
      phone: '0599-12-3456',
      email: 'info@mie-tourism.jp'
    }
  }
  // ... 続きは次のメッセージで
];