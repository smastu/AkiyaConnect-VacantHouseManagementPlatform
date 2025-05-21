import { Property } from '../types/property';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: '山里の古民家',
    description: '自然豊かな環境にある古民家。リノベーションで新たな魅力を引き出せる物件です。',
    price: 150000,
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
      'https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg',
      'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
      'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg'
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
    price: 200000,
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
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg'
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
    price: 50000,
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
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg',
      'https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg'
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
    description: '静かな里山にある古民家。周辺は田園風景が広がり、のどかな暮らしが実現できます。',
    price: 100000,
    size: 130,
    propertyType: '古民家',
    rooms: 5,
    age: 60,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#古民家', '#里山', '#田舎暮らし', '#菜園可'],
    location: {
      prefecture: '福島県',
      city: '二本松市',
      address: '〇〇町10-11-12',
      coordinates: {
        lat: 37.5839,
        lng: 140.4314
      }
    },
    features: ['囲炉裏', '土蔵', '広い庭'],
    images: [
      'https://images.pexels.com/photos/6492837/pexels-photo-6492837.jpeg',
      'https://images.pexels.com/photos/6492839/pexels-photo-6492839.jpeg',
      'https://images.pexels.com/photos/6492841/pexels-photo-6492841.jpeg'
    ],
    contact: {
      name: '福島不動産',
      phone: '0243-12-3456',
      email: 'info@fukushima-estate.jp'
    }
  },
  {
    id: '5',
    title: '漁港近くの空き家',
    description: '活気ある漁港まで徒歩10分。新鮮な魚介類を楽しめる立地です。',
    price: 180000,
    size: 75,
    propertyType: '一戸建て',
    rooms: 3,
    age: 45,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#漁港近く', '#海の幸', '#リフォーム物件', '#生活便利'],
    location: {
      prefecture: '石川県',
      city: '輪島市',
      address: '〇〇町13-14-15',
      coordinates: {
        lat: 37.3906,
        lng: 136.8991
      }
    },
    features: ['漁港近く', '駐車場', '物置'],
    images: [
      'https://images.pexels.com/photos/2980953/pexels-photo-2980953.jpeg',
      'https://images.pexels.com/photos/2980954/pexels-photo-2980954.jpeg',
      'https://images.pexels.com/photos/2980956/pexels-photo-2980956.jpeg'
    ],
    contact: {
      name: '能登不動産',
      phone: '0768-12-3456',
      email: 'info@noto-estate.jp'
    }
  },
  {
    id: '6',
    title: '山麓の別荘',
    description: '四季折々の自然を楽しめる山麓の別荘。週末の癒しの空間として最適です。',
    price: 250000,
    size: 95,
    propertyType: '別荘',
    rooms: 3,
    age: 30,
    renovated: false,
    status: 'available',
    condition: 'good',
    hashtags: ['#別荘', '#山麓', '#自然', '#温泉近く'],
    location: {
      prefecture: '群馬県',
      city: '吾妻郡',
      address: '〇〇町16-17-18',
      coordinates: {
        lat: 36.5913,
        lng: 138.5911
      }
    },
    features: ['温泉近く', 'テラス', '薪ストーブ'],
    images: [
      'https://images.pexels.com/photos/3312671/pexels-photo-3312671.jpeg',
      'https://images.pexels.com/photos/3312672/pexels-photo-3312672.jpeg',
      'https://images.pexels.com/photos/3312673/pexels-photo-3312673.jpeg'
    ],
    contact: {
      name: '山紫不動産',
      phone: '0279-12-3456',
      email: 'info@sanshi-estate.jp'
    }
  },
  {
    id: '7',
    title: '田舎町の町家',
    description: '歴史ある町並みが残る地域にある町家。商店街も近く、生活便利な立地です。',
    price: 150000,
    size: 110,
    propertyType: '町家',
    rooms: 4,
    age: 70,
    renovated: false,
    status: 'available',
    condition: 'needs_work',
    hashtags: ['#町家', '#商店街近く', '#歴史的建造物', '#生活便利'],
    location: {
      prefecture: '富山県',
      city: '高岡市',
      address: '〇〇町19-20-21',
      coordinates: {
        lat: 36.7541,
        lng: 137.0257
      }
    },
    features: ['格子窓', '中庭', '蔵'],
    images: [
      'https://images.pexels.com/photos/6492842/pexels-photo-6492842.jpeg',
      'https://images.pexels.com/photos/6492843/pexels-photo-6492843.jpeg',
      'https://images.pexels.com/photos/6492844/pexels-photo-6492844.jpeg'
    ],
    contact: {
      name: '高岡不動産',
      phone: '0766-12-3456',
      email: 'info@takaoka-estate.jp'
    }
  }
];