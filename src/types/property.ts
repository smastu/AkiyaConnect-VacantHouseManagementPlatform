export interface PropertyValue {
  timestamp: string;
  value: number;
  change: number;
  changePercent: number;
}

export interface PropertyShare {
  id: string;
  propertyId: string;
  shares: number;
  purchasePrice: number;
  purchaseDate: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  totalShares: number;
  availableShares: number;
  currentPrice: number;
  initialPrice: number;
  priceHistory: PropertyValue[];
  marketCap: number;
  tradingVolume: number;
  propertyType: string;
  size: number;
  rooms: number;
  age: number;
  renovated: boolean;
  status: 'pre_ipo' | 'trading' | 'suspended';
  condition: 'excellent' | 'good' | 'fair' | 'needs_work' | 'poor';
  location: {
    prefecture: string;
    city: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  features: string[];
  images: string[];
  documents: {
    type: string;
    url: string;
    name: string;
  }[];
  renovationHistory: {
    date: string;
    description: string;
    cost: number;
    valueIncrease: number;
  }[];
  financials: {
    maintenanceCosts: number;
    expectedRentalIncome: number;
    propertyTax: number;
    insuranceCost: number;
  };
  riskLevel: 'low' | 'medium' | 'high';
  riskFactors: string[];
  lastUpdated: string;
}

export interface Trade {
  id: string;
  propertyId: string;
  type: 'buy' | 'sell';
  shares: number;
  pricePerShare: number;
  totalAmount: number;
  timestamp: string;
  status: 'pending' | 'completed' | 'cancelled';
  buyerId?: string;
  sellerId?: string;
}

export interface PropertyAnalytics {
  propertyId: string;
  totalTrades: number;
  averagePrice: number;
  highestPrice: number;
  lowestPrice: number;
  priceVolatility: number;
  marketSentiment: 'bullish' | 'bearish' | 'neutral';
  tradingVolume: number;
  holdingPeriod: number;
}

export interface IPOApplication {
  id: string;
  propertyId: string;
  ownerInfo: {
    name: string;
    contact: string;
    documents: string[];
  };
  propertyDocuments: {
    type: string;
    url: string;
    verified: boolean;
  }[];
  valuation: {
    initialPrice: number;
    totalShares: number;
    marketCap: number;
    justification: string;
  };
  status: 'pending' | 'approved' | 'rejected';
  submissionDate: string;
  reviewDate?: string;
  comments?: string[];
}