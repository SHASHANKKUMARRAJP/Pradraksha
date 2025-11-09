import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  BookOpen, 
  Trophy, 
  Target,
  TrendingUp,
  Heart,
  Zap,
  X,
  MessageCircle,
  Settings
} from 'lucide-react'

const AIMentorChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "👋 Hello! I'm Pradra, your AI Mentor! I'm here to help you excel in studies 📘 and sports 🏆. Ask me anything - I'm powered by advanced AI to give you personalized guidance!",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [apiKey, setApiKey] = useState(localStorage.getItem('openai_api_key') || '')
  const [showSettings, setShowSettings] = useState(false)
  const [useOpenAI, setUseOpenAI] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const aiResponses = {
    motivation: [
      "🌟 You're doing amazing! Every small step counts. Keep pushing forward! 💪",
      "✨ Remember, champions are made in practice! Stay consistent and believe in yourself! 🏆",
      "🚀 Your potential is limitless! Keep learning, keep growing! 📚",
      "💫 Success is a journey, not a destination. Enjoy every moment of learning! 🎯"
    ],
    study: [
      "📚 Here are some study tips: Break your sessions into 25-min chunks (Pomodoro), take notes by hand, and teach concepts to others! 🧠",
      "✏️ Try active recall! Test yourself frequently instead of just re-reading. It's scientifically proven to boost retention! 💡",
      "🎯 Create a study schedule and stick to it. Consistency beats cramming every time! ⏰",
      "📖 Use the Feynman Technique: Explain concepts in simple terms. If you can't, you need to study more! 🤓"
    ],
    sports: [
      "⚽ Sports tip: Warm up properly before every session! 5-10 minutes can prevent injuries and improve performance! 🏃",
      "🏆 Remember: Practice doesn't make perfect. Perfect practice makes perfect! Focus on technique! 💪",
      "🎾 Stay hydrated! Drink water before, during, and after training. Your body is 60% water! 💧",
      "🏅 Set SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound. Track your progress! 📊"
    ],
    tournament: [
      "🏆 Tournament prep: Get 8 hours of sleep, eat a balanced meal 2-3 hours before, and visualize success! 🌟",
      "🎯 Stay calm under pressure! Deep breathing helps: 4 seconds in, hold 4, out 4. You've got this! 💪",
      "⚡ Focus on your game, not the opponent. Control what you can control! 🧘",
      "🏅 Win or learn, never lose! Every tournament is a growth opportunity! 📈"
    ],
    greeting: [
      "👋 Hey there, champion! Ready to conquer your goals today? Let's do this! 🚀",
      "🌟 Hello! I'm excited to help you on your journey to excellence! What's on your mind? 💫",
      "✨ Hi! Whether it's academics or athletics, I'm here to guide you! How can I help? 🎯"
    ],
    default: [
      "🤔 That's interesting! Could you tell me more? I'm here to help with studies 📚 or sports 🏆!",
      "💡 I'm here to assist with academics and athletics! Try asking about study tips, sports training, or motivation! 🌟",
      "✨ Great question! I can help with learning strategies, sports performance, tournament prep, or just motivate you! 💪"
    ]
  }

  // OpenAI API Integration
  const getOpenAIResponse = async (userMessage) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are Pradra, an AI Mentor for Pradraksha - an education and sports platform for students from Class 6 to Degree level. 
              Your role is to help students with:
              - Academic guidance (study tips, exam prep, learning strategies)
              - Sports training advice (fitness, performance, tournament prep)
              - Motivation and encouragement
              - Career guidance
              - Time management and productivity
              
              Respond in a friendly, encouraging tone. Use emojis naturally to make responses engaging and relatable. 
              Keep responses concise (2-4 sentences) but helpful. Be supportive, motivational, and student-friendly.
              If asked about Pradraksha, explain it's an AI-powered platform combining education and sports excellence.`
            },
            ...messages.slice(1).map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.8,
          max_tokens: 200
        })
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error('OpenAI API Error:', error)
      return "🤔 I'm having trouble connecting right now. Let me give you a quick tip instead! " + getFallbackResponse(userMessage)
    }
  }

  const getFallbackResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('motivat') || message.includes('inspire') || message.includes('encourage')) {
      return aiResponses.motivation[Math.floor(Math.random() * aiResponses.motivation.length)]
    } else if (message.includes('study') || message.includes('learn') || message.includes('exam') || message.includes('homework')) {
      return aiResponses.study[Math.floor(Math.random() * aiResponses.study.length)]
    } else if (message.includes('sport') || message.includes('train') || message.includes('practice') || message.includes('fitness')) {
      return aiResponses.sports[Math.floor(Math.random() * aiResponses.sports.length)]
    } else if (message.includes('tournament') || message.includes('competition') || message.includes('match') || message.includes('game')) {
      return aiResponses.tournament[Math.floor(Math.random() * aiResponses.tournament.length)]
    } else if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)]
    } else {
      return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)]
    }
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    }

    const currentInput = inputValue
    setMessages([...messages, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay for more natural feel
    await new Promise(resolve => setTimeout(resolve, 800))

    try {
      let responseText
      if (useOpenAI && apiKey) {
        responseText = await getOpenAIResponse(currentInput)
      } else {
        responseText = getFallbackResponse(currentInput)
      }

      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: responseText,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      const errorResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "😅 Oops! Something went wrong. Let me try again! " + getFallbackResponse(currentInput),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const saveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey)
    setShowSettings(false)
    setUseOpenAI(true)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickActions = [
    { icon: BookOpen, label: 'Study Tips', message: 'Give me some study tips' },
    { icon: Trophy, label: 'Sports Training', message: 'Help me with sports training' },
    { icon: Target, label: 'Motivation', message: 'I need some motivation' },
    { icon: TrendingUp, label: 'Tournament Prep', message: 'How to prepare for a tournament?' }
  ]

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full shadow-2xl flex items-center justify-center group"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-8 right-8 z-50 w-[400px] h-[600px] max-w-[90vw] max-h-[80vh] flex flex-col"
          >
            {/* Floating Particles Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full opacity-20"
                  animate={{
                    x: [Math.random() * 400, Math.random() * 400],
                    y: [Math.random() * 600, Math.random() * 600],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%'
                  }}
                />
              ))}
            </div>

            {/* Chat Container */}
            <div className="relative glass-effect rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary via-primary-light to-primary-dark p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/20 to-accent-500/20"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center"
                    >
                      <Bot className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-bold text-lg flex items-center">
                        🤖 Pradra AI Mentor
                        <Sparkles className="w-4 h-4 ml-2 text-accent-400" />
                        {useOpenAI && <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-300 text-xs rounded-full">AI Powered</span>}
                      </h3>
                      <p className="text-gray-300 text-xs">Your Smart Study & Sports Guide 🌟</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowSettings(!showSettings)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      title="Settings"
                    >
                      <Settings className="w-5 h-5 text-white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-primary-dark/90 border-b border-white/10 overflow-hidden"
                  >
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-semibold text-sm">🔑 OpenAI API Settings</h4>
                        <span className="text-xs text-gray-400">Optional</span>
                      </div>
                      <p className="text-xs text-gray-300">
                        Add your OpenAI API key to enable advanced AI responses. Without it, I'll use smart fallback responses! 🤖
                      </p>
                      <div className="space-y-2">
                        <input
                          type="password"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="sk-..."
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                        />
                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={saveApiKey}
                            disabled={!apiKey}
                            className="flex-1 px-3 py-2 bg-gradient-to-r from-secondary-500 to-accent-500 text-white text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Save & Enable AI
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setApiKey('')
                              setUseOpenAI(false)
                              localStorage.removeItem('openai_api_key')
                            }}
                            className="px-3 py-2 bg-white/10 text-white text-sm font-medium rounded-lg"
                          >
                            Clear
                          </motion.button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">
                        Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:underline">OpenAI Platform</a>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-primary-dark/50 to-primary/50">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'bot' 
                          ? 'bg-gradient-to-r from-secondary-500 to-accent-500' 
                          : 'bg-gradient-to-r from-accent-500 to-accent-400'
                      }`}>
                        {message.type === 'bot' ? (
                          <Bot className="w-5 h-5 text-white" />
                        ) : (
                          <User className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`px-4 py-3 rounded-2xl ${
                          message.type === 'bot'
                            ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                            : 'bg-gradient-to-r from-accent-500 to-accent-400 text-primary-950'
                        } shadow-lg`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end space-x-2"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                      <div className="flex space-x-2">
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-secondary-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-secondary-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-secondary-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 bg-primary-dark/50 border-t border-white/10"
                >
                  <p className="text-xs text-gray-400 mb-2">Quick Actions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon
                      return (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setInputValue(action.message)
                            inputRef.current?.focus()
                          }}
                          className="flex items-center space-x-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                        >
                          <Icon className="w-4 h-4 text-secondary-400" />
                          <span className="text-xs text-white">{action.label}</span>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* Input Area */}
              <div className="p-4 bg-primary-dark/80 backdrop-blur-md border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message…"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIMentorChat
