import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PropertyListingPage from './pages/PropertyListingPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import PropertyTradingPage from './pages/PropertyTradingPage';
import PropertyIPOPage from './pages/PropertyIPOPage';
import OwnerDashboardPage from './pages/OwnerDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ResourcesPage from './pages/ResourcesPage';
import ReportPage from './pages/ReportPage';
import RenovationCollaborationPage from './pages/RenovationCollaborationPage';
import RenovationProjectDetailPage from './pages/renovation/RenovationProjectDetailPage';
import RenovationTeamPage from './pages/renovation/RenovationTeamPage';
import RenovationSupplierDetailPage from './pages/renovation/RenovationSupplierDetailPage';
import RenovationGuidePage from './pages/renovation/RenovationGuidePage';
import RenovationConsensusPage from './pages/renovation/RenovationConsensusPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertyListingPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/property-trading" element={<PropertyTradingPage />} />
            <Route path="/property-ipo" element={<PropertyIPOPage />} />
            <Route path="/owner-dashboard" element={<OwnerDashboardPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/renovation-collaboration" element={<RenovationCollaborationPage />} />
            <Route path="/renovation-collaboration/projects/:id" element={<RenovationProjectDetailPage />} />
            <Route path="/renovation-collaboration/projects/:id/team" element={<RenovationTeamPage />} />
            <Route path="/renovation-collaboration/suppliers/:id" element={<RenovationSupplierDetailPage />} />
            <Route path="/renovation-collaboration/guide" element={<RenovationGuidePage />} />
            <Route path="/renovation-collaboration/consensus" element={<RenovationConsensusPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;