import React from 'react';
import { Book, PenTool as Tool, Users, FileText, Download, AlertTriangle, CheckCircle } from 'lucide-react';

const RenovationGuidePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">リノベーションガイド</h1>
        <p className="text-gray-600 mb-8">
          空き家のリノベーションを成功させるための総合的なガイドラインです。
          プロジェクトの計画から実施、完了までの重要なポイントを解説します。
        </p>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Tool className="w-8 h-8 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-800 ml-3">技術ガイド</h2>
            </div>
            <p className="text-gray-600 mb-4">
              リノベーションの基本的な工法や、
              必要な技術的知識を解説します。
            </p>
            <a href="#technical" className="text-indigo-600 hover:text-indigo-800">
              詳しく見る →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-800 ml-3">チーム構築</h2>
            </div>
            <p className="text-gray-600 mb-4">
              効果的なチーム編成と、
              メンバー間の協力体制の作り方。
            </p>
            <a href="#team" className="text-indigo-600 hover:text-indigo-800">
              詳しく見る →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-800 ml-3">法規制</h2>
            </div>
            <p className="text-gray-600 mb-4">
              リノベーションに関する法規制や
              必要な許認可について。
            </p>
            <a href="#regulations" className="text-indigo-600 hover:text-indigo-800">
              詳しく見る →
            </a>
          </div>
        </div>

        {/* Technical Guide */}
        <div id="technical" className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">技術ガイド</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                構造調査と補強
              </h3>
              <p className="text-gray-600">
                建物の構造的な健全性を評価し、必要な補強方法を決定します。
                特に古い建物の場合、耐震性能の確認が重要です。
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Download className="w-4 h-4 mr-1" />
                  構造調査チェックリスト
                </button>
                <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Download className="w-4 h-4 mr-1" />
                  補強工事の手引き
                </button>
              </div>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                設備更新
              </h3>
              <p className="text-gray-600">
                電気、給排水、空調設備などの現状評価と更新計画。
                省エネ性能の向上も考慮に入れます。
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Download className="w-4 h-4 mr-1" />
                  設備点検表
                </button>
                <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Download className="w-4 h-4 mr-1" />
                  省エネ設備ガイド
                </button>
              </div>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                内装工事
              </h3>
              <p className="text-gray-600">
                壁、床、天井の仕上げ材の選定と施工方法。
                デザイン性と機能性のバランスを考慮します。
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Download className="w-4 h-4 mr-1" />
                  内装材選定ガイド
                </button>
                <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Download className="w-4 h-4 mr-1" />
                  施工手順書
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Building */}
        <div id="team" className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">チーム構築</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">必要な役割</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    プロジェクトマネージャー
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    設計担当者
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    施工管理者
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    専門工事担当者
                  </li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">コミュニケーション</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    定期ミーティングの実施
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    進捗報告の仕組み
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    情報共有ツールの活用
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    問題解決プロセス
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="font-semibold text-yellow-800">注意点</h3>
              </div>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>・メンバーの役割と責任を明確に定義する</li>
                <li>・定期的なコミュニケーションを維持する</li>
                <li>・スケジュールと予算の管理を徹底する</li>
                <li>・問題発生時の対応手順を事前に決めておく</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Regulations */}
        <div id="regulations" className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">法規制</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">必要な許認可</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>・建築確認申請</li>
                  <li>・用途変更許可</li>
                  <li>・消防法関連の許可</li>
                  <li>・景観条例への適合</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">確認すべき規制</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>・建築基準法</li>
                  <li>・消防法</li>
                  <li>・都市計画法</li>
                  <li>・地域固有の条例</li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-800 mb-3">申請手続きの流れ</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800">事前相談</h4>
                    <p className="text-sm text-gray-600">
                      行政窓口での事前相談と必要書類の確認
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800">申請書類作成</h4>
                    <p className="text-sm text-gray-600">
                      必要図面と書類の作成、専門家への依頼
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800">申請提出</h4>
                    <p className="text-sm text-gray-600">
                      各種申請の提出と審査対応
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex-shrink-0">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-800">許可取得</h4>
                    <p className="text-sm text-gray-600">
                      許可証の受領と工事着手
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

export default RenovationGuidePage;