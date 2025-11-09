import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Facebook,
  ArrowRight,
  Heart,
  Sparkles
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  const socialLinks = [
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-700' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Sports Zone', href: '/sports' },
    { name: 'Education Hub', href: '/education' },
    { name: 'AI Mentor', href: '/ai-mentor' },
    { name: 'About', href: '/about' }
  ]

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Support', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'FAQ', href: '#' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-navy-deep via-navy-800 to-navy-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #5BC0BE 2px, transparent 0),
                           radial-gradient(circle at 75% 75%, #FDC830 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-500 to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-aqua-500 to-gold-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Pradraksha</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Empowering students from Class 6 to Degree level with AI-driven education and sports excellence.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, color }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 pradraksha-glass rounded-lg flex items-center justify-center text-gray-400 transition-colors duration-300 ${color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-aqua-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Support Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-white mb-6">Support</h4>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-aqua-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest updates on education and sports features
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 pradraksha-glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Subscribe</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"
              >
                <span>© 2024 Pradraksha. Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>for students worldwide.</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-sm text-gray-400"
              >
                <a href="#" className="hover:text-aqua-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-aqua-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-aqua-400 transition-colors duration-300">Cookie Policy</a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
