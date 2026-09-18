import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { AnimatePresence, motion } from 'motion/react';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BuyModal } from './components/BuyModal';
import { PageTitle } from './components/PageTitle';

// Pages
import { Home } from './pages/Home';
import { Premium } from './pages/Premium';
import { Free } from './pages/Free';
import { NotFound } from './pages/NotFound';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('/');
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Initialize route from current path or popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      const validRoutes: PageRoute[] = [
        '/',
        '/premium',
        '/free',
      ];
      if (validRoutes.includes(path)) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute(path);
      }
      window.scrollTo(0, 0);
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch {
      // In restricted iframe environments
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBuyModal = () => {
    setIsBuyModalOpen(true);
  };

  const renderActivePage = () => {
    switch (currentRoute) {
      case '/':
        return <Home onNavigate={navigateTo} onOpenBuyModal={handleOpenBuyModal} />;
      case '/premium':
        return <Premium onNavigate={navigateTo} onOpenBuyModal={handleOpenBuyModal} />;
      case '/free':
        return <Free onNavigate={navigateTo} onOpenBuyModal={handleOpenBuyModal} />;
      default:
        return <NotFound onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white overflow-x-hidden bg-[#0a0a0f] relative">
      {/* Dynamic SEO Titles */}
      <PageTitle currentRoute={currentRoute} />

      {/* Cyber Ambient Glowing Lights */}
      <CyberBackground />

      {/* Header Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main Content with Route Transitions */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Direct Buy Modal */}
      <BuyModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        title="PREMIUM SENSI PACK"
        price="₹399"
        originalPrice="₹999"
        theme="premium"
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
