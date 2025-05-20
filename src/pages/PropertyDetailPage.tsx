import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Calendar, ArrowRight, ArrowLeft, TrendingUp, DollarSign, Users, Clock, PenTool as Tool, Shield, FileText, Building, Star } from 'lucide-react';
import { sampleProperties } from '../data/sampleData';
import MapView from '../components/map/MapView';
import StockChart from '../components/charts/StockChart';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = sampleProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">物件が見つかりません</h2>
        <p className="mb-8">お探しの物件情報は存在しないか、削除された可能性があります。</p>
        <Link
          to="/properties"
          className="inline-flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded-lg"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          物件一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-indigo-600">ホーム</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/properties" className="text-gray-500 hover:text-indigo-600">物件一覧</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{property.title}</span>
          </nav>
        </div>

        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
            <div>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location.prefecture}{property.location.city}{property.location.address}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-indigo-700 mb-2">
                {property.price.toLocaleString()}円
              </div>
              <div className="flex space-x-2">
                {property.status === 'available' ? (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    取引可能
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    取引停止中
                  </span>
                )}
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {property.propertyType}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm mb-1">築年数</div>
              <div className="font-semibold flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-indigo-600" />
                {property.age}年
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm mb-1">面積</div>
              <div className="font-semibold flex items-center">
                <Home className="w-4 h-4 mr-1 text-indigo-600" />
                {property.size}㎡
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm mb-1">発行株式数</div>
              <div className="font-semibold flex items-center">
                <TrendingUp className="w-4 h-4 mr-1 text-indigo-600" />
                1,000株
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm mb-1">時価総額</div>
              <div className="font-semibold flex items-center">
                <DollarSign className="w-4 h-4 mr-1 text-indigo-600" />
                {(property.price * 1000).toLocaleString()}円
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors">
              <TrendingUp className="w-5 h-5" />
              <span>株式を購入</span>
            </button>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg transition-colors">
              <Users className="w-5 h-5" />
              <span>株主コミュニティ</span>
            </button>
          </div>
        </div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Images */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="h-80">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {property.images.slice(1).map((image, index) => (
                    <div key={index} className="h-[180px]">
                      <img
                        src={image}
                        alt={`${property.title} ${index + 2}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stock Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">価格チャート</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1D</button>
                  <button className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-sm">1W</button>
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1M</button>
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1Y</button>
                </div>
              </div>
              <div className="h-[400px]">
                <StockChart propertyId={property.id} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div>
                  <p className="text-sm text-gray-500">始値</p>
                  <p className="font-semibold">12,500円</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">高値</p>
                  <p className="font-semibold text-green-600">13,200円</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">安値</p>
                  <p className="font-semibold text-red-600">12,100円</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">出来高</p>
                  <p className="font-semibold">1,234株</p>
                </div>
              </div>
            </div>

            {/* Property Condition */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">物件の状態</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">構造・設備の状態</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">構造体</span>
                        <span className="text-gray-500">良好</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">屋根・外壁</span>
                        <span className="text-gray-500">要補修</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">水回り</span>
                        <span className="text-gray-500">交換推奨</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">内装</span>
                        <span className="text-gray-500">要リフォーム</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium text-gray-800 mb-3">リノベーション履歴</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                        1
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-800">2023年12月</p>
                        <p className="text-gray-600">屋根の補修工事</p>
                        <p className="text-sm text-gray-500">工事費用: 150万円</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                        2
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-800">2023年10月</p>
                        <p className="text-gray-600">外壁塗装</p>
                        <p className="text-sm text-gray-500">工事費用: 80万円</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">物件詳細</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                {property.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold mb-3">特徴・設備</h3>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trading Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">取引情報</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">現在値</p>
                  <p className="text-2xl font-bold text-indigo-700">12,500円</p>
                  <p className="text-sm text-green-600">+300円 (+2.5%)</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">売気配</p>
                    <p className="text-red-600">12,600円</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">買気配</p>
                    <p className="text-green-600">12,400円</p>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  取引画面を開く
                </button>
              </div>
            </div>

            {/* Property Location */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">所在地</h2>
              <div className="h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <MapView />
              </div>
              <p className="text-gray-700 mb-2">
                {property.location.prefecture}{property.location.city}{property.location.address}
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>・最寄り駅: 徒歩10分</p>
                <p>・周辺施設: スーパー、病院、公園</p>
              </div>
            </div>

            {/* Risk Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">リスク情報</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">リスク評価</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                    中程度
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>・不動産市場の変動リスク</li>
                  <li>・物件の経年劣化リスク</li>
                  <li>・賃貸需要の変動リスク</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;