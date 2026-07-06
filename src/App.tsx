import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import NewsSection from './components/NewsSection';
import ActivityBanners from './components/ActivityBanners';
import MemberNews from './components/MemberNews';
import AcademicResources from './components/AcademicResources';
import QuickLinks from './components/QuickLinks';
import BottomModules from './components/BottomModules';
import HonorBadges from './components/HonorBadges';
import Footer from './components/Footer';
import SocietyPage from './pages/SocietyPage';
import NewsPage from './pages/NewsPage';
import AcademicPage from './pages/AcademicPage';
import JournalPage from './pages/JournalPage';
import RulesPage from './pages/RulesPage';
import OrganizationPage from './pages/OrganizationPage';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-0 py-4">
      <div className="flex gap-4">
        <Banner />
        <NewsSection />
      </div>
      <ActivityBanners />
      <div className="flex gap-[22px] mt-4">
        <MemberNews />
        <AcademicResources />
        <QuickLinks />
      </div>
      <BottomModules />
      <HonorBadges />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-xlys-beige flex flex-col items-center">
      <div className="bg-white w-full">
        <div className="w-[1140px] mx-auto px-0">
          <Header />
        </div>
      </div>
      <div className="bg-xlys-red w-full">
        <div className="w-[1140px] mx-auto px-0">
          <Navigation />
        </div>
      </div>
      <div className="w-[1140px] px-0 py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/society" element={<SocietyPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
        </Routes>
      </div>
      <div className="bg-xlys-dark w-full mt-auto">
        <div className="w-[1140px] mx-auto px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;