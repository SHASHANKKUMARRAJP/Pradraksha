import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const LoadingScreen = lazy(() => import('./components/LoadingScreen'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const AIMentorChat = lazy(() => import('./components/AIMentorChat'));

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const SportsZone = lazy(() => import('./pages/SportsZone'));
const EducationHub = lazy(() => import('./pages/EducationHub'));
const AIMentor = lazy(() => import('./pages/AIMentor'));
const About = lazy(() => import('./pages/About'));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-900 to-primary-800">
    <div className="w-16 h-16 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Animation variants for page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// AnimatedRoute component for page transitions
const AnimatedRoute = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen"
            >
              <HomePage />
            </motion.div>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen pt-20"
            >
              <Dashboard />
            </motion.div>
          } 
        />
        <Route 
          path="/sports" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen pt-20"
            >
              <SportsZone />
            </motion.div>
          } 
        />
        <Route 
          path="/education" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen pt-20"
            >
              <EducationHub />
            </motion.div>
          } 
        />
        <Route 
          path="/ai-mentor" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen pt-20"
            >
              <AIMentor />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="min-h-screen pt-20"
            >
              <About />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for user's preferred color scheme
    const isDark = localStorage.theme === 'dark' || 
                  (!('theme' in localStorage) && 
                  window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    setMounted(true);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-primary to-primary-light text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Suspense fallback={<PageLoader />}>
              <ParticleBackground />
              <Navbar />
              
              <main className="relative z-10">
                <AnimatedRoute />
              </main>
              
              <Footer />
              
              {/* AI Mentor Chatbox - Available on all pages */}
              <AIMentorChat />
              
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#1C2541',
                    color: '#fff',
                  },
                }}
              />
            </Suspense>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App