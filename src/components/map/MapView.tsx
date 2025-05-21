import React, { useEffect, useRef } from 'react';
import { sampleProperties } from '../../data/sampleData';

const MapView: React.FC<{ propertyId?: string }> = ({ propertyId }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapElement = mapRef.current;
      mapElement.innerHTML = '';

      // マップのコンテナを作成
      const mapContainer = document.createElement('div');
      mapContainer.className = 'relative w-full h-full bg-indigo-50 rounded-lg overflow-hidden';

      // マップの背景グリッドを作成
      const grid = document.createElement('div');
      grid.className = 'absolute inset-0';
      grid.style.backgroundImage = 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)';
      grid.style.backgroundSize = '20px 20px';

      // 道路を表現
      const road = document.createElement('div');
      road.className = 'absolute left-1/2 top-0 bottom-0 w-8 bg-gray-200 transform -translate-x-1/2';

      const horizontalRoad = document.createElement('div');
      horizontalRoad.className = 'absolute top-1/2 left-0 right-0 h-8 bg-gray-200 transform -translate-y-1/2';

      // 物件マーカーを作成
      const properties = propertyId 
        ? sampleProperties.filter(p => p.id === propertyId)
        : sampleProperties;

      properties.forEach(property => {
        const marker = document.createElement('div');
        marker.className = 'absolute w-6 h-6 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125';
        
        // マーカーの位置を設定（実際の座標を使用）
        const left = ((property.location.coordinates.lng + 180) / 360) * 100;
        const top = ((90 - property.location.coordinates.lat) / 180) * 100;
        
        marker.style.left = `${left}%`;
        marker.style.top = `${top}%`;

        // ツールチップを追加
        const tooltip = document.createElement('div');
        tooltip.className = 'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white rounded shadow-lg text-sm whitespace-nowrap opacity-0 transition-opacity pointer-events-none';
        tooltip.textContent = `${property.title} (${property.location.prefecture}${property.location.city})`;

        marker.addEventListener('mouseenter', () => {
          tooltip.classList.remove('opacity-0');
          tooltip.classList.add('opacity-100');
        });

        marker.addEventListener('mouseleave', () => {
          tooltip.classList.remove('opacity-100');
          tooltip.classList.add('opacity-0');
        });

        marker.appendChild(tooltip);
        mapContainer.appendChild(marker);
      });

      // 要素を組み立てる
      mapContainer.appendChild(grid);
      mapContainer.appendChild(road);
      mapContainer.appendChild(horizontalRoad);
      mapElement.appendChild(mapContainer);
    }
  }, [propertyId]);

  return (
    <div ref={mapRef} className="w-full h-full bg-gray-100 rounded-xl">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">地図を読み込み中...</p>
        </div>
      </div>
    </div>
  );
};

export default MapView;