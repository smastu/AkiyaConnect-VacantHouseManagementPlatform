import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Vote, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  DollarSign,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react';
import StockChart from '../../components/charts/StockChart';

const RenovationConsensusPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">リノベーション合意形成</h1>
        <p className="text-gray-600 mb-8">
          株主間でリノベーション計画を提案・議論し、合意形成を行うためのプラットフォームです。
        </p>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">進行中の提案</h3>
              <Building className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="text-2xl font-bold">5件</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">参加株主数</h3>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold">234名</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">平均合意率</h3>
              <Vote className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold">78.5%</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500">完了案件数</h3>
              <CheckCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-2xl font-bold">12件</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Proposals List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex space-x-4 mb-6">
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'active'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab('active')}
                >
                  進行中の提案
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'past'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab('past')}
                >
                  過去の提案
                </button>
              </div>

              {/* Proposals */}
              <div className="space-y-4">
                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">キッチン・水回りの全面リノベーション</h3>
                      <p className="text-gray-500 text-sm mt-1">提案者: 山田太郎（大株主）</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      投票受付中
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">見積費用</p>
                      <p className="text-lg font-semibold">¥5,800,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">予想価値上昇</p>
                      <p className="text-lg font-semibold text-green-600">+15%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">投票期限</p>
                      <p className="text-lg font-semibold">2024/4/15</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">必要合意率</p>
                      <p className="text-lg font-semibold">75%</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">現在の賛成率: 68%</span>
                      <span className="text-sm text-gray-600">必要数まで: 7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                      <ThumbsUp className="w-4 h-4" />
                      <span>賛成</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                      <ThumbsDown className="w-4 h-4" />
                      <span>反対</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
                      <MessageSquare className="w-4 h-4" />
                      <span>コメント</span>
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">外壁塗装と屋根修繕</h3>
                      <p className="text-gray-500 text-sm mt-1">提案者: 佐藤花子（管理会社）</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      協議中
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">見積費用</p>
                      <p className="text-lg font-semibold">¥3,200,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">予想価値上昇</p>
                      <p className="text-lg font-semibold text-green-600">+8%</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      <h4 className="font-medium text-yellow-800">協議事項</h4>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>・工事業者の選定（2社で検討中）</li>
                      <li>・工事時期の調整（夏季/冬季）</li>
                      <li>・追加オプション工事の要否</li>
                    </ul>
                  </div>

                  <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    <MessageSquare className="w-4 h-4" />
                    <span>協議に参加</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Impact */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">価格への影響</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">現在の株価</p>
                  <p className="text-2xl font-bold text-indigo-700">¥12,500</p>
                  <p className="text-sm text-green-600">+2.5% (前日比)</p>
                </div>
                <div className="h-48">
                  <StockChart propertyId="renovation-impact" />
                </div>
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-800 mb-2">リノベーション後の予想株価</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">キッチン改修後</span>
                      <span className="text-green-600">¥14,375 (+15%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">外壁塗装後</span>
                      <span className="text-green-600">¥13,500 (+8%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voting Power */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">あなたの議決権</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">保有株式数</p>
                  <p className="text-2xl font-bold">100株</p>
                  <p className="text-sm text-gray-600">総議決権の8.5%</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="font-medium text-indigo-800 mb-2">議決権行使状況</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>行使済み提案</span>
                      <span>2件</span>
                    </div>
                    <div className="flex justify-between">
                      <span>未行使提案</span>
                      <span className="text-red-600">3件</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">合意形成ガイドライン</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">投資規模による要件</h3>
                    <p className="text-sm text-gray-600">
                      1株あたり1,000円以上の投資は75%以上の合意が必要
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">議決期間</h3>
                    <p className="text-sm text-gray-600">
                      提案から2週間以内に合意形成を完了
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">必要書類</h3>
                    <p className="text-sm text-gray-600">
                      見積書、工事計画書、収支予測書類の提出が必須
                    </p>
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

export default RenovationConsensusPage;