# 🎓 Pradraksha - AI Education & Sports Platform

A stunning, animated, and interactive web platform that combines AI-powered education with comprehensive sports guidance for students from Class 6 to Degree level.

## ✨ Features

### 🏠 **Homepage**
- Animated hero section with 3D student avatar
- Floating icons with smooth animations
- Parallax scroll effects
- Interactive call-to-action buttons
- Responsive design with glassmorphism effects

### 📊 **Student Dashboard**
- AI-driven progress tracking
- Animated charts and progress bars
- Level system with XP tracking
- Subject-wise performance analytics
- Sports achievement tracking
- Recent activity timeline
- Upcoming events calendar

### 🏆 **Sports Zone**
- Interactive sports performance tracking
- Tournament and event listings
- Achievement system with rarity levels
- Training center locator
- Sports-specific analytics
- Real-time match tracking

### 📚 **Education Hub**
- Subject-wise learning paths
- Interactive topic trees
- AI-powered recommendations
- Study plan generator
- Progress analytics
- Achievement system

### 🤖 **AI Mentor**
- Intelligent chatbot interface
- Voice interaction capabilities
- Context-aware responses
- Quick action buttons
- Conversation history
- Real-time typing indicators

### ℹ️ **About Page**
- Mission and vision statements
- Team member profiles
- Company timeline
- Contact form
- Social media integration

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **3D Effects**: Three.js + React Three Fiber
- **State Management**: React Context API
- **Notifications**: React Hot Toast

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pradraksha-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   └── ParticleBackground.jsx
├── pages/              # Main application pages
│   ├── HomePage.jsx
│   ├── Dashboard.jsx
│   ├── SportsZone.jsx
│   ├── EducationHub.jsx
│   ├── AIMentor.jsx
│   └── About.jsx
├── context/            # React Context providers
│   └── ThemeContext.jsx
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design Features

### Visual Elements
- **Glassmorphism**: Modern glass-like UI elements
- **Gradient Backgrounds**: Dynamic color transitions
- **Particle Effects**: Interactive background animations
- **Smooth Transitions**: Framer Motion powered animations
- **Responsive Design**: Mobile-first approach

### Animation Types
- **Page Transitions**: Smooth route changes
- **Hover Effects**: Interactive element responses
- **Scroll Animations**: Elements animate on scroll
- **Loading States**: Engaging loading screens
- **Micro-interactions**: Subtle user feedback

## 🎯 Key Components

### Navigation
- Responsive navbar with mobile menu
- Active route highlighting
- Theme toggle functionality
- Smooth scroll behavior

### Dashboard Analytics
- Real-time progress tracking
- Interactive charts and graphs
- Achievement system
- Performance metrics

### AI Integration
- Context-aware responses
- Voice interaction support
- Quick action suggestions
- Conversation management

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🌙 Theme Support

- **Dark Mode**: Default theme with dark backgrounds
- **Light Mode**: Alternative light theme
- **Auto-switching**: Respects system preferences
- **Smooth transitions**: Animated theme changes

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Animations
Modify animation timings in `src/index.css`:

```css
.animation-duration {
  animation-duration: 0.5s; /* Adjust timing */
}
```

## 📈 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized asset loading
- **Bundle Analysis**: Built-in bundle analyzer

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact us at support@pradraksha.com

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **React Community** for excellent documentation

## 🔮 Future Enhancements

- [ ] Real-time collaboration features
- [ ] Advanced AI tutoring capabilities
- [ ] Mobile app development
- [ ] Virtual reality integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Offline mode support
- [ ] Advanced accessibility features

---

**Made with ❤️ for the future of education and sports**

*Empowering students to excel in both academics and athletics through AI-driven innovation.*
