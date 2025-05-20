import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  DollarSign,
  BarChart as ChartBar,
  Building
} from 'lucide-react';
import StockChart from '../components/charts/StockChart';
import { sampleProperties } from '../data/sampleData';

const PropertyTradingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'market' | 'orders' | 'positions'>('market');

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Market Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">不動産指数</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">12,345.67</span>
              <span className="ml-2 text-green-600">+2.34%</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">取引高</h3>
              <ChartBar className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">¥1.23B</span>
              <span className="ml-2 text-gray-500">24h</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">上場物件数</h3>
              <Building className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">1,234</span>
              <span className="ml-2 text-green-600">+12</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">時価総額</h3>
              <DollarSign className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">¥123.4B</span>
              <span className="ml-2 text-green-600">+3.45%</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Data */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">市場動向</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1D</button>
                  <button className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-sm">1W</button>
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1M</button>
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1Y</button>
                </div>
              </div>
              <div className="h-[400px]">
                <StockChart propertyId="market-index" />
              </div>
            </div>

            {/* Market Table */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">取引銘柄</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="銘柄を検索"
                      className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                    <Filter className="w-4 h-4" />
                    <span>フィルター</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-gray-600">銘柄</th>
                      <th className="text-right py-3 px-4 text-gray-600">現在値</th>
                      <th className="text-right py-3 px-4 text-gray-600">前日比</th>
                      <th className="text-right py-3 px-4 text-gray-600">出来高</th>
                      <th className="text-right py-3 px-4 text-gray-600">売買</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleProperties.map((property) => (
                      <tr key={property.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <Link to={`/properties/${property.id}`} className="flex items-start">
                            <div>
                              <p className="font-medium text-gray-800">{property.title}</p>
                              <p className="text-sm text-gray-500">{property.location.prefecture}</p>
                            </div>
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          ¥{(property.price / 1000).toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="flex items-center justify-end text-green-600">
                            <ArrowUpRight className="w-4 h-4 mr-1" />
                            +2.34%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-gray-600">
                          1,234株
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700">
                            取引
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="space-y-6">
            {/* Order Form */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">取引パネル</h2>
              <div className="flex border rounded-lg overflow-hidden mb-6">
                <button
                  className={`flex-1 py-2 text-center ${
                    activeTab === 'market'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('market')}
                >
                  成行注文
                </button>
                <button
                  className={`flex-1 py-2 text-center ${
                    activeTab === 'orders'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('orders')}
                >
                  指値注文
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    銘柄
                  </label>
                  <select className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="">銘柄を選択</option>
                    {sampleProperties.map(property => (
                      <option key={property.id} value={property.id}>
                        {property.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    取引数量
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="株数を入力"
                  />
                </div>

                {activeTab === 'orders' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      指値価格
                    </label>
                    <input
                      type="number"
                      className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="価格を入力"
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    買付
                  </button>
                  <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                    売却
                  </button>
                </div>
              </div>
            </div>

            {/* Order Book */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">板情報</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-600">売り注文</span>
                    <span className="text-gray-500">数量</span>
                  </div>
                  <div className="flex justify-between bg-red-50 p-2 rounded">
                    <span>12,600円</span>
                    <span>100株</span>
                  </div>
                  <div className="flex justify-between bg-red-50 p-2 rounded">
                    <span>12,550円</span>
                    <span>200株</span>
                  </div>
                  <div className="flex justify-between bg-red-50 p-2 rounded">
                    <span>12,500円</span>
                    <span>150株</span>
                  </div>
                </div>

                <div className="text-center py-2 text-xl font-bold text-gray-800">
                  12,450円
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">買い注文</span>
                    <span className="text-gray-500">数量</span>
                  </div>
                  <div className="flex justify-between bg-green-50 p-2 rounded">
                    <span>12,400円</span>
                    <span>120株</span>
                  </div>
                  <div className="flex justify-between bg-green-50 p-2 rounded">
                    <span>12,350円</span>
                    <span>180株</span>
                  </div>
                  <div className="flex justify-between bg-green-50 p-2 rounded">
                    <span>12,300円</span>
                    <span>90株</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Trades */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">約定履歴</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">12,450円</p>
                    <p className="text-sm text-gray-500">100株</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600">買付</p>
                    <p className="text-sm text-gray-500">1分前</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">12,400円</p>
                    <p className="text-sm text-gray-500">50株</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-600">売却</p>
                    <p className="text-sm text-gray-500">3分前</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">12,425円</p>
                    <p className="text-sm text-gray-500">75株</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600">買付</p>
                    <p className="text-sm text-gray-500">5分前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTradingPage;