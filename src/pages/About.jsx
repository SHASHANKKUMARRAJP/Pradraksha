import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Star,
  TrendingUp,
  BookOpen,
  Trophy,
  Brain,
  Zap,
  Sparkles,
  Rocket,
  Lightbulb,
  TrendingUp as Growth,
  BarChart3,
  Activity,
  ChevronRight,
  CheckCircle,
  Flame
} from 'lucide-react'

const About = () => {
  const contentCards = [
    {
      id: 'hero',
      emoji: '🧠✨',
      title: 'Where Dreams Learn to Run',
      subtitle: 'Welcome to Pradraksha 🏫⚡',
      description: "The world's first AI-powered education & sports universe built for the next generation of champions. Here, your books and sneakers walk hand in hand 👟📚 — because learning should move with you, not against you.",
      highlight: "We're here to redefine success — not just in exams, but in life, leadership, and the spirit of play! 🌍💪",
      icon: Rocket,
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      id: 'story',
      emoji: '🚀🔥',
      title: 'Our Story: Born from Passion + Purpose',
      subtitle: 'Every great movement begins with a spark',
      description: 'Pradraksha was born from one simple belief — "What if every student could learn smarter 🧩, play stronger 🏆, and grow faster 🌱 — all in one place?"',
      highlight: 'So we built a platform where AI becomes your coach, data becomes your motivation, and you become unstoppable. 💥',
      details: 'From Class 6 to College, we guide you through a world of personalized learning, sports analytics, and progress magic that keeps you motivated every single day.',
      icon: Flame,
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    {
      id: 'features',
      emoji: '🌈✨',
      title: 'What Makes Pradraksha Magical',
      icon: Sparkles,
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      features: [
        {
          emoji: '💡',
          title: 'AI-Powered Learning',
          description: 'Get study recommendations that feel made just for you. Adaptive lessons, smart goals, and progress that evolves with your growth!',
          icon: Brain
        },
        {
          emoji: '🏅',
          title: 'Sports Intelligence',
          description: 'Your training. Your tournaments. Your performance. All tracked, analyzed, and visualized by our AI — so you can see your improvement in real time! ⚽🏸🏏',
          icon: Trophy
        },
        {
          emoji: '📊',
          title: 'Progress Analytics',
          description: 'Charts, stats, and insights that don\'t just show numbers — they show your story. Because behind every grade or score is you becoming better. 💪',
          icon: BarChart3
        },
        {
          emoji: '🌐',
          title: 'One Community, Infinite Growth',
          description: 'Learn with achievers, train with athletes, and dream with creators. Together, we\'re building a world where education meets evolution. 🌟',
          icon: Users
        }
      ]
    },
    {
      id: 'vision',
      emoji: '🦾💫',
      title: 'Our Vision: Building Smarter Humans',
      subtitle: 'Not Just Smarter Grades',
      description: 'We see a future where:',
      icon: Target,
      gradient: 'from-green-500 via-teal-500 to-blue-500',
      visionPoints: [
        { text: 'Classrooms are intelligent 🧠', icon: Brain },
        { text: 'Coaches are digital 🏋️‍♂️', icon: Activity },
        { text: 'Learning is limitless 🌠', icon: Rocket },
        { text: 'Every student feels like a champion 🥇', icon: Award }
      ],
      highlight: 'Pradraksha is more than a platform — It\'s a movement 💫.',
      tagline: '"We don\'t just teach lessons — we build legacies."'
    },
    {
      id: 'cta',
      emoji: '💜🚀',
      title: 'Join the Revolution',
      description: 'Are you ready to learn like a genius, train like a pro, and grow like a legend?',
      highlight: 'Then welcome to Pradraksha — The AI Education & Sports Platform of the Future. 🚀',
      tagline: 'Let\'s make every goal, grade, and game count. 🏆📘💫',
      icon: Heart,
      gradient: 'from-pink-500 via-purple-500 to-indigo-500'
    }
  ]

  const stats = [
    { number: "50K+", label: "Active Students", emoji: "👨‍🎓", icon: Users, color: "from-blue-500 to-cyan-500" },
    { number: "200+", label: "Schools Partnered", emoji: "🏫", icon: Globe, color: "from-green-500 to-emerald-500" },
    { number: "95%", label: "Success Rate", emoji: "🎯", icon: Target, color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "AI Support", emoji: "🤖", icon: Brain, color: "from-orange-500 to-red-500" }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl mb-6"
          >
            🧠✨
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
            About <span className="gradient-text">Pradraksha</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Where Dreams Learn to Run 🚀
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="glass-effect rounded-2xl p-6 card-hover text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-5xl mb-3">{stat.emoji}</div>
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Content Cards */}
        <div className="space-y-12">
          {contentCards.map((card, index) => {
            const Icon = card.icon
            
            // Hero Card
            if (card.id === 'hero') {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="text-7xl mb-6"
                      >
                        {card.emoji}
                      </motion.div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">{card.title}</h2>
                      <p className="text-2xl text-secondary-300 font-semibold mb-6">{card.subtitle}</p>
                    </div>
                    <p className="text-xl text-gray-200 text-center leading-relaxed mb-6 max-w-4xl mx-auto">
                      {card.description}
                    </p>
                    <p className="text-2xl text-accent-300 text-center font-bold leading-relaxed max-w-4xl mx-auto">
                      {card.highlight}
                    </p>
                  </div>
                </motion.div>
              )
            }
            
            // Story Card
            if (card.id === 'story') {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mr-4"
                      >
                        {card.emoji}
                      </motion.div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center font-display">{card.title}</h2>
                    <p className="text-xl text-gray-300 text-center italic mb-6">{card.subtitle}</p>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4 max-w-3xl mx-auto">
                      {card.description}
                    </p>
                    <p className="text-xl text-accent-300 font-bold leading-relaxed mb-4 max-w-3xl mx-auto">
                      {card.highlight}
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                      {card.details}
                    </p>
                  </div>
                </motion.div>
              )
            }
            
            // Features Card
            if (card.id === 'features') {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  className="glass-effect rounded-3xl p-8 md:p-12"
                >
                  <div className="text-center mb-12">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-6"
                    >
                      {card.emoji}
                    </motion.div>
                    <div className={`w-20 h-20 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display">{card.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {card.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon
                      return (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + featureIndex * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
                        >
                          <div className="text-5xl mb-4">{feature.emoji}</div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4">
                              <FeatureIcon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                          </div>
                          <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            }
            
            // Vision Card
            if (card.id === 'vision') {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="text-center mb-10">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-6xl mb-6"
                      >
                        {card.emoji}
                      </motion.div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-display">{card.title}</h2>
                      <p className="text-2xl text-gray-300 font-semibold mb-6">{card.subtitle}</p>
                      <p className="text-xl text-gray-200 mb-8">{card.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {card.visionPoints.map((point, pointIndex) => {
                        const PointIcon = point.icon
                        return (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + pointIndex * 0.1 }}
                            className="flex items-center space-x-4 bg-white/5 rounded-xl p-4"
                          >
                            <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <PointIcon className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-lg text-white font-medium">{point.text}</p>
                          </motion.div>
                        )
                      })}
                    </div>
                    
                    <div className="text-center">
                      <p className="text-2xl text-accent-300 font-bold mb-4">{card.highlight}</p>
                      <p className="text-3xl text-white font-bold italic">{card.tagline}</p>
                    </div>
                  </div>
                </motion.div>
              )
            }
            
            // CTA Card
            if (card.id === 'cta') {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-effect rounded-3xl p-8 md:p-16 relative overflow-hidden group text-center"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <div className="text-7xl mb-6">{card.emoji}</div>
                    <div className={`w-24 h-24 bg-gradient-to-r ${card.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">{card.title}</h2>
                    <p className="text-2xl text-gray-200 leading-relaxed mb-6 max-w-3xl mx-auto">
                      {card.description}
                    </p>
                    <p className="text-3xl text-accent-300 font-bold leading-relaxed mb-6 max-w-3xl mx-auto">
                      {card.highlight}
                    </p>
                    <p className="text-2xl text-white font-bold mb-8">{card.tagline}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-accent-500 to-accent-400 text-primary-950 px-12 py-5 rounded-full font-bold text-2xl shadow-2xl hover:shadow-accent-500/50 transition-all duration-300"
                    >
                      Get Started Now 🚀
                    </motion.button>
                  </motion.div>
                </motion.div>
              )
            }
            
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default About