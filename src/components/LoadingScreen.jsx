import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Trophy, Brain, Zap } from 'lucide-react'

const LoadingScreen = () => {
  const icons = [BookOpen, Trophy, Brain, Zap]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Main Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-12 h-12 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl font-bold text-white mb-2 font-display"
        >
          Pradraksha
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg text-gray-300 mb-8"
        >
          AI Education & Sports Platform
        </motion.p>

        {/* Floating Icons */}
        <div className="relative w-64 h-32 mx-auto mb-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0],
                x: [0, (index - 1.5) * 60],
                y: [0, -20, 0]
              }}
              transition={{ 
                delay: 1 + index * 0.2, 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-64 mx-auto"
        >
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-sm text-gray-400 mt-2"
          >
            Empowering your learning journey...
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen
