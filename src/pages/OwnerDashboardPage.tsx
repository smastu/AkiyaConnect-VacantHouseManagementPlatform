import React from 'react';
import { Building, FileText, Bell, Settings, Users, PlusCircle, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, ChevronRight, Calendar } from 'lucide-react';
import StockChart from '../components/charts/StockChart';
import { Link } from 'react-router-dom';

const OwnerDashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">所有者ダッシュボード</h1>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">ポートフォリオ総額</h3>
              <DollarSign className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-indigo-700">¥12.5M</p>
            <p className="text-sm text-green-600 flex items-center mt-1">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +5.2% (今月)
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">評価損益</h3>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-700">+¥2.3M</p>
            <p className="text-sm text-gray-500 mt-1">含み益 ¥3.1M / 含み損 -¥0.8M</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">保有銘柄数</h3>
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-700">5</p>
            <p className="text-sm text-gray-500 mt-1">取引中: 3 / 保留中: 2</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">配当収入</h3>
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-orange-700">¥45K</p>
            <p className="text-sm text-gray-500 mt-1">今月の予定配当</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Performance */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">ポートフォリオ推移</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1D</button>
                  <button className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-sm">1W</button>
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1M</button>
                  <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm">1Y</button>
                </div>
              </div>
              <div className="h-[300px]">
                <StockChart propertyId="portfolio" />
              </div>
            </div>

            {/* Holdings List */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">保有銘柄一覧</h2>
                <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <PlusCircle className="w-5 h-5" />
                  <span>新規購入</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">鎌倉の古民家</h3>
                      <p className="text-sm text-gray-500">保有株数: 100株</p>
                      <div className="flex space-x-2 mt-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          +15.2%
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          取得価格: ¥10,000
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">現在値: ¥11,520</p>
                      <p className="text-sm text-green-600">+¥152,000</p>
                      <Link
                        to="/property/1/reservations"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mt-2"
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        予約管理
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">京都町家</h3>
                      <p className="text-sm text-gray-500">保有株数: 50株</p>
                      <div className="flex space-x-2 mt-2">
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          -5.8%
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          取得価格: ¥15,000
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">現在値: ¥14,130</p>
                      <p className="text-sm text-red-600">-¥43,500</p>
                      <Link
                        to="/property/2/reservations"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mt-2"
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        予約管理
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">軽井沢コテージ</h3>
                      <p className="text-sm text-gray-500">保有株数: 75株</p>
                      <div className="flex space-x-2 mt-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          +8.3%
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          取得価格: ¥12,000
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">現在値: ¥13,000</p>
                      <p className="text-sm text-green-600">+¥75,000</p>
                      <Link
                        to="/property/3/reservations"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mt-2"
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        予約管理
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">クイックアクション</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-3 rounded-lg transition-colors">
                  <PlusCircle className="w-5 h-5" />
                  <span>新規物件の購入</span>
                </button>
                <button className="w-full flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 p-3 rounded-lg transition-colors">
                  <FileText className="w-5 h-5" />
                  <span>取引履歴</span>
                </button>
                <button className="w-full flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 p-3 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                  <span>ポートフォリオ設定</span>
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">最近の取引</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium text-gray-800">鎌倉の古民家</p>
                    <p className="text-sm text-gray-500">購入: 20株</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600">¥230,000</p>
                    <p className="text-sm text-gray-500">2024/03/15</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium text-gray-800">京都町家</p>
                    <p className="text-sm text-gray-500">売却: 10株</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-600">¥142,000</p>
                    <p className="text-sm text-gray-500">2024/03/14</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">通知</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-3 py-1">
                  <p className="text-gray-800">配当金の入金</p>
                  <p className="text-sm text-gray-500">¥15,000が入金されました</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3 py-1">
                  <p className="text-gray-800">株主総会のお知らせ</p>
                  <p className="text-sm text-gray-500">3/25 開催予定</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-3 py-1">
                  <p className="text-gray-800">目標価格に到達</p>
                  <p className="text-sm text-gray-500">鎌倉の古民家が目標価格に到達</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboardPage;