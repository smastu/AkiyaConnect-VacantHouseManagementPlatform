import React from 'react';
import { Book, FileText, Download, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">資料・ガイド</h1>
        <p className="text-gray-600 mb-8">
          空き家の管理・活用に関する有用な情報やガイドラインをご紹介します。
        </p>

        {/* Guide Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Inheritance Guide */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-800 ml-3">相続ガイド</h2>
            </div>
            <p className="text-gray-600 mb-4">
              空き家の相続に関する手続きや注意点をわかりやすく解説します。
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  相続登記の手順
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  相続税の計算方法
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  よくある相続トラブル
                </a>
              </li>
            </ul>
          </div>

          {/* Renovation Examples */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-green-600" />
              <h2 className="text-xl font-bold text-gray-800 ml-3">リノベーション事例</h2>
            </div>
            <p className="text-gray-600 mb-4">
              実際の空き家リノベーション事例と成功のポイントを紹介します。
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  古民家カフェへの改装
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  シェアハウスの作り方
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  コストパフォーマンスの高い改修
                </a>
              </li>
            </ul>
          </div>

          {/* Subsidy Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800 ml-3">補助金情報</h2>
            </div>
            <p className="text-gray-600 mb-4">
              利用可能な補助金や支援制度の最新情報をご案内します。
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  自治体別の補助金一覧
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  申請の手引き
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <FileText className="w-4 h-4 mr-2" />
                  活用事例集
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">ダウンロード資料</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">空き家管理マニュアル</h3>
                <Download className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                所有者向けの空き家管理の基本的なガイドライン
              </p>
              <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-2 rounded-lg transition-colors">
                ダウンロード
              </button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">リノベーションチェックリスト</h3>
                <Download className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                リノベーション計画時の確認項目一覧
              </p>
              <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-2 rounded-lg transition-colors">
                ダウンロード
              </button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">補助金申請書類テンプレート</h3>
                <Download className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                各種補助金申請に必要な書類のテンプレート
              </p>
              <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-2 rounded-lg transition-colors">
                ダウンロード
              </button>
            </div>
          </div>
        </div>

        {/* External Resources */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">関連リンク</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">行政機関</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    国土交通省 空き家対策情報
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    各都道府県の空き家バンク
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    自治体の支援制度一覧
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">関連団体</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    全国空き家バンク協議会
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    リノベーション協会
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    空き家活用支援センター
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;