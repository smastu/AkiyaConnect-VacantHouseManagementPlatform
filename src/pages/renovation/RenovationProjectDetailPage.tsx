import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Clock, PenTool as Tool, FileText, MessageSquare, UserPlus, ChevronRight, Calendar, Building } from 'lucide-react';

const RenovationProjectDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/renovation-collaboration" className="hover:text-indigo-600">リノベーション</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/renovation-collaboration" className="hover:text-indigo-600">プロジェクト</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">古民家をカフェ＆コワーキングスペースに</span>
        </nav>

        {/* Project Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="relative h-64">
            <img
              src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
              alt="古民家リノベーション"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 m-4">
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                メンバー募集中
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  古民家をカフェ＆コワーキングスペースに
                </h1>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>神奈川県鎌倉市</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                  <UserPlus className="w-5 h-5 mr-2" />
                  参加する
                </button>
                <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg transition-colors flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">プロジェクト概要</h2>
              <p className="text-gray-600 mb-6">
                築100年の古民家を、地域のコミュニティスペースとして再生するプロジェクトです。
                1階をカフェスペース、2階をコワーキングスペースとして活用し、地域の交流拠点を目指します。
                伝統的な建築要素を活かしながら、現代的な機能を備えた空間づくりに挑戦します。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">開始予定</p>
                      <p className="font-medium">2024年5月1日</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">予定期間</p>
                      <p className="font-medium">6ヶ月</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">建物規模</p>
                      <p className="font-medium">木造2階建て（150㎡）</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">募集人数</p>
                      <p className="font-medium">3名</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Skills */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">募集するスキル・経験</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Tool className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">大工・建築作業</h3>
                    <p className="text-gray-600 text-sm">
                      木材加工、建具の修復、基本的な建築作業の経験がある方
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">設計・インテリア</h3>
                    <p className="text-gray-600 text-sm">
                      空間デザイン、インテリアコーディネートの知識・経験がある方
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">カフェ・店舗運営</h3>
                    <p className="text-gray-600 text-sm">
                      カフェや共有スペースの運営経験、または強い興味がある方
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">プロジェクトスケジュール</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                      1
                    </div>
                    <div className="flex-1 w-px bg-indigo-200 my-2"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">企画・設計フェーズ</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      コンセプトの具体化、空間レイアウトの決定、必要な設備の洗い出し
                    </p>
                    <p className="text-sm text-indigo-600 mt-1">1ヶ月</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                      2
                    </div>
                    <div className="flex-1 w-px bg-indigo-200 my-2"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">解体・基礎工事</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      不要部分の解体、構造補強、水回りの基礎工事
                    </p>
                    <p className="text-sm text-indigo-600 mt-1">2ヶ月</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                      3
                    </div>
                    <div className="flex-1 w-px bg-indigo-200 my-2"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">内装工事</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      床・壁・天井の仕上げ、設備の設置、家具の製作・設置
                    </p>
                    <p className="text-sm text-indigo-600 mt-1">2ヶ月</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">オープン準備</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      運営体制の確立、スタッフトレーニング、プレオープンイベントの実施
                    </p>
                    <p className="text-sm text-indigo-600 mt-1">1ヶ月</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Members */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">チームメンバー</h2>
                <Link
                  to={`/renovation-collaboration/projects/${id}/team`}
                  className="text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  詳細を見る
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    alt="Team Member"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">山田太郎</p>
                    <p className="text-sm text-gray-500">プロジェクトリーダー</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="Team Member"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">佐藤花子</p>
                    <p className="text-sm text-gray-500">インテリアデザイナー</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="Team Member"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">鈴木一郎</p>
                    <p className="text-sm text-gray-500">大工</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Materials */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">必要な資材・設備</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">無垢材（床材）</span>
                  <span className="text-sm text-gray-500">80㎡</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">断熱材</span>
                  <span className="text-sm text-gray-500">100㎡</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">キッチン設備一式</span>
                  <span className="text-sm text-gray-500">1式</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">照明器具</span>
                  <span className="text-sm text-gray-500">20台</span>
                </div>
                <button className="w-full mt-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-2 rounded-lg transition-colors">
                  資材リストをダウンロード
                </button>
              </div>
            </div>

            {/* Project Location */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">プロジェクト場所</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                  alt="Project Location"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mb-2">神奈川県鎌倉市○○町1-2-3</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>・最寄り駅: 鎌倉駅（徒歩10分）</p>
                <p>・駐車場: 2台分あり</p>
                <p>・周辺環境: 住宅街、観光地近く</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenovationProjectDetailPage;