import React, { useEffect, useRef } from 'react';
import { sampleProperties } from '../../data/sampleData';

const MapView: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real application, this would be replaced with an actual map implementation
    // such as Google Maps, Mapbox, or Leaflet
    if (mapRef.current) {
      const mapElement = mapRef.current;
      
      // Simulate map rendering with a placeholder
      mapElement.innerHTML = '';
      const mapContainer = document.createElement('div');
      mapContainer.className = 'w-full h-full bg-indigo-100 flex items-center justify-center';
      
      const mapContent = document.createElement('div');
      mapContent.className = 'text-center p-6';
      
      const mapIcon = document.createElement('div');
      mapIcon.className = 'mb-4 mx-auto w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center';
      mapIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      `;
      
      const mapTitle = document.createElement('h3');
      mapTitle.className = 'text-xl font-semibold text-gray-800 mb-2';
      mapTitle.textContent = '日本全国の空き家マップ';
      
      const mapDescription = document.createElement('p');
      mapDescription.className = 'text-gray-600';
      mapDescription.textContent = `${sampleProperties.length}件の物件が登録されています`;
      
      // Property dots (simulating map markers)
      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'relative w-full h-48 mt-6';
      
      sampleProperties.forEach((property, index) => {
        const dot = document.createElement('div');
        const isHighlighted = index % 2 === 0; // Just for visual variety
        
        dot.className = `absolute w-5 h-5 rounded-full ${
          isHighlighted ? 'bg-indigo-600' : 'bg-indigo-400'
        } transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-125`;
        
        // Position dots randomly (in a real app, these would be actual coordinates)
        const left = 10 + (property.location.coordinates.lng % 80);
        const top = 10 + (property.location.coordinates.lat % 80);
        
        dot.style.left = `${left}%`;
        dot.style.top = `${top}%`;
        
        // Add tooltip on hover
        dot.setAttribute('title', `${property.title} - ${property.location.prefecture}`);
        
        dotsContainer.appendChild(dot);
      });
      
      mapContent.appendChild(mapIcon);
      mapContent.appendChild(mapTitle);
      mapContent.appendChild(mapDescription);
      mapContent.appendChild(dotsContainer);
      mapContainer.appendChild(mapContent);
      mapElement.appendChild(mapContainer);
    }
  }, []);

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