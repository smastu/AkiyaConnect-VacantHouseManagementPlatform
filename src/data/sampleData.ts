import { Property } from '../types/property';

export const sampleProperties: Property[] = [
  // 既存の7件の物件データは省略...

  {
    id: '8',
    title: '山村の古民家',
    description: '静かな山村にある古民家。自然に囲まれた環境で、ゆったりとした時間を過ごせます。',
    price: 80000,
    size: 140,
    propertyType: '古民家',
    rooms: 5,
    age: 65,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#古民家', '#山村', '#自然豊か', '#DIY可能'],
    location: {
      prefecture: '島根県',
      city: '邑南町',
      address: '〇〇町22-23-24',
      coordinates: {
        lat: 34.8955,
        lng: 132.4374
      }
    },
    features: ['囲炉裏', '庭園', '納屋'],
    images: [
      'https://images.pexels.com/photos/6492845/pexels-photo-6492845.jpeg',
      'https://images.pexels.com/photos/6492846/pexels-photo-6492846.jpeg',
      'https://images.pexels.com/photos/6492847/pexels-photo-6492847.jpeg'
    ],
    contact: {
      name: '島根不動産',
      phone: '0855-12-3456',
      email: 'info@shimane-estate.jp'
    }
  },
  {
    id: '9',
    title: '港町の空き家',
    description: '活気ある港町にある空き家。市場も近く、新鮮な魚介類を楽しめます。',
    price: 120000,
    size: 80,
    propertyType: '一戸建て',
    rooms: 3,
    age: 40,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#港町', '#市場近く', '#海の幸', '#生活便利'],
    location: {
      prefecture: '青森県',
      city: '八戸市',
      address: '〇〇町25-26-27',
      coordinates: {
        lat: 40.5122,
        lng: 141.4882
      }
    },
    features: ['市場近く', '駐車場', '物置'],
    images: [
      'https://images.pexels.com/photos/2980957/pexels-photo-2980957.jpeg',
      'https://images.pexels.com/photos/2980958/pexels-photo-2980958.jpeg',
      'https://images.pexels.com/photos/2980959/pexels-photo-2980959.jpeg'
    ],
    contact: {
      name: '八戸不動産',
      phone: '0178-12-3456',
      email: 'info@hachinohe-estate.jp'
    }
  },
  {
    id: '10',
    title: '田舎の一軒家',
    description: '田園風景が広がる静かな場所にある一軒家。家庭菜園が楽しめる広い敷地付き。',
    price: 50000,
    size: 95,
    propertyType: '一戸建て',
    rooms: 4,
    age: 45,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#田舎暮らし', '#家庭菜園', '#のどか', '#自然'],
    location: {
      prefecture: '秋田県',
      city: '大仙市',
      address: '〇〇町28-29-30',
      coordinates: {
        lat: 39.4531,
        lng: 140.4756
      }
    },
    features: ['家庭菜園', '物置', '広い庭'],
    images: [
      'https://images.pexels.com/photos/2581923/pexels-photo-2581923.jpeg',
      'https://images.pexels.com/photos/2581924/pexels-photo-2581924.jpeg',
      'https://images.pexels.com/photos/2581925/pexels-photo-2581925.jpeg'
    ],
    contact: {
      name: '秋田不動産',
      phone: '0187-12-3456',
      email: 'info@akita-estate.jp'
    }
  }
  // ... 続きは次のメッセージで
];