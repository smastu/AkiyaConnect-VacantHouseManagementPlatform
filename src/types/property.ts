export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  size: number;
  propertyType: string;
  rooms: number;
  age: number;
  renovated: boolean;
  status: 'available' | 'pending';
  condition: 'excellent' | 'good' | 'needs_work';
  hashtags: string[];
  location: {
    prefecture: string;
    city: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    }
  };
  features: string[];
  images: string[];
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}