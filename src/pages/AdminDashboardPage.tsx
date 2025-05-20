import React from 'react';
import { Building, Users, AlertTriangle, Map, BarChart as ChartBar, FileText } from 'lucide-react';
import MapView from '../components/map/MapView';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">管理者ダッシュボード</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">登録物件数</h3>
              <Building className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-indigo-700">1,234</p>
            <p className="text-sm text-gray-500 mt-1">前月比 +56</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">登録ユーザー</h3>
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-700">856</p>
            <p className="text-sm text-gray-500 mt-1">前月比 +23</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">空き家報告</h3>
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-orange-700">42</p>
            <p className="text-sm text-gray-500 mt-1">要対応</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">成約件数</h3>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-700">89</p>
            <p className="text-sm text-gray-500 mt-1">今月の成約</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map View */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">空き家分布マップ</h2>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
                    フィルター
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
                    エクスポート
                  </button>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <MapView />
              </div>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">最近の空き家報告</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-3 py-2">
                  <p className="font-semibold text-gray-800">管理不全の空き家</p>
                  <p className="text-sm text-gray-500">東京都新宿区</p>
                  <p className="text-xs text-gray-400">2024年3月15日 報告</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3 py-2">
                  <p className="font-semibold text-gray-800">長期不在の建物</p>
                  <p className="text-sm text-gray-500">神奈川県横浜市</p>
                  <p className="text-xs text-gray-400">2024年3月14日 報告</p>
                </div>
                <div className="border-l-4 border-red-500 pl-3 py-2">
                  <p className="font-semibold text-gray-800">倒壊の危険あり</p>
                  <p className="text-sm text-gray-500">埼玉県さいたま市</p>
                  <p className="text-xs text-gray-400">2024年3月13日 報告</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">統計情報</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">物件登録率</span>
                    <span className="text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">成約率</span>
                    <span className="text-gray-500">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">報告対応率</span>
                    <span className="text-gray-500">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">システム活動ログ</h2>
              <button className="text-indigo-600 hover:text-indigo-800">
                すべて表示
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600">日時</th>
                    <th className="text-left py-3 px-4 text-gray-600">ユーザー</th>
                    <th className="text-left py-3 px-4 text-gray-600">アクション</th>
                    <th className="text-left py-3 px-4 text-gray-600">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-gray-800">2024/03/15 14:30</td>
                    <td className="py-3 px-4 text-gray-800">admin@example.com</td>
                    <td className="py-3 px-4 text-gray-800">物件承認</td>
                    <td className="py-3 px-4 text-gray-600">ID: 12345の物件を承認</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-gray-800">2024/03/15 13:15</td>
                    <td className="py-3 px-4 text-gray-800">user@example.com</td>
                    <td className="py-3 px-4 text-gray-800">新規登録</td>
                    <td className="py-3 px-4 text-gray-600">新規物件の登録完了</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-800">2024/03/15 11:45</td>
                    <td className="py-3 px-4 text-gray-800">support@example.com</td>
                    <td className="py-3 px-4 text-gray-800">報告対応</td>
                    <td className="py-3 px-4 text-gray-600">ID: 789の報告を処理</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;