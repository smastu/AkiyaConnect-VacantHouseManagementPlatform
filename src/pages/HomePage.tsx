import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Building, Users, ArrowRight, BarChart as ChartBar, Shield, Coins, Target } from 'lucide-react';
import MapView from '../components/map/MapView';
import PropertyCard from '../components/property/PropertyCard';
import FeatureCard from '../components/ui/FeatureCard';
import { sampleProperties } from '../data/sampleData';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-800 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              空き家を価値ある投資資産に
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              空き家を株式のように分割して売買できるプラットフォーム。
              地域の価値を高めながら、新しい不動産投資の形を実現します。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/property-trading"
                className="bg-white text-indigo-800 py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-transform hover:scale-105"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                取引を始める
              </Link>
              <Link
                to="/property-ipo"
                className="bg-transparent border-2 border-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-transform hover:scale-105"
              >
                <Building className="w-5 h-5 mr-2" />
                物件を上場する
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-indigo-800 hidden lg:block overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
            }}
          ></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <p className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">¥12.5B</p>
              <p className="text-gray-600">取引総額</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">1,234</p>
              <p className="text-gray-600">上場物件数</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">5,678</p>
              <p className="text-gray-600">投資家数</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">+32%</p>
              <p className="text-gray-600">平均価値上昇率</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">空き家活用の新しいカタチ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              空き家を証券化して取引可能にすることで、より多くの人が参加できる不動産市場を作ります。
              地域の価値向上と資産運用を両立させる革新的なプラットフォームです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Coins className="w-8 h-8 text-indigo-600" />}
              title="株式型不動産投資"
              description="空き家を株式のように分割して取引。少額から始められる新しい不動産投資の形を提供します。"
            />
            <FeatureCard
              icon={<ChartBar className="w-8 h-8 text-indigo-600" />}
              title="価値向上の可視化"
              description="リノベーションや地域貢献による物件価値の変動を、株価のように可視化します。"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-indigo-600" />}
              title="安全な取引環境"
              description="ブロックチェーン技術を活用し、透明性の高い安全な取引環境を提供します。"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-indigo-600" />}
              title="コミュニティ形成"
              description="株主同士が協力してリノベーションや活用方法を検討。新しい地域コミュニティを形成します。"
            />
            <FeatureCard
              icon={<Target className="w-8 h-8 text-indigo-600" />}
              title="地域価値の向上"
              description="空き家の活用を通じて、地域の魅力向上と経済活性化に貢献します。"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-indigo-600" />}
              title="流動性の向上"
              description="従来の不動産取引より高い流動性を実現。必要な時に必要な分だけ売買できます。"
            />
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">注目の上場物件</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              価値上昇が期待できる厳選された物件をご紹介します。
              リノベーションのポテンシャルや地域特性を考慮して選定しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/property-trading"
              className="inline-flex items-center justify-center bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:bg-indigo-700"
            >
              取引所を見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">上場物件マップ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              地図から物件を探して投資機会を見つけましょう。
              エリアごとの取引動向や価値上昇トレンドも確認できます。
            </p>
          </div>
          
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            <MapView />
          </div>
          
          <div className="mt-8 text-center">
            <Link
              to="/properties"
              className="inline-flex items-center justify-center bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:bg-indigo-700"
            >
              物件を探す
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">新しい不動産投資を始めましょう</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            空き家の価値を高め、地域の活性化に貢献しながら、
            革新的な資産運用を実現できます。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/property-trading"
              className="bg-white text-indigo-700 py-3 px-6 rounded-lg font-semibold transition-all hover:bg-gray-100"
            >
              取引を始める
            </Link>
            <Link
              to="/property-ipo"
              className="bg-transparent border-2 border-white py-3 px-6 rounded-lg font-semibold transition-all hover:bg-indigo-600"
            >
              物件を上場する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;