import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  TestTube, 
  Globe, 
  FileText, 
  Paintbrush,
  Music,
  Code,
  Microscope,
  Map,
  Clock,
  Target,
  TrendingUp,
  Award,
  Star,
  Play,
  Download,
  Share2,
  Bookmark,
  Filter,
  Search,
  ChevronRight,
  Brain,
  Zap,
  Users,
  Calendar,
  BarChart3,
  Trophy,
  CheckCircle,
  Circle,
  Lock
} from 'lucide-react'

const EducationHub = () => {
  const [selectedGrade, setSelectedGrade] = useState('12')
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('subjects')

  // Mock data - in real app, this would come from API
  const educationData = {
    grades: [
      { id: '6', name: 'Class 6', subjects: 6, completed: 4 },
      { id: '7', name: 'Class 7', subjects: 6, completed: 3 },
      { id: '8', name: 'Class 8', subjects: 6, completed: 2 },
      { id: '9', name: 'Class 9', subjects: 6, completed: 5 },
      { id: '10', name: 'Class 10', subjects: 6, completed: 4 },
      { id: '11', name: 'Class 11', subjects: 6, completed: 3 },
      { id: '12', name: 'Class 12', subjects: 6, completed: 2 },
      { id: 'degree', name: 'Degree', subjects: 8, completed: 1 }
    ],
    subjects: [
      {
        id: 'mathematics',
        name: 'Mathematics',
        icon: Calculator,
        color: 'from-blue-500 to-cyan-500',
        progress: 85,
        level: 'Advanced',
        chapters: 12,
        completed: 10,
        nextTopic: 'Calculus',
        difficulty: 'Hard',
        timeEstimate: '45 min',
        lastStudied: '2 hours ago',
        streak: 7,
        xp: 2450,
        topics: [
          { name: 'Algebra', progress: 100, completed: true, locked: false },
          { name: 'Geometry', progress: 95, completed: true, locked: false },
          { name: 'Trigonometry', progress: 88, completed: true, locked: false },
          { name: 'Calculus', progress: 65, completed: false, locked: false },
          { name: 'Statistics', progress: 45, completed: false, locked: false },
          { name: 'Probability', progress: 0, completed: false, locked: true }
        ]
      },
      {
        id: 'physics',
        name: 'Physics',
        icon: Atom,
        color: 'from-purple-500 to-pink-500',
        progress: 72,
        level: 'Intermediate',
        chapters: 15,
        completed: 11,
        nextTopic: 'Quantum Mechanics',
        difficulty: 'Hard',
        timeEstimate: '60 min',
        lastStudied: '1 day ago',
        streak: 5,
        xp: 1890,
        topics: [
          { name: 'Mechanics', progress: 100, completed: true, locked: false },
          { name: 'Thermodynamics', progress: 90, completed: true, locked: false },
          { name: 'Electromagnetism', progress: 75, completed: false, locked: false },
          { name: 'Optics', progress: 60, completed: false, locked: false },
          { name: 'Quantum Mechanics', progress: 30, completed: false, locked: false },
          { name: 'Relativity', progress: 0, completed: false, locked: true }
        ]
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        icon: TestTube,
        color: 'from-green-500 to-emerald-500',
        progress: 68,
        level: 'Intermediate',
        chapters: 14,
        completed: 9,
        nextTopic: 'Organic Chemistry',
        difficulty: 'Medium',
        timeEstimate: '50 min',
        lastStudied: '3 hours ago',
        streak: 3,
        xp: 1650,
        topics: [
          { name: 'Atomic Structure', progress: 100, completed: true, locked: false },
          { name: 'Chemical Bonding', progress: 95, completed: true, locked: false },
          { name: 'Periodic Table', progress: 85, completed: true, locked: false },
          { name: 'Organic Chemistry', progress: 55, completed: false, locked: false },
          { name: 'Physical Chemistry', progress: 40, completed: false, locked: false },
          { name: 'Inorganic Chemistry', progress: 0, completed: false, locked: true }
        ]
      },
      {
        id: 'biology',
        name: 'Biology',
        icon: Microscope,
        color: 'from-teal-500 to-blue-500',
        progress: 78,
        level: 'Advanced',
        chapters: 16,
        completed: 12,
        nextTopic: 'Genetics',
        difficulty: 'Medium',
        timeEstimate: '40 min',
        lastStudied: '1 hour ago',
        streak: 9,
        xp: 2100,
        topics: [
          { name: 'Cell Biology', progress: 100, completed: true, locked: false },
          { name: 'Human Anatomy', progress: 95, completed: true, locked: false },
          { name: 'Plant Biology', progress: 85, completed: true, locked: false },
          { name: 'Genetics', progress: 70, completed: false, locked: false },
          { name: 'Evolution', progress: 45, completed: false, locked: false },
          { name: 'Ecology', progress: 0, completed: false, locked: true }
        ]
      },
      {
        id: 'english',
        name: 'English',
        icon: FileText,
        color: 'from-orange-500 to-red-500',
        progress: 91,
        level: 'Advanced',
        chapters: 10,
        completed: 9,
        nextTopic: 'Creative Writing',
        difficulty: 'Easy',
        timeEstimate: '30 min',
        lastStudied: '30 min ago',
        streak: 12,
        xp: 2750,
        topics: [
          { name: 'Grammar', progress: 100, completed: true, locked: false },
          { name: 'Literature', progress: 95, completed: true, locked: false },
          { name: 'Comprehension', progress: 90, completed: true, locked: false },
          { name: 'Creative Writing', progress: 80, completed: false, locked: false },
          { name: 'Vocabulary', progress: 85, completed: true, locked: false },
          { name: 'Speaking Skills', progress: 0, completed: false, locked: true }
        ]
      },
      {
        id: 'history',
        name: 'History',
        icon: Globe,
        color: 'from-indigo-500 to-purple-500',
        progress: 65,
        level: 'Beginner',
        chapters: 12,
        completed: 8,
        nextTopic: 'World War II',
        difficulty: 'Medium',
        timeEstimate: '35 min',
        lastStudied: '2 days ago',
        streak: 2,
        xp: 1200,
        topics: [
          { name: 'Ancient History', progress: 100, completed: true, locked: false },
          { name: 'Medieval History', progress: 90, completed: true, locked: false },
          { name: 'Modern History', progress: 70, completed: false, locked: false },
          { name: 'World War II', progress: 45, completed: false, locked: false },
          { name: 'Indian Independence', progress: 30, completed: false, locked: false },
          { name: 'Contemporary History', progress: 0, completed: false, locked: true }
        ]
      }
    ],
    recommendations: [
      {
        type: 'study_plan',
        title: 'Daily Study Plan',
        description: 'Complete 3 chapters in Mathematics and 2 in Physics',
        priority: 'high',
        estimatedTime: '2 hours'
      },
      {
        type: 'weakness',
        title: 'Focus on Chemistry',
        description: 'Your chemistry progress is below average. Spend extra time on organic chemistry',
        priority: 'medium',
        estimatedTime: '1 hour'
      },
      {
        type: 'strength',
        title: 'English Excellence',
        description: 'You\'re doing great in English! Consider helping classmates',
        priority: 'low',
        estimatedTime: '30 min'
      }
    ],
    achievements: [
      { title: 'Math Master', description: 'Completed 50 math problems', icon: Calculator, date: '2 days ago', rarity: 'epic' },
      { title: 'Physics Explorer', description: 'Mastered mechanics chapter', icon: Atom, date: '1 week ago', rarity: 'rare' },
      { title: 'Study Streak', description: '7 days in a row', icon: Target, date: '3 days ago', rarity: 'common' },
      { title: 'Perfect Score', description: 'Got 100% in biology test', icon: Microscope, date: '5 days ago', rarity: 'legendary' }
    ]
  }

  const tabs = [
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'recommendations', label: 'AI Recommendations', icon: Brain },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'progress', label: 'Progress', icon: BarChart3 }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-500 to-emerald-500'
      case 'Medium': return 'from-yellow-500 to-orange-500'
      case 'Hard': return 'from-red-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'from-red-500 to-pink-500'
      case 'medium': return 'from-yellow-500 to-orange-500'
      case 'low': return 'from-green-500 to-emerald-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-500 to-orange-500'
      case 'epic': return 'from-purple-500 to-pink-500'
      case 'rare': return 'from-blue-500 to-cyan-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

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
                Education <span className="gradient-text">Hub</span>
              </h1>
              <p className="text-gray-300 text-lg">Master your subjects with AI-powered learning</p>
            </div>
            
            {/* Grade Selector */}
            <div className="flex flex-wrap gap-2">
              {educationData.grades.map((grade) => (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedGrade === grade.id
                      ? 'bg-white/20 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {grade.name}
                </button>
              ))}
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
          {activeTab === 'subjects' && (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search subjects or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors duration-300 flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>

              {/* Subjects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationData.subjects
                  .filter(subject => 
                    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    subject.nextTopic.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((subject, index) => {
                    const Icon = subject.icon
                    return (
                      <motion.div
                        key={subject.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
                        className="glass-effect rounded-2xl p-6 card-hover cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${subject.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{subject.progress}%</div>
                            <div className="text-sm text-gray-400">Complete</div>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2">{subject.name}</h3>
                        
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-300 mb-2">
                            <span>Progress</span>
                            <span>{subject.chapters - subject.completed} chapters left</span>
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

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">Level</span>
                            <span className="text-white">{subject.level}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">Next Topic</span>
                            <span className="text-white">{subject.nextTopic}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">Streak</span>
                            <span className="text-white">{subject.streak} days</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getDifficultyColor(subject.difficulty)} text-white`}>
                            {subject.difficulty}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                              <Play className="w-4 h-4 text-white" />
                            </button>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {selectedSubject === subject.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-6 pt-6 border-t border-white/10"
                            >
                              <h4 className="text-lg font-semibold text-white mb-4">Topics</h4>
                              <div className="space-y-3">
                                {subject.topics.map((topic, topicIndex) => (
                                  <div key={topicIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                      {topic.completed ? (
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                      ) : topic.locked ? (
                                        <Lock className="w-5 h-5 text-gray-500" />
                                      ) : (
                                        <Circle className="w-5 h-5 text-gray-400" />
                                      )}
                                      <span className={`${topic.completed ? 'text-white' : topic.locked ? 'text-gray-500' : 'text-gray-300'}`}>
                                        {topic.name}
                                      </span>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm text-white">{topic.progress}%</div>
                                      <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                                        <div 
                                          className={`h-full bg-gradient-to-r ${subject.color} rounded-full`}
                                          style={{ width: `${topic.progress}%` }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
              </div>
            </motion.div>
          )}

          {activeTab === 'recommendations' && (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationData.recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-2xl p-6 card-hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getPriorityColor(rec.priority)} rounded-xl flex items-center justify-center`}>
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getPriorityColor(rec.priority)} text-white`}>
                        {rec.priority}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{rec.title}</h3>
                    <p className="text-gray-300 mb-4">{rec.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{rec.estimatedTime}</span>
                      </div>
                      <button className="btn-primary text-sm px-4 py-2">
                        Start
                      </button>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {educationData.achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="glass-effect rounded-2xl p-6 card-hover"
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${getRarityColor(achievement.rarity)} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>
                        <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(achievement.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'progress' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Overall Progress */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Overall Progress</h3>
                  <div className="space-y-4">
                    {educationData.subjects.map((subject, index) => {
                      const Icon = subject.icon
                      return (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${subject.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white">{subject.name}</span>
                              <span className="text-gray-300">{subject.progress}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${subject.progress}%` }}
                                transition={{ duration: 1.5, delay: index * 0.1 }}
                                className={`h-full bg-gradient-to-r ${subject.color} rounded-full`}
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Study Statistics */}
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Study Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-white mb-1">47</div>
                      <div className="text-sm text-gray-400">Total Hours</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-white mb-1">12</div>
                      <div className="text-sm text-gray-400">Day Streak</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-white mb-1">156</div>
                      <div className="text-sm text-gray-400">Topics Done</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-white mb-1">87%</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default EducationHub
