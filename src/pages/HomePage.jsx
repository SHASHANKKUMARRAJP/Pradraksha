import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Trophy, 
  BarChart3, 
  Target, 
  Users, 
  Star,
  ArrowRight,
  Play,
  Award,
  Globe,
  Shield,
  Rocket,
  Zap,
  BookOpen,
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  MessageCircle,
  Sparkles,
  GraduationCap
} from 'lucide-react'

const HomePage = () => {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const dashboardRef = useRef(null)
  const sportsRef = useRef(null)
  const aboutRef = useRef(null)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const dashboardInView = useInView(dashboardRef, { once: true })
  const sportsInView = useInView(sportsRef, { once: true })
  const aboutInView = useInView(aboutRef, { once: true })

  const [showAIMentor, setShowAIMentor] = useState(false)

  // Floating particles effect
  useEffect(() => {
    const particles = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.style.position = 'fixed'
      particle.style.width = '2px'
      particle.style.height = '2px'
      particle.style.background = 'rgba(91, 192, 190, 0.5)'
      particle.style.borderRadius = '50%'
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '1'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`
      
      document.body.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(particle => document.body.removeChild(particle))
    }
  }, [])

  const floatingIcons = [
    { Icon: Brain, delay: 0, x: 20, y: 100 },
    { Icon: Trophy, delay: 0.5, x: -30, y: 200 },
    { Icon: BookOpen, delay: 1, x: 50, y: 300 },
    { Icon: Zap, delay: 1.5, x: -20, y: 400 },
    { Icon: Target, delay: 2, x: 40, y: 150 },
    { Icon: Award, delay: 2.5, x: -40, y: 350 },
  ]

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized study recommendations and intelligent progress tracking",
      gradient: "from-aqua-500 to-aqua-400"
    },
    {
      icon: Trophy,
      title: "Sports Excellence",
      description: "Track achievements and discover upcoming tournaments",
      gradient: "from-gold-500 to-gold-400"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Detailed insights into your academic and sports performance",
      gradient: "from-navy-400 to-navy-300"
    }
  ]

  const tournaments = [
    {
      title: "Inter-School Cricket Championship",
      date: "Feb 15, 2024",
      location: "Sports Complex, Mumbai",
      participants: 16,
      prize: "₹50,000"
    },
    {
      title: "Youth Football League",
      date: "Feb 20, 2024",
      location: "Football Ground, Delhi",
      participants: 24,
      prize: "₹30,000"
    },
    {
      title: "Basketball Summer Cup",
      date: "Mar 1, 2024",
      location: "Basketball Court, Bangalore",
      participants: 12,
      prize: "₹20,000"
    }
  ]

  const milestones = [
    { year: "2023", title: "Platform Launch", description: "Pradraksha officially launched with AI-powered learning features" },
    { year: "2023", title: "10K Students", description: "Reached our first milestone of 10,000 active students" },
    { year: "2024", title: "Sports Integration", description: "Added comprehensive sports tracking and tournament features" },
    { year: "2024", title: "AI Mentor", description: "Launched advanced AI mentor with voice interaction capabilities" }
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-pradraksha-gradient"
        />
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: x,
              y: y
            }}
            transition={{ 
              delay: delay,
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            className="absolute hidden lg:block floating-element"
            style={{ left: `${20 + index * 10}%`, top: `${10 + index * 15}%` }}
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: delay
              }}
              className="w-16 h-16 pradraksha-glass rounded-full flex items-center justify-center border border-aqua-500/30 hover:border-aqua-400/50 transition-all duration-300 cursor-pointer"
            >
              <Icon className="w-8 h-8 text-aqua-400" />
            </motion.div>
          </motion.div>
        ))}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* 3D Student Illustration Placeholder */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={heroInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-aqua-500 to-gold-500 rounded-full flex items-center justify-center shadow-2xl">
                  <GraduationCap className="w-16 h-16 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-aqua-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-gold-400/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display"
            >
              <span className="gradient-text">Pradraksha</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-white mb-4 font-semibold"
            >
              Empowering Your Journey in Education & Sports
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Personalized learning, performance analytics, and sports guidance — all in one AI-driven platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-3"
              >
                <Rocket className="w-6 h-6" />
                <span>🚀 Start Learning</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-3"
              >
                <Play className="w-6 h-6" />
                <span>📘 Explore Sports</span>
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-aqua-400/50 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-aqua-400/50 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Why Choose <span className="gradient-text">Pradraksha?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of education and sports with our cutting-edge AI platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative"
                >
                  <div className="pradraksha-glass rounded-3xl p-8 h-full card-hover relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`} />
                    
                    <div className="relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section ref={dashboardRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Your <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your progress, monitor achievements, and get AI-powered recommendations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={dashboardInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="pradraksha-glass rounded-3xl p-8 card-hover">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Progress Bars */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg">Subject Progress</h4>
                  <div className="space-y-3">
                    {['Mathematics', 'Physics', 'Chemistry', 'English'].map((subject, index) => (
                      <div key={subject}>
                        <div className="flex justify-between text-sm text-gray-300 mb-1">
                          <span>{subject}</span>
                          <span>{85 - index * 5}%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={dashboardInView ? { width: `${85 - index * 5}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                            className="h-full bg-gradient-to-r from-aqua-500 to-gold-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sports Badges */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg">Sports Achievements</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['🏆', '🥇', '🎯', '⭐'].map((badge, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={dashboardInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                        className="w-16 h-16 pradraksha-glass rounded-xl flex items-center justify-center text-2xl"
                      >
                        {badge}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI Recommendation */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-lg">AI Recommendation</h4>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={dashboardInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="p-4 bg-gradient-to-r from-aqua-500/20 to-gold-500/20 rounded-xl border border-aqua-500/30"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-5 h-5 text-aqua-400" />
                      <span className="text-aqua-400 font-medium">Study Tip</span>
                    </div>
                    <p className="text-white text-sm">Focus on Chemistry today - your progress is below average</p>
                  </motion.div>
                </div>
              </div>

              <div className="text-center">
                <Link to="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    View Full Dashboard
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sports Zone Section */}
      <section ref={sportsRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={sportsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              <span className="gradient-text">Sports Zone</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover tournaments, track achievements, and connect with local sports communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={sportsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="pradraksha-glass rounded-3xl p-6 card-hover relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-aqua-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <Trophy className="w-8 h-8 text-gold-400" />
                      <span className="text-gold-400 text-sm font-medium">Tournament</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{tournament.title}</h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{tournament.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{tournament.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{tournament.participants} participants</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="text-sm">Prize: {tournament.prize}</span>
                      </div>
                    </div>
                    
                    <button className="w-full btn-secondary">
                      Register Now
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/sports">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Explore All Sports
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building the future of education and sports, one milestone at a time
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="flex items-center space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-aqua-500 to-gold-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="pradraksha-glass rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Mentor Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowAIMentor(!showAIMentor)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-aqua-500 to-gold-500 rounded-full flex items-center justify-center shadow-2xl z-50 pulse-glow"
      >
        <Brain className="w-8 h-8 text-white" />
      </motion.button>

      {/* AI Mentor Chat Popup */}
      {showAIMentor && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-8 w-80 pradraksha-glass rounded-2xl p-6 z-50"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-aqua-500 to-gold-500 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">AI Mentor</h4>
                <p className="text-aqua-400 text-sm">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setShowAIMentor(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-white text-sm">Hello! I'm your AI mentor. How can I help you today?</p>
            </div>
            
            <div className="space-y-2">
              <button className="w-full text-left p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm transition-colors">
                Help with math problems
              </button>
              <button className="w-full text-left p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm transition-colors">
                Create study schedule
              </button>
              <button className="w-full text-left p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm transition-colors">
                Sports training tips
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default HomePage