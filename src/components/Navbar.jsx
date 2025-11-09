import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Home, 
  BarChart3, 
  Trophy, 
  BookOpen, 
  MessageCircle, 
  Info,
  Brain,
  User,
  LogIn,
  UserPlus,
  ChevronDown,
  Search,
  Bell,
  MessageSquare,
  FileText
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const { scrollY } = useScroll();

  // Navigation items
  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: Home,
      type: 'link'
    },
    { 
      path: '/dashboard', 
      label: 'Dashboard', 
      icon: BarChart3,
      type: 'link',
      auth: true
    },
    { 
      path: '/sports', 
      label: 'Sports Zone', 
      icon: Trophy,
      type: 'link'
    },
    { 
      path: '/education', 
      label: 'Education Hub', 
      icon: BookOpen,
      type: 'dropdown',
      subItems: [
        { path: '/education/courses', label: 'Courses' },
        { path: '/education/resources', label: 'Study Resources' },
        { path: '/education/assessments', label: 'Assessments' },
      ]
    },
    { 
      path: '/ai-mentor', 
      label: 'AI Mentor', 
      icon: MessageCircle,
      type: 'link'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: Info,
      type: 'link'
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Track scroll position
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 10);
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle user logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-primary-900/90 dark:bg-primary-950/90 backdrop-blur-md border-b border-secondary-500/20 shadow-lg py-0' 
          : 'bg-transparent py-2',
        'px-4 sm:px-6 lg:px-8'
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Pradraksha
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.auth && !user) return null;
              
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                             (item.subItems && item.subItems.some(subItem => 
                               location.pathname.startsWith(subItem.path)
                             ));
              
              if (item.type === 'dropdown') {
                return (
                  <div key={item.path} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={cn(
                        'flex items-center space-x-1 px-4 py-2.5 rounded-lg font-medium transition-colors',
                        isActive 
                          ? 'text-white bg-primary-800 dark:bg-primary-800/50' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5',
                        'group'
                      )}
                    >
                      <span className="flex items-center">
                        <Icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </span>
                      <ChevronDown className={cn(
                        'w-4 h-4 ml-1 transition-transform duration-200',
                        isDropdownOpen ? 'rotate-180' : ''
                      )} />
                    </button>
                    
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-0 mt-2 w-56 rounded-xl bg-white dark:bg-primary-800 shadow-xl overflow-hidden border border-gray-100 dark:border-primary-700/50 z-50"
                        >
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={cn(
                                'block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-primary-700/50',
                                location.pathname === subItem.path ? 'bg-gray-50 dark:bg-primary-700/30 font-medium' : ''
                              )}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-4 py-2.5 rounded-lg font-medium transition-colors',
                    'flex items-center space-x-2',
                    isActive 
                      ? 'text-white bg-primary-800 dark:bg-primary-800/50' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 flex items-center justify-center text-white">
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user.displayName || 'User'} 
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-white">
                    {user.displayName || 'Account'}
                  </span>
                  <ChevronDown className={cn(
                    'w-4 h-4 text-gray-400 transition-transform',
                    isDropdownOpen ? 'rotate-180' : ''
                  )} />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-primary-800 shadow-xl overflow-hidden border border-gray-100 dark:border-primary-700/50 z-50"
                    >
                      <div className="px-4 py-3 border-b border-gray-100 dark:border-primary-700/50">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {user.displayName || 'User'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>
                      <Link
                        to="/profile"
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-primary-700/50"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-primary-700/50"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-accent-500 to-accent-400 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Create Resume</span>
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </>
            )}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/40 backdrop-blur-md rounded-lg mt-2 overflow-hidden border border-white/10"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
