import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Users, ChevronRight, Mail, Phone, Star, PenTool as Tool, Calendar, Clock, Shield } from 'lucide-react';

const RenovationTeamPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/renovation-collaboration" className="hover:text-indigo-600">リノベーション</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to={`/renovation-collaboration/projects/${id}`} className="hover:text-indigo-600">プロジェクト詳細</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">チーム情報</span>
        </nav>

        {/* Team Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                プロジェクトチーム
              </h1>
              <p className="text-gray-600">
                古民家カフェ＆コワーキングスペース リノベーションプロジェクト
              </p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
              <Users className="w-5 h-5 mr-2" />
              チームに参加する
            </button>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Team Member Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Team Member"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">山田太郎</h3>
                  <p className="text-gray-500">プロジェクトリーダー</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Tool className="w-4 h-4 mr-2" />
                  <span>建築設計、プロジェクト管理</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>経験年数: 15年</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <span className="ml-2 text-gray-600 text-sm">
                    (12件のレビュー)
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-2 rounded-lg transition-colors flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  メッセージ
                </button>
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition-colors flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  通話
                </button>
              </div>
            </div>
          </div>

          {/* More Team Member Cards... */}
        </div>

        {/* Team Schedule */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">チームスケジュール</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                1
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h3 className="font-medium text-gray-800">キックオフミーティング</h3>
                  <span className="ml-2 text-sm text-gray-500">5月1日</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  プロジェクトの目標設定、役割分担、スケジュール確認
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                2
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h3 className="font-medium text-gray-800">現地調査</h3>
                  <span className="ml-2 text-sm text-gray-500">5月2日-5日</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  建物の詳細調査、必要な修繕箇所の特定
                </p>
              </div>
            </div>
            {/* More schedule items... */}
          </div>
        </div>

        {/* Team Guidelines */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">チームガイドライン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">作業時間</h3>
                  <p className="text-sm text-gray-600">
                    基本的に9:00-17:00。時間外作業は事前に共有。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">安全管理</h3>
                  <p className="text-sm text-gray-600">
                    作業前の安全確認、適切な保護具の着用を徹底。
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">コミュニケーション</h3>
                  <p className="text-sm text-gray-600">
                    毎朝のミーティング、作業報告は必須。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Tool className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">品質管理</h3>
                  <p className="text-sm text-gray-600">
                    作業完了時のチェックリストに従って確認。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenovationTeamPage;