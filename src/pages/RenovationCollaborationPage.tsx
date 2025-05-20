import React from 'react';
import { PenTool as Tool, Users, Star, CheckCircle, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Supplier {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  completedProjects: number;
  description: string;
  expertise: string[];
}

const suppliers: Supplier[] = [
  {
    id: '1',
    name: 'エリートリノベーション株式会社',
    specialty: 'キッチン・バスルームのリモデリング',
    rating: 4.8,
    completedProjects: 150,
    description: '15年以上の経験を持つ、高級キッチン・バスルームリノベーションの専門家チーム。',
    expertise: ['オーダーメイド家具', 'タイル工事', '給排水設備', '照明デザイン']
  },
  {
    id: '2',
    name: 'モダンスペースソリューションズ',
    specialty: '間取りの最適化',
    rating: 4.9,
    completedProjects: 200,
    description: '空間の有効活用とモダンなインテリアデザインに特化したエキスパートチーム。',
    expertise: ['壁面撤去', '空間プランニング', 'カスタム収納', 'オープンプラン設計']
  },
  {
    id: '3',
    name: 'グリーンビルド・エキスパーツ',
    specialty: '環境配慮型リノベーション',
    rating: 4.7,
    completedProjects: 120,
    description: '持続可能な材料とエネルギー効率の高いデザインを用いたエコフレンドリーなリノベーションソリューション。',
    expertise: ['太陽光発電', 'エコ素材', '省エネ設計', '節水設備']
  }
];

const RenovationCollaborationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          リノベーション協力プラットフォーム
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          信頼できるリノベーション業者とつながり、確かな技術で物件の価値を高めましょう。
        </p>
        <Link 
          to="/renovation-collaboration/consensus"
          className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          株主合意形成の詳細はこちら
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">500社以上</h3>
            <p className="text-gray-600">認定施工業者</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">2,000件以上</h3>
            <p className="text-gray-600">施工実績</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">4.8/5.0</h3>
            <p className="text-gray-600">顧客満足度</p>
          </div>
        </div>
      </div>

      {/* Suppliers List */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">おすすめ施工業者</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{supplier.name}</h3>
                  <Tool className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-4">{supplier.description}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">{supplier.rating}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-5 h-5 text-gray-500 mr-1" />
                  <span>{supplier.completedProjects}件の施工実績</span>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">専門分野：</h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                  お問い合わせ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="bg-blue-600 rounded-lg shadow-xl p-8">
          <Award className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            リノベーションプロジェクトを始めませんか？
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            実績豊富な施工業者とつながり、理想のリノベーションを実現しましょう。
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-md font-semibold hover:bg-blue-50 transition duration-200">
            今すぐ始める
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenovationCollaborationPage;