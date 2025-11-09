import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Target, 
  TrendingUp, 
  Star,
  Clock,
  Play,
  Filter,
  Search,
  Medal,
  Zap,
  ChevronRight,
  Activity,
  BarChart3,
  Camera,
  Share2,
  Heart
} from 'lucide-react'

const SportsZone = () => {
  const [selectedSport, setSelectedSport] = useState('all')
  const [selectedFilter, setSelectedFilter] = useState('upcoming')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - in real app, this would come from API
  const sportsData = {
    userStats: {
      totalMatches: 45,
      wins: 32,
      tournaments: 8,
      achievements: 15,
      currentStreak: 5,
      level: 12,
      xp: 3450,
      nextLevel: 4000
    },
    sports: [
      { id: 'cricket', name: 'Cricket', icon: '🏏', color: 'from-yellow-500 to-orange-500', level: 'Advanced', matches: 24, wins: 18 },
      { id: 'football', name: 'Football', icon: '⚽', color: 'from-green-500 to-teal-500', level: 'Intermediate', matches: 12, wins: 8 },
      { id: 'basketball', name: 'Basketball', icon: '🏀', color: 'from-red-500 to-pink-500', level: 'Beginner', matches: 8, wins: 5 },
      { id: 'badminton', name: 'Badminton', icon: '🏸', color: 'from-blue-500 to-purple-500', level: 'Intermediate', matches: 6, wins: 4 },
      { id: 'tennis', name: 'Tennis', icon: '🎾', color: 'from-emerald-500 to-green-500', level: 'Beginner', matches: 4, wins: 2 }
    ],
    tournaments: [
      {
        id: 1,
        title: "Inter-School Cricket Championship",
        sport: "Cricket",
        date: "2024-02-15",
        location: "Sports Complex, Mumbai",
        participants: 16,
        prize: "₹50,000",
        status: "upcoming",
        level: "Advanced",
        image: "/api/placeholder/400/200"
      },
      {
        id: 2,
        title: "Youth Football League",
        sport: "Football",
        date: "2024-02-20",
        location: "Football Ground, Delhi",
        participants: 24,
        prize: "₹30,000",
        status: "upcoming",
        level: "Intermediate",
        image: "/api/placeholder/400/200"
      },
      {
        id: 3,
        title: "Basketball Summer Cup",
        sport: "Basketball",
        date: "2024-03-01",
        location: "Basketball Court, Bangalore",
        participants: 12,
        prize: "₹20,000",
        status: "upcoming",
        level: "Beginner",
        image: "/api/placeholder/400/200"
      },
      {
        id: 4,
        title: "Badminton Championship",
        sport: "Badminton",
        date: "2024-01-28",
        location: "Sports Hall, Chennai",
        participants: 20,
        prize: "₹25,000",
        status: "completed",
        level: "Intermediate",
        result: "2nd Place",
        image: "/api/placeholder/400/200"
      }
    ],
    achievements: [
      { title: "Cricket Champion", description: "Won inter-school cricket tournament", icon: Trophy, date: "2024-01-15", sport: "Cricket", rarity: "legendary" },
      { title: "Football MVP", description: "Best player in youth league", icon: Star, date: "2024-01-10", sport: "Football", rarity: "epic" },
      { title: "Perfect Attendance", description: "Attended all training sessions", icon: Target, date: "2024-01-05", sport: "All", rarity: "rare" },
      { title: "First Victory", description: "Won your first basketball match", icon: Award, date: "2023-12-20", sport: "Basketball", rarity: "common" }
    ],
    trainingCenters: [
      {
        name: "Elite Sports Academy",
        location: "Mumbai, Maharashtra",
        sports: ["Cricket", "Football", "Tennis"],
        rating: 4.8,
        distance: "2.5 km",
        price: "₹3000/month",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Champions Training Center",
        location: "Delhi, NCR",
        sports: ["Basketball", "Badminton", "Swimming"],
        rating: 4.6,
        distance: "5.2 km",
        price: "₹2500/month",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Pro Sports Hub",
        location: "Bangalore, Karnataka",
        sports: ["Football", "Cricket", "Volleyball"],
        rating: 4.9,
        distance: "3.8 km",
        price: "₹4000/month",
        image: "/api/placeholder/300/200"
      }
    ]
  }

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-500 to-orange-500'
      case 'epic': return 'from-purple-500 to-pink-500'
      case 'rare': return 'from-blue-500 to-cyan-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const filteredTournaments = sportsData.tournaments.filter(tournament => {
    const matchesSport = selectedSport === 'all' || tournament.sport.toLowerCase() === selectedSport
    const matchesFilter = selectedFilter === 'all' || tournament.status === selectedFilter
    const matchesSearch = tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tournament.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSport && matchesFilter && matchesSearch
  })

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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Sports <span className="gradient-text">Zone</span>
          </h1>
          <p className="text-gray-300 text-lg">Track your sports journey and discover opportunities</p>
        </motion.div>

        {/* User Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">{sportsData.userStats.totalMatches}</span>
            </div>
            <p className="text-gray-300 font-medium">Total Matches</p>
            <p className="text-sm text-gray-400">across all sports</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">{sportsData.userStats.wins}</span>
            </div>
            <p className="text-gray-300 font-medium">Wins</p>
            <p className="text-sm text-gray-400">{Math.round((sportsData.userStats.wins / sportsData.userStats.totalMatches) * 100)}% win rate</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Medal className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">{sportsData.userStats.tournaments}</span>
            </div>
            <p className="text-gray-300 font-medium">Tournaments</p>
            <p className="text-sm text-gray-400">participated</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">{sportsData.userStats.achievements}</span>
            </div>
            <p className="text-gray-300 font-medium">Achievements</p>
            <p className="text-sm text-gray-400">unlocked</p>
          </div>
        </motion.div>

        {/* Sports Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Your Sports Performance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {sportsData.sports.map((sport, index) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 card-hover cursor-pointer"
                onClick={() => setSelectedSport(selectedSport === sport.id ? 'all' : sport.id)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{sport.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{sport.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${sport.color} text-white`}>
                    {sport.level}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Matches</span>
                      <span className="text-white">{sport.matches}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Wins</span>
                      <span className="text-white">{sport.wins}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Win Rate</span>
                      <span className="text-white">{Math.round((sport.wins / sport.matches) * 100)}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tournaments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <h2 className="text-2xl font-bold text-white">Tournaments & Events</h2>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tournaments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <select
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Sports</option>
                {sportsData.sports.map(sport => (
                  <option key={sport.id} value={sport.id}>{sport.name}</option>
                ))}
              </select>
              
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Events</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {sportsData.sports.find(s => s.name === tournament.sport)?.icon || '🏆'}
                    </div>
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      tournament.status === 'upcoming' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {tournament.status}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{tournament.title}</h3>
                      <span className="text-2xl">
                        {sportsData.sports.find(s => s.name === tournament.sport)?.icon || '🏆'}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{new Date(tournament.date).toLocaleDateString()}</span>
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
                        <Trophy className="w-4 h-4 mr-2" />
                        <span className="text-sm">Prize: {tournament.prize}</span>
                      </div>
                    </div>
                    
                    {tournament.result && (
                      <div className="mb-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                        <div className="flex items-center text-yellow-400">
                          <Medal className="w-4 h-4 mr-2" />
                          <span className="font-medium">{tournament.result}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                        tournament.level === 'Advanced' ? 'from-red-500 to-pink-500' :
                        tournament.level === 'Intermediate' ? 'from-yellow-500 to-orange-500' :
                        'from-green-500 to-teal-500'
                      } text-white`}>
                        {tournament.level}
                      </div>
                      <button className="btn-primary text-sm px-4 py-2">
                        {tournament.status === 'upcoming' ? 'Register' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Sports Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsData.achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="glass-effect rounded-2xl p-6 card-hover"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getRarityColor(achievement.rarity)} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                      <span>{achievement.sport}</span>
                      <span>•</span>
                      <span>{new Date(achievement.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Training Centers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Nearby Training Centers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsData.trainingCenters.map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl overflow-hidden card-hover"
              >
                <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-4xl opacity-50">🏟️</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{center.name}</h3>
                  <div className="flex items-center text-gray-300 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{center.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {center.sports.map((sport, sportIndex) => (
                      <span key={sportIndex} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        {sport}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-medium">{center.rating}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{center.distance}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{center.price}</span>
                    <button className="btn-primary text-sm px-4 py-2">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SportsZone
