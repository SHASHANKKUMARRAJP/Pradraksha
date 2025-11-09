import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Mic, 
  MicOff, 
  Brain, 
  MessageCircle, 
  Bot, 
  User, 
  Sparkles,
  BookOpen,
  Trophy,
  Target,
  TrendingUp,
  Lightbulb,
  Clock,
  Zap,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Settings,
  Volume2,
  VolumeX,
  Pause,
  Play,
  Download,
  Share2,
  Star,
  Heart,
  Smile,
  Frown,
  Meh,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Bookmark,
  Flag,
  MoreHorizontal,
  Copy,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  MessageSquare,
  Phone,
  Video,
  Camera,
  Image,
  FileText,
  Link,
  Calendar,
  MapPin,
  Users,
  Award,
  Activity,
  BarChart3,
  PieChart,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus,
  X,
  Check,
  Loader2,
  Calculator
} from 'lucide-react'

const AIMentor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI mentor. I'm here to help you with your studies and sports journey. How can I assist you today?",
      timestamp: new Date(),
      suggestions: [
        "Help me with math problems",
        "Create a study schedule",
        "Track my sports progress",
        "Give me career advice"
      ]
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isListening, setIsListening] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [expandedMessage, setExpandedMessage] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const categories = [
    { id: 'all', label: 'All', icon: MessageCircle },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'sports', label: 'Sports', icon: Trophy },
    { id: 'career', label: 'Career', icon: Target },
    { id: 'motivation', label: 'Motivation', icon: TrendingUp }
  ]

  const quickActions = [
    {
      title: "Study Plan",
      description: "Create personalized study schedule",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      action: "Create a study plan for me"
    },
    {
      title: "Math Help",
      description: "Get help with math problems",
      icon: Calculator,
      color: "from-purple-500 to-pink-500",
      action: "Help me solve math problems"
    },
    {
      title: "Sports Training",
      description: "Sports training recommendations",
      icon: Trophy,
      color: "from-green-500 to-emerald-500",
      action: "Give me sports training tips"
    },
    {
      title: "Career Guidance",
      description: "Explore career options",
      icon: Target,
      color: "from-orange-500 to-red-500",
      action: "Help me with career guidance"
    },
    {
      title: "Motivation",
      description: "Get motivated and inspired",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      action: "Motivate me to study better"
    },
    {
      title: "Progress Review",
      description: "Review your learning progress",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      action: "Review my progress"
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateAIResponse(message),
        timestamp: new Date(),
        suggestions: generateSuggestions(message)
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (message) => {
    const responses = {
      math: "I'd be happy to help you with math! What specific topic are you struggling with? Whether it's algebra, geometry, calculus, or any other area, I can break it down step by step.",
      study: "Great! Let's create an effective study plan. First, tell me about your current subjects, available study time, and any upcoming exams or deadlines you have.",
      sports: "Excellent! I can help you improve your sports performance. What sport are you interested in, and what specific aspect would you like to work on - technique, fitness, or strategy?",
      career: "Career guidance is one of my specialties! To give you the best advice, I'd like to know about your interests, strengths, and what subjects you enjoy most.",
      motivation: "You've got this! Remember, every expert was once a beginner. The key to success is consistency and believing in yourself. What specific area do you want to focus on improving?",
      default: "That's a great question! I'm here to help you succeed in both your academic and sports journey. Could you provide a bit more detail so I can give you the most helpful response?"
    }

    const messageLower = message.toLowerCase()
    if (messageLower.includes('math') || messageLower.includes('calculate')) return responses.math
    if (messageLower.includes('study') || messageLower.includes('plan')) return responses.study
    if (messageLower.includes('sport') || messageLower.includes('training')) return responses.sports
    if (messageLower.includes('career') || messageLower.includes('future')) return responses.career
    if (messageLower.includes('motivat') || messageLower.includes('inspire')) return responses.motivation
    return responses.default
  }

  const generateSuggestions = (message) => {
    const messageLower = message.toLowerCase()
    if (messageLower.includes('math')) {
      return ["Solve algebra problems", "Help with geometry", "Explain calculus concepts", "Practice problems"]
    }
    if (messageLower.includes('study')) {
      return ["Create daily schedule", "Set study goals", "Time management tips", "Memory techniques"]
    }
    if (messageLower.includes('sport')) {
      return ["Training schedule", "Nutrition advice", "Technique improvement", "Mental preparation"]
    }
    return ["Ask another question", "Get study tips", "Career guidance", "Motivation boost"]
  }

  const handleQuickAction = (action) => {
    handleSendMessage(action.action)
  }

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real app, this would integrate with Web Speech API
  }

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled)
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getMessageIcon = (message) => {
    if (message.type === 'ai') {
      return <Bot className="w-5 h-5" />
    }
    return <User className="w-5 h-5" />
  }

  const getMessageColor = (message) => {
    if (message.type === 'ai') {
      return 'from-blue-500 to-purple-500'
    }
    return 'from-gray-600 to-gray-700'
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
                AI <span className="gradient-text">Mentor</span>
              </h1>
              <p className="text-gray-300 text-lg">Your personal AI assistant for education and sports</p>
            </div>
            
            {/* Voice Controls */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleVoice}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  voiceEnabled 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}
              >
                {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
              >
                <Settings className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Categories */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickAction(action)}
                      className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm">{action.title}</h4>
                          <p className="text-gray-400 text-xs">{action.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Chat Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-effect rounded-2xl h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI Mentor</h3>
                    <p className="text-gray-400 text-sm">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'ai' 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                            : 'bg-gradient-to-r from-gray-600 to-gray-700'
                        }`}>
                          {getMessageIcon(message)}
                        </div>
                        
                        <div className={`rounded-2xl p-4 ${
                          message.type === 'ai' 
                            ? 'bg-white/10 border border-white/20' 
                            : 'bg-gradient-to-r from-blue-500 to-purple-500'
                        }`}>
                          <p className={`${message.type === 'ai' ? 'text-white' : 'text-white'}`}>
                            {message.content}
                          </p>
                          <div className={`flex items-center justify-between mt-2 text-xs ${
                            message.type === 'ai' ? 'text-gray-400' : 'text-blue-100'
                          }`}>
                            <span>{formatTime(message.timestamp)}</span>
                            {message.type === 'ai' && (
                              <div className="flex items-center space-x-1">
                                <button className="hover:text-white transition-colors">
                                  <ThumbsUp className="w-3 h-3" />
                                </button>
                                <button className="hover:text-white transition-colors">
                                  <ThumbsDown className="w-3 h-3" />
                                </button>
                                <button className="hover:text-white transition-colors">
                                  <Copy className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                          
                          {/* Suggestions */}
                          {message.suggestions && message.type === 'ai' && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {message.suggestions.map((suggestion, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs text-white transition-colors duration-300"
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-white text-sm">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask me anything about your studies or sports..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleRecording}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isRecording 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSendMessage()}
                    disabled={!inputMessage.trim()}
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AIMentor
