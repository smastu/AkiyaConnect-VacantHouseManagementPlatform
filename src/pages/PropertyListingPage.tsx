import React, { useState } from 'react';
import { Search, Filter, MapPin, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import PropertyCard from '../components/property/PropertyCard';
import MapView from '../components/map/MapView';
import { sampleProperties } from '../data/sampleData';

const PropertyListingPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">空き家物件を探す</h1>
          <p className="text-gray-600">全国各地の厳選された空き家物件を検索できます</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center flex-1 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="地域、住所、物件タイプなどで検索"
                className="w-full ml-2 bg-transparent border-0 focus:outline-none focus:ring-0"
              />
            </div>
            <button 
              className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="w-5 h-5" />
              <span>詳細条件</span>
            </button>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                onClick={() => setViewMode('grid')}
                aria-label="グリッド表示"
              >
                <LayoutGrid className="w-5 h-5 text-gray-700" />
              </button>
              <button
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                onClick={() => setViewMode('list')}
                aria-label="リスト表示"
              >
                <List className="w-5 h-5 text-gray-700" />
              </button>
              <button
                className={`p-2 rounded-md ${viewMode === 'map' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                onClick={() => setViewMode('map')}
                aria-label="マップ表示"
              >
                <MapPin className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {isFilterOpen && (
            <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">エリア</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option value="">エリアを選択</option>
                  <option value="hokkaido">北海道</option>
                  <option value="tohoku">東北</option>
                  <option value="kanto">関東</option>
                  <option value="chubu">中部</option>
                  <option value="kansai">関西</option>
                  <option value="chugoku">中国</option>
                  <option value="shikoku">四国</option>
                  <option value="kyushu">九州・沖縄</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">物件タイプ</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option value="">物件タイプを選択</option>
                  <option value="detached">一戸建て</option>
                  <option value="apartment">マンション・アパート</option>
                  <option value="townhouse">町家</option>
                  <option value="farmhouse">古民家</option>
                  <option value="cottage">コテージ・山小屋</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">価格帯</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="下限"
                    className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <span className="text-gray-500">〜</span>
                  <input
                    type="text"
                    placeholder="上限"
                    className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">物件の状態</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <span className="text-sm text-gray-700">すぐに住める</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <span className="text-sm text-gray-700">リノベ済み</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <span className="text-sm text-gray-700">要リフォーム</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <span className="text-sm text-gray-700">更地</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-4 flex justify-end">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2 transition-colors duration-300">
                  リセット
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                  検索する
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{sampleProperties.length}件の物件が見つかりました</p>
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-5 h-5 text-gray-500" />
            <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="recommended">おすすめ順</option>
              <option value="price_low">価格の安い順</option>
              <option value="price_high">価格の高い順</option>
              <option value="new">新着順</option>
            </select>
          </div>
        </div>

        {/* Properties List */}
        {viewMode === 'map' ? (
          <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
            <MapView />
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sampleProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img 
                    src={property.images[0]} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 m-3">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {property.propertyType}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:w-2/3 flex flex-col">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location.prefecture}{property.location.city}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{property.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-700">
                      <span>築{property.age}年</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span>{property.size}㎡</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span>{property.rooms}部屋</span>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-700">
                      {property.price.toLocaleString()}円
                    </span>
                    <a 
                      href={`/properties/${property.id}`}
                      className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      詳細を見る
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListingPage;