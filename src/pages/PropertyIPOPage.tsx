import React, { useState } from 'react';
import { 
  Building,
  FileText,
  Upload,
  DollarSign,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { IPOApplication } from '../types/property';

const PropertyIPOPage: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">空き家の新規上場（IPO）申請</h1>
          <p className="text-gray-600 mb-8">
            あなたの空き家を証券化して市場に上場します。必要書類を提出し、審査を受けてください。
          </p>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            <div className="flex-1">
              <div className={`h-2 rounded-l-full ${step >= 1 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <p className={`text-sm mt-2 ${step >= 1 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                基本情報
              </p>
            </div>
            <div className="flex-1">
              <div className={`h-2 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <p className={`text-sm mt-2 ${step >= 2 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                物件評価
              </p>
            </div>
            <div className="flex-1">
              <div className={`h-2 rounded-r-full ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <p className={`text-sm mt-2 ${step >= 3 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                上場条件
              </p>
            </div>
          </div>

          {/* Form Steps */}
          <div className="bg-white rounded-xl shadow-md p-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">基本情報の入力</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      物件名称
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="例：鎌倉の古民家"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      所在地
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="住所を入力"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      物件種別
                    </label>
                    <select className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option value="">選択してください</option>
                      <option value="house">一戸建て</option>
                      <option value="apartment">マンション</option>
                      <option value="land">土地</option>
                      <option value="commercial">商業施設</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      所有権証明書類
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">証明書類をアップロード</p>
                      <p className="text-sm text-gray-500">登記簿謄本、固定資産評価証明書など</p>
                      <button className="mt-4 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                        ファイルを選択
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">物件評価情報</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      物件の状態
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="物件の現状、修繕履歴、設備の状態などを詳しく記入してください"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      収益性評価
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">想定賃料収入（月額）</label>
                        <input
                          type="number"
                          className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">維持管理費用（月額）</label>
                        <input
                          type="number"
                          className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      リノベーション可能性
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                        <span className="ml-2 text-gray-700">構造上の改修が可能</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                        <span className="ml-2 text-gray-700">用途変更が可能</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                        <span className="ml-2 text-gray-700">設備の近代化が可能</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      評価資料
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">評価資料をアップロード</p>
                      <p className="text-sm text-gray-500">不動産鑑定評価書、建物診断報告書など</p>
                      <button className="mt-4 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                        ファイルを選択
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">上場条件の設定</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      発行株式数
                    </label>
                    <input
                      type="number"
                      className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="総発行株式数を入力"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      推奨：1,000株以上
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      想定初値（1株あたり）
                    </label>
                    <input
                      type="number"
                      className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="1株あたりの価格を入力"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      売出し方式
                    </label>
                    <select className="w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option value="">選択してください</option>
                      <option value="all">全株式を一括売出し</option>
                      <option value="partial">一部株式を売出し</option>
                      <option value="gradual">段階的な売出し</option>
                    </select>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-semibold text-yellow-800">上場に関する注意事項</h3>
                    </div>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>・上場後は定期的な情報開示が必要です</li>
                      <li>・物件の管理・メンテナンス責任が継続します</li>
                      <li>・株主の利益を考慮した運営が求められます</li>
                    </ul>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                      <span className="ml-2 text-gray-700">
                        上場に関する規約を読み、同意します
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  戻る
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors ml-auto"
                >
                  次へ
                </button>
              ) : (
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors ml-auto">
                  申請を送信
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyIPOPage;