import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-700 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">ページが見つかりません</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          お探しのページは存在しないか、移動された可能性があります。URLを確認してもう一度お試しください。
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
        >
          <Home className="h-5 w-5" />
          <span>ホームに戻る</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;