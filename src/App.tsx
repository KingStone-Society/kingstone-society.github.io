import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import NewsSection from './components/NewsSection';
import ActivityBanners from './components/ActivityBanners';
import MemberNews from './components/MemberNews';
import AcademicResources from './components/AcademicResources';
import QuickLinks from './components/QuickLinks';
import BottomModules from './components/BottomModules';
import Footer from './components/Footer';
import SocietyPage from './pages/admin/SocietyPage';
import SocietyHistoryPage from './pages/admin/SocietyHistoryPage';
import SocietyPresidentsPage from './pages/admin/SocietyPresidentsPage';
import PresidentDetailPage from './pages/admin/PresidentDetailPage';
import SocietyMembersPage from './pages/admin/SocietyMembersPage';
import SocietyTimelinePage from './pages/admin/SocietyTimelinePage';
import TimelineYearPage from './pages/admin/TimelineYearPage';
import NewsPage from './pages/NewsPage';
import NewsMemberPage from './pages/NewsMemberPage';
import NewsActivityPage from './pages/NewsActivityPage';
import NewsGovernmentPage from './pages/NewsGovernmentPage';
import NewsNoticePage from './pages/NewsNoticePage';
import AcademicPage from './pages/AcademicPage';
import AcademicSubmissionPage from './pages/AcademicSubmissionPage';
import JournalPage from './pages/JournalPage';
import JournalSubmissionPage from './pages/JournalSubmissionPage';
import RulesPage from './pages/admin/RulesPage';
import RulesCharterPage from './pages/admin/RulesCharterPage';
import RulesManualPage from './pages/admin/RulesManualPage';
import OrganizationPage from './pages/admin/OrganizationPage';
import OrganizationStandingPage from './pages/admin/OrganizationStandingPage';
import ArticlePage from './pages/ArticlePage';
import CooperationPage from './pages/CooperationPage';
import SearchPage from './pages/SearchPage';

const HomePage: React.FC = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto px-3 sm:px-0 py-4">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
        <Banner />
        <NewsSection />
      </div>
      <ActivityBanners />
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-4">
        <MemberNews />
        <AcademicResources />
        <QuickLinks />
      </div>
      <BottomModules />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-xlys-beige flex flex-col items-center">
      <div className="bg-xlys-red w-full">
        <div className="w-full max-w-[1140px] mx-auto px-3 sm:px-0">
          <Navigation />
        </div>
      </div>
      <div className="w-full max-w-[1140px] px-3 sm:px-0 py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/society" element={<SocietyPage />} />
          <Route path="/society/history" element={<SocietyHistoryPage />} />
          <Route path="/society/presidents" element={<SocietyPresidentsPage />} />
          <Route path="/society/presidents/:name" element={<PresidentDetailPage />} />
          <Route path="/society/members" element={<SocietyMembersPage />} />
          <Route path="/society/timeline" element={<SocietyTimelinePage />} />
          <Route path="/society/timeline/:year" element={<TimelineYearPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/member" element={<NewsMemberPage />} />
          <Route path="/news/activity" element={<NewsActivityPage />} />
          <Route path="/news/government" element={<NewsGovernmentPage />} />
          <Route path="/news/notice" element={<NewsNoticePage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/academic/submission" element={<AcademicSubmissionPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/submission" element={<JournalSubmissionPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/rules/charter" element={<RulesCharterPage />} />
          <Route path="/rules/manual" element={<RulesManualPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/organization/standing" element={<OrganizationStandingPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
      </div>
      <div className="bg-xlys-dark w-full mt-auto">
        <div className="w-full max-w-[1140px] mx-auto px-3 sm:px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;