import React from 'react';
import { Link } from 'react-router-dom';
import { Package, MapPin, Truck, Phone, Mail, ExternalLink, ChevronRight, Star, Shield, Clock } from 'lucide-react';

const RenovationSupplierDetailPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/renovation-collaboration" className="hover:text-indigo-600">リノベーション</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/renovation-collaboration" className="hover:text-indigo-600">サプライヤー</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">エコ建材センター</span>
        </nav>

        {/* Supplier Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center">
              <Package className="w-12 h-12 text-indigo-600" />
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-800">エコ建材センター</h1>
                <div className="flex items-center mt-2">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="ml-2 text-gray-500">4.9 (234件の評価)</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                問い合わせ
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg transition-colors flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                電話する
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Categories */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">取扱商品カテゴリー</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">木材・建材</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>・無垢フローリング</li>
                    <li>・構造材</li>
                    <li>・羽目板</li>
                    <li>・デッキ材</li>
                    <li>・集成材</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">断熱材・防音材</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>・グラスウール</li>
                    <li>・ロックウール</li>
                    <li>・セルロースファイバー</li>
                    <li>・遮音シート</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">建具・金物</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>・木製ドア</li>
                    <li>・引き戸</li>
                    <li>・窓枠</li>
                    <li>・金具類</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">塗料・接着剤</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>・自然塗料</li>
                    <li>・オイルステイン</li>
                    <li>・木工用接着剤</li>
                    <li>・シーリング材</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Products */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">おすすめ商品</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg"
                    alt="無垢材フローリング"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">天然無垢材フローリング</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      国産杉材使用、自然塗装仕上げ
                    </p>
                    <p className="text-indigo-600 font-medium mt-2">¥12,800/㎡〜</p>
                  </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6827374/pexels-photo-6827374.jpeg"
                    alt="断熱材"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">高性能断熱材</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      環境配慮型、高断熱仕様
                    </p>
                    <p className="text-indigo-600 font-medium mt-2">¥4,500/㎡〜</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">サービスの特徴</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Truck className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">配送サービス</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      関東圏内は翌日配送可能。大型トラックでの一括配送に対応。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">品質保証</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      全商品に品質保証書を添付。不具合時は迅速に対応。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">即日見積り</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      メールまたは電話での問い合わせに、当日中に見積り回答。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ExternalLink className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">現場アドバイス</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      経験豊富なスタッフが、現場での施工アドバイスを提供。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">電話番号</p>
                    <p className="font-medium">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">メールアドレス</p>
                    <p className="font-medium">info@eco-kenzai.jp</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">所在地</p>
                    <p className="font-medium">東京都江東区○○1-2-3</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">営業時間</p>
                    <p className="font-medium">9:00-18:00（土日祝休）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">認証・資格</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">FSC認証取得</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">ISO 14001認証</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">エコマーク認定商品取扱</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">お支払い方法</h2>
              <div className="space-y-2 text-gray-600">
                <p>・銀行振込</p>
                <p>・クレジットカード</p>
                <p>・代金引換</p>
                <p>・掛け売り（要審査）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenovationSupplierDetailPage;