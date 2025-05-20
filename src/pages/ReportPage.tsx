import React, { useState } from 'react';
import { Camera, MapPin, AlertTriangle, Send } from 'lucide-react';
import MapView from '../components/map/MapView';

const ReportPage: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">空き家を報告</h1>
          <p className="text-gray-600 mb-8">
            管理不全の空き家や危険な状態の建物を見つけた場合は、以下のフォームから報告してください。
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
                詳細情報
              </p>
            </div>
            <div className="flex-1">
              <div className={`h-2 rounded-r-full ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              <p className={`text-sm mt-2 ${step >= 3 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                確認・送信
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
                      物件の所在地
                    </label>
                    <div className="h-64 bg-gray-100 rounded-lg mb-4">
                      <MapView />
                    </div>
                    <input
                      type="text"
                      placeholder="住所を入力"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      建物の種類
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option value="">選択してください</option>
                      <option value="house">一戸建て</option>
                      <option value="apartment">マンション・アパート</option>
                      <option value="store">店舗</option>
                      <option value="warehouse">倉庫</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      空き家の状態
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option value="">選択してください</option>
                      <option value="abandoned">放置されている</option>
                      <option value="deteriorating">老朽化が進んでいる</option>
                      <option value="dangerous">倒壊の危険がある</option>
                      <option value="nuisance">周辺に悪影響を及ぼしている</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">詳細情報の入力</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      写真のアップロード
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">写真をドラッグ＆ドロップ</p>
                      <p className="text-sm text-gray-500">または</p>
                      <button className="mt-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                        写真を選択
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      具体的な状況
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="建物の状態や周辺への影響などを具体的に記入してください"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      危険度
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="danger_level" className="text-indigo-600" />
                        <span className="ml-2 text-gray-700">すぐに対応が必要</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="danger_level" className="text-indigo-600" />
                        <span className="ml-2 text-gray-700">早めの対応が望ましい</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="danger_level" className="text-indigo-600" />
                        <span className="ml-2 text-gray-700">経過観察が必要</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">報告内容の確認</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-semibold text-yellow-800">注意事項</h3>
                    </div>
                    <p className="text-sm text-yellow-700">
                      報告内容に誤りがないことをご確認ください。虚偽の報告は法的責任が生じる可能性があります。
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">所在地</h3>
                      <p className="text-gray-800">東京都新宿区〇〇町1-2-3</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">建物の種類</h3>
                      <p className="text-gray-800">一戸建て</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">状態</h3>
                      <p className="text-gray-800">老朽化が進んでいる</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">危険度</h3>
                      <p className="text-gray-800">早めの対応が望ましい</p>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      <span className="ml-2 text-gray-700">
                        報告内容に間違いがないことを確認しました
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
                <button
                  className="flex items-center bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors ml-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  報告を送信
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;