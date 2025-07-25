import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, X, Moon, Sun, Star, Sparkles } from 'lucide-react';

const GalaxyPortfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDark, setIsDark] = useState(true);

  const handleDogClick = () => {
    // Create heart element directly in DOM to avoid re-renders
    const heart = document.createElement('div');
    heart.innerHTML = `
      <svg width="28" height="26" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
        fill="rgba(255, 182, 193, 0.75)" 
        stroke="rgba(255, 182, 193, 0.9)" 
        stroke-width="0.5"/>
      </svg>
    `;
    heart.style.position = 'fixed';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '25';
    heart.style.right = '80px'; // Start from dog position
    heart.style.bottom = '80px';
    heart.style.transform = 'scale(0)';
    heart.style.transition = 'all 0.5s ease-out';
    heart.style.filter = 'drop-shadow(0 0 12px rgba(255, 182, 193, 0.6)) drop-shadow(0 0 20px rgba(255, 182, 193, 0.3))';
    heart.style.animation = 'heartGlow 2s ease-in-out infinite alternate';
    
    // Add CSS animation for glowing effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes heartGlow {
        0% { filter: drop-shadow(0 0 8px rgba(255, 182, 193, 0.4)) drop-shadow(0 0 16px rgba(255, 182, 193, 0.2)); }
        100% { filter: drop-shadow(0 0 16px rgba(255, 182, 193, 0.8)) drop-shadow(0 0 24px rgba(255, 182, 193, 0.4)); }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(heart);
    
    // Animate heart jumping out
    setTimeout(() => {
      const randomX = Math.random() * (window.innerWidth - 100);
      const randomY = Math.random() * (window.innerHeight - 100);
      
      heart.style.transform = 'scale(1)';
      heart.style.right = (window.innerWidth - randomX) + 'px';
      heart.style.bottom = (window.innerHeight - randomY) + 'px';
    }, 50);
    
    // Remove heart after 5 seconds
    setTimeout(() => {
      if (heart.parentNode) {
        heart.style.transform = 'scale(0)';
        heart.style.opacity = '0';
        setTimeout(() => {
          if (heart.parentNode) {
            document.body.removeChild(heart);
          }
        }, 500);
      }
    }, 5000);
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const SimpleDog = () => (
    <div
      className="fixed bottom-6 right-6 z-40 cursor-pointer group"
      onClick={handleDogClick}
    >
      <div className={`p-4 rounded-full backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110 ${
        isDark 
          ? 'bg-purple-500/20 border-purple-400/40 hover:bg-purple-500/30' 
          : 'bg-pink-200/50 border-pink-300/60 hover:bg-pink-200/70'
      }`}>
        <div className="text-3xl">🐕</div>
      </div>
      
      {/* Tooltip message */}
      <div
        className={`absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDark 
            ? 'bg-slate-800 text-purple-200 border border-purple-500/30' 
            : 'bg-white text-slate-700 border border-pink-300/50'
        }`}
      >
        click for little surprise ✨
        <div className={`absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
          isDark ? 'border-t-slate-800' : 'border-t-white'
        }`}></div>
      </div>
    </div>
  );

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 150 + 80,
            height: Math.random() * 150 + 80,
            background: isDark 
              ? 'radial-gradient(circle, rgba(147, 112, 219, 0.4), rgba(72, 61, 139, 0.2), transparent)'
              : 'radial-gradient(circle, rgba(255, 182, 193, 0.4), rgba(221, 160, 221, 0.2), transparent)',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <Star 
            className={`w-1 h-1 ${isDark ? 'text-purple-200' : 'text-pink-300'}`} 
            fill="currentColor"
          />
        </motion.div>
      ))}

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 1, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        >
          <Sparkles 
            className={`w-2 h-2 ${isDark ? 'text-indigo-300' : 'text-rose-400'}`}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );

  const Navigation = () => (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
        isDark 
          ? 'bg-slate-900/80 border-purple-500/20' 
          : 'bg-white/80 border-pink-200/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div 
          className={`text-lg font-bold bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 via-violet-400 to-indigo-400' 
              : 'from-rose-400 via-pink-400 to-purple-400'
          } bg-clip-text text-transparent`}
          whileHover={{ scale: 1.05 }}
        >
          ✨ KJ
        </motion.div>
        
        <div className="flex space-x-3 sm:space-x-6">
          {['home', 'about', 'projects', 'skills', 'contact'].map((page) => (
            <motion.button
              key={page}
              onClick={() => navigateToPage(page)}
              className={`capitalize font-handwritten text-sm sm:text-base transition-all duration-300 ${
                currentPage === page 
                  ? isDark ? 'text-violet-300 font-bold' : 'text-rose-500 font-bold'
                  : isDark ? 'text-purple-200 hover:text-violet-300' : 'text-slate-600 hover:text-rose-400'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
            isDark 
              ? 'bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30' 
              : 'bg-pink-200/50 hover:bg-pink-200/70 border border-pink-300/50'
          }`}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? 
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" /> : 
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
          }
        </motion.button>
      </div>
    </motion.nav>
  );

  const HomePage = () => (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark 
            ? [
                'radial-gradient(ellipse at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
                'radial-gradient(ellipse at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)'
              ]
            : [
                'radial-gradient(ellipse at 20% 20%, rgba(255, 192, 203, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(221, 160, 221, 0.3) 0%, transparent 50%)',
                'radial-gradient(ellipse at 80% 20%, rgba(255, 192, 203, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(221, 160, 221, 0.3) 0%, transparent 50%)'
              ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="text-center z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1 
          className={`text-4xl sm:text-5xl md:text-7xl font-cursive mb-4 leading-tight bg-gradient-to-r ${
            isDark 
              ? 'from-pink-400 via-rose-400 to-orange-400' 
              : 'from-purple-500 via-blue-500 to-teal-500'
          } bg-clip-text text-transparent font-bold`}
        >
          KUNJAL JOSHI
        </motion.h1>
        
        <motion.h2 
          className={`text-3xl sm:text-4xl md:text-6xl font-playful mb-6 leading-tight ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          From code to comfort —
          <br />
          <span className={`font-cursive text-2xl sm:text-3xl md:text-5xl ${isDark ? 'text-violet-300' : 'text-rose-500'}`}>
            I build with feeling
          </span>
        </motion.h2>
        
        <motion.p 
          className={`text-base sm:text-lg md:text-xl mb-12 font-script font-medium ${
            isDark ? 'text-purple-200' : 'text-slate-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ✨ crafting digital experiences with intention & wonder ✨
        </motion.p>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => navigateToPage('about')}
        >
          <motion.div
            className={`inline-flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-full ${
              isDark 
                ? 'bg-purple-500/20 border border-purple-400/30 text-purple-200' 
                : 'bg-pink-200/50 border border-pink-300/50 text-slate-700'
            }`}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-rounded text-sm">explore the journey</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );

  const AboutPage = () => (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl">
        <motion.h2 
          className={`text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 font-handwritten bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 via-violet-400 to-indigo-400' 
              : 'from-rose-400 via-pink-400 to-purple-400'
          } bg-clip-text text-transparent`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
        >
          Hi, I'm Kunjal Joshi 🌙
        </motion.h2>
        
        <motion.div 
          className={`text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6 ${
            isDark ? 'text-purple-100' : 'text-slate-700'
          }`}
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="text-lg sm:text-xl">
            — a curious coder, dreamer, and java developer of sorts, living at the crossroads of logic and emotion. 
            I'm a <span className="font-bold text-violet-300">B.Tech Computer Science</span> student, an <span className="font-bold text-violet-300">iOS developer</span>, 
            a <span className="font-bold text-violet-300">Java enthusiast</span>, a <span className="font-bold text-violet-300">creative thinker</span>, 
            and someone who believes in crafting tech that doesn't just work — but feels right.
          </p>
          
          <p className="text-base sm:text-lg">
            I build <span className="font-bold text-violet-300">calm, dynamic, and emotionally intelligent apps</span> — 
            like a mood tracker that listens, a journal that blooms with feelings, or a weather app that dances with the rain. 
            My work is often inspired by nature, space, and the quiet power of design — I love blending 
            <span className="font-bold text-violet-300">soft visuals</span>, <span className="font-bold text-violet-300">gentle animations</span>, 
            and <span className="font-bold text-violet-300">meaningful interactivity</span> to bring peace through pixels.
          </p>
          
          <div className="text-base sm:text-lg">
            <p className="mb-3 sm:mb-4 text-lg sm:text-xl">I'm also someone who enjoys:</p>
            <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 text-sm sm:text-base">
              <li>🌌 exploring mental wellness through space-themed experiences</li>
              <li>🌿 designing soothing UIs that reflect real emotions</li>
              <li>🧠 making AI-powered experiences (like virtual pets that feel real)</li>
              <li>🎮 developing mini-games that spark joy</li>
              <li>🧑🏻‍💻 leading with intention — as the secretary of my college's tech society</li>
              <li>💖 and yes, I'm passionate about <span className="font-bold text-violet-300">mental wellness</span>, emotional health, and the little things that make us feel whole</li>
            </ul>
          </div>
          
          <p className="text-base sm:text-lg">
            Whether it's <span className="font-bold text-violet-300">Swift, Java, Flutter, or full-stack MERN</span>, 
            I always aim to build projects that are more than just "tech" — they're <span className="font-bold text-violet-300">digital companions</span>, 
            <span className="font-bold text-violet-300">empathy engines</span>, and <span className="font-bold text-violet-300">safe spaces</span> in a busy world.
          </p>
          
          <p className="text-center text-lg sm:text-xl font-handwritten">
            So if you're into code that cares, designs that breathe, and vibes that feel like a soft playlist on a rainy day —
            <br />
            <span className="font-handwritten text-xl sm:text-2xl">Welcome to my world. Let's create something beautiful. 🌧️🌸</span>
          </p>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false }}
        >
          {['🧠 curious coder', '💻 ios developer', '🌟 creative thinker', '☕ java developer', '🎮 mini-game maker', '💖 mental wellness advocate'].map((trait, i) => (
            <motion.div
              key={trait}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border text-xs sm:text-sm font-quirky ${
                isDark 
                  ? 'bg-purple-500/10 border-purple-400/20 text-purple-200' 
                  : 'bg-pink-100/80 border-pink-200/60 text-slate-700'
              }`}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: isDark ? 'rgba(147, 51, 234, 0.2)' : 'rgba(244, 114, 182, 0.2)' 
              }}
              transition={{ delay: i * 0.1 }}
            >
              {trait}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  const ProjectsPage = () => {
    const projects = [
      {
        title: "real-time weather app",
        tagline: "weather that speaks to your mood",
        description: "developed a location-sensitive weather app using flutter. ui adapts dynamically based on current weather with aesthetic, animated backgrounds. displays real-time temperature, humidity, and hourly forecasts.",
        tech: ["Flutter", "OpenWeatherMap API", "Android Studio", "Figma"],
        gradient: isDark ? "from-blue-500 to-indigo-600" : "from-sky-400 to-blue-500",
        icon: "🌤️"
      },
      {
        title: "😊 mood – ios mental wellness app",
        tagline: "track your moods. reflect. grow",
        description: "ios app built using swift and xcode. features emoji-based mood tracking, journal entries, daily calendar view, analytics, mini-games, relaxing music, and animated 3d elements using scenekit.",
        tech: ["Swift", "Xcode", "SceneKit", "iOS"],
        gradient: isDark ? "from-pink-500 to-rose-600" : "from-pink-400 to-rose-500",
        icon: "😊",
        githubUrl: "https://github.com/KunjalCodes/Mood-App-ios"
      },
      {
        title: "counseling web portal",
        tagline: "simplifying education guidance",
        description: "developed using spring boot. includes sign-up/login, student form submission, branch allotment, fee submission, offer letter generation, and admin dashboard for managing records.",
        tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "IntelliJ"],
        gradient: isDark ? "from-green-500 to-emerald-600" : "from-green-400 to-teal-500",
        icon: "📍"
      },
      {
        title: "pinterest-inspired visual app",
        tagline: "organize inspiration, visually",
        description: "created a visually engaging app to browse, save, and organize image content. implemented seamless ui using java and javafx with firebase integration for content storage.",
        tech: ["Java", "JavaFX", "Firebase", "MySQL"],
        gradient: isDark ? "from-red-500 to-pink-600" : "from-red-400 to-pink-500",
        icon: "📌"
      },
      {
        title: "calm nature – 3d space game",
        tagline: "a peaceful game for mindful breaks",
        description: "built using scenekit in swift. soothing space-themed game for mental relaxation with immersive visuals, gentle gameplay, and a 3d dog model. optimized for iphone 16.",
        tech: ["Swift", "SceneKit", "iOS", "3D Modeling"],
        gradient: isDark ? "from-purple-500 to-indigo-600" : "from-purple-400 to-indigo-500",
        icon: "🧠"
      },
      {
        title: "spotify clone",
        tagline: "music, made yours",
        description: "built a spotify-inspired music streaming app with custom playlist support. implemented ui to browse, search, and play songs with smooth media control and real-time playback.",
        tech: ["Java", "JavaFX", "Swing", "Desktop"],
        gradient: isDark ? "from-orange-500 to-red-600" : "from-orange-400 to-red-500",
        icon: "🎵"
      }
    ];

    return (
      <section id="projects" className="min-h-screen px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className={`text-2xl sm:text-3xl md:text-4xl font-retro text-center mb-12 sm:mb-16 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            Project Aurora 🌌
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                viewport={{ once: false }}
              >
                <div className={`relative overflow-hidden rounded-3xl border backdrop-blur-sm p-6 h-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/30 border-purple-500/20 hover:border-purple-400/40' 
                    : 'bg-white/60 border-pink-200/40 hover:border-pink-300/60'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl">{project.icon}</span>
                      <h3 className={`text-lg font-elegant ${
                        isDark ? 'text-white' : 'text-slate-800'
                      }`}>{project.title}</h3>
                    </div>
                    
                    <p className={`text-xs italic mb-3 font-script ${
                      isDark ? 'text-violet-300' : 'text-rose-500'
                    }`}>{project.tagline}</p>
                    
                    <p className={`text-sm mb-4 leading-relaxed ${
                      isDark ? 'text-purple-100' : 'text-slate-600'
                    }`}>{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded-full border font-mono ${
                            isDark 
                              ? 'bg-purple-500/10 border-purple-400/30 text-purple-200' 
                              : 'bg-pink-100/60 border-pink-300/50 text-slate-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <ExternalLink className={`w-5 h-5 ${isDark ? 'text-violet-300' : 'text-rose-500'}`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const SkillsPage = () => {
    const skillCategories = [
      {
        title: "👨‍💻 programming languages",
        skills: ["Java (Primary)", "Swift", "Python", "HTML/CSS/JavaScript", "Kotlin", "SQL/MySQL", "Dart (Flutter)"],
        icon: "💻",
        color: isDark ? "from-blue-500 to-indigo-600" : "from-blue-400 to-indigo-500"
      },
      {
        title: "🧠 frameworks & libraries",
        skills: ["Spring Boot", "JavaFX/Swing", "SceneKit", "SwiftUI", "Firebase", "Flutter"],
        icon: "🧠",
        color: isDark ? "from-purple-500 to-pink-600" : "from-purple-400 to-pink-500"
      },
      {
        title: "🛠️ tools & platforms",
        skills: ["Xcode", "Android Studio", "IntelliJ IDEA", "Figma/Sketch/Canva", "Git/GitHub", "VS Code", "Postman"],
        icon: "⚙️",
        color: isDark ? "from-green-500 to-emerald-600" : "from-green-400 to-teal-500"
      },
      {
        title: "🎨 design & ux/ui skills",
        skills: ["Aesthetic UI Design", "Mood-based Color Theory", "Animated Transitions", "3D UI Elements", "Responsive Layouts", "Game Interface Design"],
        icon: "🎨",
        color: isDark ? "from-pink-500 to-rose-600" : "from-pink-400 to-rose-500"
      },
      {
        title: "🔐 other strengths",
        skills: ["Ethical Hacking & Cybersecurity", "AI/ML Concepts", "Mental Wellness Tech", "Creative Writing & Branding", "Event Leadership"],
        icon: "🚀",
        color: isDark ? "from-orange-500 to-red-600" : "from-orange-400 to-red-500"
      },
      {
        title: "💫 personal skills",
        skills: ["Creative Ideation", "Emotional Intelligence", "Detail-oriented Design", "Self-driven & Proactive", "Empathetic Development", "Great Communicator"],
        icon: "✨",
        color: isDark ? "from-teal-500 to-cyan-600" : "from-teal-400 to-cyan-500"
      }
    ];

    return (
      <section id="skills" className="min-h-screen px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className={`text-2xl sm:text-3xl md:text-4xl font-cursive text-center mb-8 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            constellation of skills ✨
          </motion.h2>
          
          <motion.p 
            className={`text-center text-lg font-script mb-16 ${
              isDark ? 'text-purple-200' : 'text-slate-600'
            }`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
          >
            blending technical expertise with emotional intelligence ✨
          </motion.p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                className="group"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: false }}
              >
                <div className={`relative overflow-hidden rounded-3xl border backdrop-blur-sm p-6 h-full transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-800/40 border-purple-500/20 hover:border-purple-400/40' 
                    : 'bg-white/60 border-pink-200/40 hover:border-pink-300/60'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-5xl mb-6"
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    
                    <h3 className={`text-sm font-handwritten mb-6 font-bold ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>{category.title}</h3>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, j) => (
                        <motion.div
                          key={skill}
                          className={`rounded-xl p-3 text-xs font-rounded border backdrop-blur-sm transition-all duration-300 ${
                            isDark 
                              ? 'bg-slate-700/40 border-purple-400/20 text-purple-100 hover:border-purple-300/40 hover:bg-slate-700/60' 
                              : 'bg-white/40 border-pink-200/40 text-slate-700 hover:border-pink-300/60 hover:bg-white/70'
                          }`}
                          whileHover={{ scale: 1.02, x: 5 }}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 + j * 0.05 }}
                          viewport={{ once: false }}
                        >
                          <span className="flex items-center">
                            <span className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${category.color}`}></span>
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactPage = () => (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl text-center">
        <motion.h2 
          className={`text-2xl sm:text-3xl md:text-4xl font-signature mb-8 sm:mb-10 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
        >
          Got coffee? I've got code. Let's connect. ☄️
        </motion.h2>
        
        <motion.p 
          className={`text-sm sm:text-base mb-10 sm:mb-12 font-script leading-relaxed ${
            isDark ? 'text-purple-200' : 'text-slate-600'
          }`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
        >
          whether you want to collaborate on something beautiful, 
          discuss the mysteries of the universe, or just say hello — 
          i'd love to hear from you.
        </motion.p>
        
        <motion.div
          className="flex justify-center flex-wrap gap-4 sm:gap-8 mb-12 sm:mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false }}
        >
          {[
            { 
              icon: Mail, 
              label: "email", 
              gradient: "from-violet-500 to-purple-600",
              url: "mailto:kunjal.joshi6412@gmail.com"
            },
            { 
              icon: Github, 
              label: "github", 
              gradient: "from-slate-600 to-slate-800",
              url: "https://github.com/KunjalCodes"
            },
            { 
              icon: Linkedin, 
              label: "linkedin", 
              gradient: "from-blue-500 to-indigo-600",
              url: "https://www.linkedin.com/in/kunjal-joshi/"
            },
            { 
              icon: ExternalLink, 
              label: "leetcode", 
              gradient: "from-orange-500 to-yellow-500",
              url: "https://leetcode.com/u/KunjalCodes/"
            }
          ].map(({ icon: Icon, label, gradient, url }, i) => (
            <motion.button
              key={label}
              onClick={() => window.open(url, '_blank')}
              className={`group flex flex-col items-center space-y-2 sm:space-y-3 p-4 sm:p-6 rounded-3xl border backdrop-blur-sm transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800/40 border-purple-500/20 hover:border-purple-400/40 hover:bg-slate-800/60' 
                  : 'bg-white/60 border-pink-200/40 hover:border-pink-300/60 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              viewport={{ once: false }}
            >
              <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${gradient} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className={`text-xs sm:text-sm font-rounded ${
                isDark ? 'text-purple-200' : 'text-slate-700'
              }`}>{label}</span>
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: false }}
        >
          <p className={`text-xs sm:text-sm font-script italic ${
            isDark ? 'text-purple-300' : 'text-slate-600'
          }`}>
            "in the vastness of space and time, every connection is precious"
          </p>
          
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: false }}
          >
            <p className={`text-xs font-script ${
              isDark ? 'text-purple-400' : 'text-slate-500'
            }`}>
              Made with ❤️ and ✨ by Kunjal Joshi
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  const ProjectModal = () => (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          
          <motion.div
            className={`relative max-w-2xl sm:max-w-3xl w-full rounded-3xl p-6 sm:p-10 border backdrop-blur-xl max-h-[90vh] overflow-y-auto ${
              isDark 
                ? 'bg-slate-900/90 border-purple-500/30' 
                : 'bg-white/90 border-pink-200/50'
            }`}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 rounded-full transition-all ${
                isDark 
                  ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200' 
                  : 'bg-pink-200/50 hover:bg-pink-200/70 text-slate-700'
              }`}
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl">{selectedProject.icon}</span>
              <h3 className={`text-xl sm:text-2xl font-elegant ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>{selectedProject.title}</h3>
            </div>
            
            <p className={`text-xs italic mb-4 font-script ${
              isDark ? 'text-violet-300' : 'text-rose-500'
            }`}>{selectedProject.tagline}</p>
            
            <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${
              isDark ? 'text-purple-100' : 'text-slate-600'
            }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              {selectedProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full border text-xs font-mono ${
                    isDark 
                      ? 'bg-purple-500/10 border-purple-400/30 text-purple-200' 
                      : 'bg-pink-100/60 border-pink-300/50 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                className={`flex-1 py-3 px-4 rounded-2xl border font-rounded text-sm transition-all ${
                  isDark 
                    ? 'bg-violet-500/20 hover:bg-violet-500/30 text-violet-200 border-violet-400/30' 
                    : 'bg-rose-200/50 hover:bg-rose-200/70 text-rose-700 border-rose-300/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                view live demo
              </motion.button>
              {selectedProject.githubUrl ? (
                <motion.button
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  className={`flex-1 py-3 px-4 rounded-2xl border font-rounded text-sm transition-all flex items-center justify-center space-x-2 ${
                    isDark 
                      ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border-purple-400/30' 
                      : 'bg-pink-200/50 hover:bg-pink-200/70 text-slate-700 border-pink-300/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  <span>view code</span>
                </motion.button>
              ) : (
                <motion.button
                  className={`flex-1 py-3 px-4 rounded-2xl border font-rounded text-sm transition-all ${
                    isDark 
                      ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border-purple-400/30' 
                      : 'bg-pink-200/50 hover:bg-pink-200/70 text-slate-700 border-pink-300/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  view code
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div 
      className={`transition-all duration-1000 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'
      }`}
      style={{
        background: isDark 
          ? 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0f23 50%, #000 100%)'
          : 'radial-gradient(ellipse at top, #fdf2f8 0%, #fae8ff 50%, #ede9fe 100%)',
        scrollBehavior: 'smooth'
      }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Righteous&family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&family=Fredoka+One&family=Comfortaa:wght@300;400;500;700&family=Pacifico&family=Amatic+SC:wght@400;700&family=Satisfy&family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        body {
          font-family: 'Josefin Sans', sans-serif;
        }
        
        .font-cursive { font-family: 'Dancing Script', cursive; }
        .font-playful { font-family: 'Fredoka One', cursive; }
        .font-handwritten { font-family: 'Kalam', cursive; }
        .font-script { font-family: 'Caveat', cursive; }
        .font-retro { font-family: 'Righteous', cursive; }
        .font-rounded { font-family: 'Comfortaa', cursive; }
        .font-elegant { font-family: 'Pacifico', cursive; }
        .font-quirky { font-family: 'Amatic SC', cursive; }
        .font-signature { font-family: 'Satisfy', cursive; }
        .font-modern { font-family: 'Josefin Sans', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <FloatingParticles />
      <Navigation />
      <SimpleDog />
      
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
      
      <ProjectModal />
    </div>
  );
};

export default GalaxyPortfolio;
