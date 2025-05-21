import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, MessageCircle, Share2, Calendar } from 'lucide-react';

interface AlbumPost {
  id: string;
  userName: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
}

// 物件ごとのアルバムデータ
const propertyAlbums: { [key: string]: AlbumPost[] } = {
  "1": [ // 鎌倉の古民家
    {
      id: '1',
      userName: '山田太郎',
      userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      imageUrl: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
      caption: '古民家で素敵な朝食時間を過ごしました。庭からの日差しが心地よくて、ずっとここにいたい気分です。#古民家暮らし #朝時間 #鎌倉生活',
      date: '2024年1月15日',
      likes: 24,
      comments: 5
    },
    {
      id: '2',
      userName: '佐藤花子',
      userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      imageUrl: 'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
      caption: '夕暮れ時の縁側でお茶タイム。風情があって最高です。#古民家カフェ #縁側 #日本の美',
      date: '2024年1月14日',
      likes: 32,
      comments: 7
    }
  ],
  "2": [ // 京都町家
    {
      id: '3',
      userName: '田中美咲',
      userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      imageUrl: 'https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg',
      caption: '町家での新年会。みんなで手作り料理を囲んで、素敵な時間を過ごしました。#京都町家 #新年会 #手作り料理',
      date: '2024年1月10日',
      likes: 45,
      comments: 12
    },
    {
      id: '4',
      userName: '山本健一',
      userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      imageUrl: 'https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg',
      caption: '町家でのワークショップ開催しました。伝統工芸の魅力を体験できる素晴らしい場所です。#京都 #伝統工芸 #ワークショップ',
      date: '2024年1月8日',
      likes: 38,
      comments: 8
    }
  ],
  "3": [ // 軽井沢コテージ
    {
      id: '5',
      userName: '高橋誠',
      userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      imageUrl: 'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg',
      caption: '雪景色の中でのBBQ。寒かったけど最高に楽しかった！#軽井沢 #冬BBQ #雪景色',
      date: '2024年1月5日',
      likes: 56,
      comments: 15
    },
    {
      id: '6',
      userName: '渡辺麗子',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      imageUrl: 'https://images.pexels.com/photos/6186523/pexels-photo-6186523.jpeg',
      caption: '早朝のテラスでモーニングコーヒー。鳥のさえずりと清々しい空気に癒されます。#軽井沢の朝 #モーニングコーヒー',
      date: '2024年1月3日',
      likes: 42,
      comments: 9
    }
  ]
};

const PropertyAlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const posts = id ? propertyAlbums[id] || [] : [];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">思い出アルバム</h1>

        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* ユーザー情報 */}
              <div className="p-4 flex items-center">
                <img
                  src={post.userAvatar}
                  alt={post.userName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{post.userName}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>

              {/* 画像 */}
              <div className="relative">
                <img
                  src={post.imageUrl}
                  alt="Post"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* アクションボタン */}
              <div className="p-4 flex items-center space-x-4 border-b">
                <button className="flex items-center text-gray-600 hover:text-red-500">
                  <Heart className="w-6 h-6" />
                  <span className="ml-2">{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500">
                  <MessageCircle className="w-6 h-6" />
                  <span className="ml-2">{post.comments}</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-green-500">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>

              {/* キャプション */}
              <div className="p-4">
                <p className="text-gray-800 whitespace-pre-line">{post.caption}</p>
              </div>

              {/* コメント入力 */}
              <div className="p-4 bg-gray-50">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="コメントを追加..."
                    className="flex-1 rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <button className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    投稿
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyAlbumPage;