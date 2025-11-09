import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  BookOpen, 
  Trophy, 
  Target, 
  Calendar, 
  Award, 
  Brain, 
  Users,
  Clock,
  Star,
  Zap,
  ChevronRight,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  FileText,
  Download,
  Plus,
  Edit,
  Eye
} from 'lucide-react'

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week')
  const [activeTab, setActiveTab] = useState('overview')
  const [showResumeModal, setShowResumeModal] = useState(false)

  // Mock data - in real app, this would come from API
  const studentData = {
    name: "Alex Johnson",
    class: "12th Grade",
    streak: 15,
    level: 8,
    xp: 2450,
    nextLevel: 3000,
    subjects: [
      { name: "Mathematics", progress: 85, trend: "up", color: "from-blue-500 to-cyan-500" },
      { name: "Physics", progress: 72, trend: "up", color: "from-purple-500 to-pink-500" },
      { name: "Chemistry", progress: 68, trend: "down", color: "from-green-500 to-emerald-500" },
      { name: "English", progress: 91, trend: "up", color: "from-orange-500 to-red-500" },
      { name: "Biology", progress: 78, trend: "stable", color: "from-teal-500 to-blue-500" },
      { name: "History", progress: 65, trend: "up", color: "from-indigo-500 to-purple-500" }
    ],
    sports: [
      { name: "Cricket", level: "Advanced", matches: 24, wins: 18, color: "from-yellow-500 to-orange-500" },
      { name: "Football", level: "Intermediate", matches: 12, wins: 8, color: "from-green-500 to-teal-500" },
      { name: "Basketball", level: "Beginner", matches: 8, wins: 5, color: "from-red-500 to-pink-500" }
    ],
    achievements: [
      { title: "Math Master", description: "Completed 50 math problems", icon: Brain, date: "2 days ago" },
      { title: "Sports Star", description: "Won cricket tournament", icon: Trophy, date: "1 week ago" },
      { title: "Study Streak", description: "7 days in a row", icon: Target, date: "3 days ago" }
    ],
    upcoming: [
      { title: "Physics Test", subject: "Physics", date: "Tomorrow", type: "exam" },
      { title: "Cricket Match", subject: "Sports", date: "Friday", type: "sports" },
      { title: "Math Assignment", subject: "Mathematics", date: "Monday", type: "assignment" }
    ]
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'academics', label: 'Academics', icon: BookOpen },
    { id: 'sports', label: 'Sports', icon: Trophy },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'resume', label: 'Resume', icon: FileText }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                Welcome back, <span className="gradient-text">{studentData.name}</span>!
              </h1>
              <p className="text-gray-300 text-lg">{studentData.class} • Level {studentData.level}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Create Resume Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResumeModal(true)}
                className="bg-gradient-to-r from-accent-500 to-accent-400 text-primary-950 px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>Create Resume</span>
              </motion.button>
              
              {/* Level Progress */}
              <div className="glass-effect rounded-2xl p-6 min-w-[300px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">Level Progress</span>
                  <span className="text-blue-400 font-bold">Level {studentData.level}</span>
                </div>
                <div className="relative">
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(studentData.xp / studentData.nextLevel) * 100}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-300">
                    <span>{studentData.xp} XP</span>
                    <span>{studentData.nextLevel} XP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Quick Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-effect rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white">{studentData.streak}</span>
                  </div>
                  <p className="text-gray-300 font-medium">Study Streak</p>
                  <p className="text-sm text-gray-400">days in a row</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-effect rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white">87%</span>
                  </div>
                  <p className="text-gray-300 font-medium">Overall Progress</p>
                  <p className="text-sm text-gray-400">across all subjects</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-effect rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white">31</span>
                  </div>
                  <p className="text-gray-300 font-medium">Sports Matches</p>
                  <p className="text-sm text-gray-400">total played</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-effect rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-white">12</span>
                  </div>
                  <p className="text-gray-300 font-medium">Achievements</p>
                  <p className="text-sm text-gray-400">unlocked</p>
                </motion.div>
              </div>

              {/* Recent Activity & Upcoming */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Achievements */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    Recent Achievements
                  </h3>
                  <div className="space-y-4">
                    {studentData.achievements.map((achievement, index) => {
                      const Icon = achievement.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{achievement.title}</h4>
                            <p className="text-gray-400 text-sm">{achievement.description}</p>
                          </div>
                          <span className="text-gray-500 text-xs">{achievement.date}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Upcoming Events */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {studentData.upcoming.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            event.type === 'exam' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                            event.type === 'sports' ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                            'bg-gradient-to-r from-blue-500 to-purple-500'
                          }`}>
                            {event.type === 'exam' ? <BookOpen className="w-6 h-6 text-white" /> :
                             event.type === 'sports' ? <Trophy className="w-6 h-6 text-white" /> :
                             <Target className="w-6 h-6 text-white" />}
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{event.title}</h4>
                            <p className="text-gray-400 text-sm">{event.subject}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-300 font-medium">{event.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'academics' && (
            <motion.div
              key="academics"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentData.subjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-2xl p-6 card-hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{subject.name}</h3>
                      <div className={`w-8 h-8 bg-gradient-to-r ${subject.color} rounded-lg flex items-center justify-center`}>
                        <TrendingUp className={`w-4 h-4 text-white ${
                          subject.trend === 'up' ? 'text-green-400' : 
                          subject.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Progress</span>
                        <span>{subject.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${subject.progress}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                          className={`h-full bg-gradient-to-r ${subject.color} rounded-full`}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {subject.trend === 'up' ? '↗ Improving' : 
                         subject.trend === 'down' ? '↘ Needs attention' : 
                         '→ Stable'}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'sports' && (
            <motion.div
              key="sports"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentData.sports.map((sport, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-2xl p-6 card-hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{sport.name}</h3>
                      <div className={`w-8 h-8 bg-gradient-to-r ${sport.color} rounded-lg flex items-center justify-center`}>
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Level</span>
                        <span className="text-white font-medium">{sport.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Matches</span>
                        <span className="text-white font-medium">{sport.matches}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Wins</span>
                        <span className="text-white font-medium">{sport.wins}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Win Rate</span>
                        <span className="text-white font-medium">
                          {Math.round((sport.wins / sport.matches) * 100)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Performance</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentData.achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="glass-effect rounded-2xl p-6 card-hover"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>
                        <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'resume' && (
            <motion.div
              key="resume"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Create Your Professional Resume</h2>
                  <p className="text-gray-300">Build a standout resume with your academic and sports achievements</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowResumeModal(true)}
                    className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Create New</h3>
                    <p className="text-gray-400 text-sm">Start from scratch with templates</p>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Edit className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Edit Existing</h3>
                    <p className="text-gray-400 text-sm">Update your saved resume</p>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Preview</h3>
                    <p className="text-gray-400 text-sm">View your current resume</p>
                  </motion.button>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    Resume Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-white font-medium">Auto-fill from Profile</p>
                        <p className="text-gray-400 text-sm">Your academic and sports data automatically included</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-white font-medium">Professional Templates</p>
                        <p className="text-gray-400 text-sm">Choose from multiple modern designs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-white font-medium">AI Suggestions</p>
                        <p className="text-gray-400 text-sm">Get smart recommendations for content</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-white font-medium">Export Options</p>
                        <p className="text-gray-400 text-sm">Download as PDF or share online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resume Builder Modal */}
        <AnimatePresence>
          {showResumeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowResumeModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-accent-400" />
                    Resume Builder
                  </h2>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Template Selection */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Choose a Template</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {['Modern', 'Classic', 'Creative'].map((template, index) => (
                        <motion.button
                          key={template}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/5 hover:bg-white/10 rounded-xl p-4 text-center transition-all duration-300 border-2 border-transparent hover:border-accent-400"
                        >
                          <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                            <FileText className="w-12 h-12 text-gray-500" />
                          </div>
                          <p className="text-white font-medium">{template}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        defaultValue={studentData.name}
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Education</h3>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-white mb-2">{studentData.class}</p>
                      <p className="text-gray-400 text-sm">Auto-filled from your profile</p>
                    </div>
                  </div>

                  {/* Skills & Achievements */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Skills & Achievements</h3>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-white font-medium mb-2">Academic Subjects</p>
                        <div className="flex flex-wrap gap-2">
                          {studentData.subjects.map((subject, index) => (
                            <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                              {subject.name} ({subject.progress}%)
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-white font-medium mb-2">Sports</p>
                        <div className="flex flex-wrap gap-2">
                          {studentData.sports.map((sport, index) => (
                            <span key={index} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                              {sport.name} - {sport.level}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-accent-500 to-accent-400 text-primary-950 px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Generate & Download PDF</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      <span>Save Draft</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Dashboard
