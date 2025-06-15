"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Youtube,
  Code,
  Palette,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Optimized stars with subtle movement
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      moveX: (Math.random() - 0.5) * 2, // Subtle horizontal movement
      moveY: (Math.random() - 0.5) * 2, // Subtle vertical movement
    }));
  }, []);

  // Optimized SVG Components with reduced filters
  const TechSVG = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="techGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <polygon
        points="100,30 170,100 100,170 30,100"
        fill="none"
        stroke="url(#techGlow)"
        strokeWidth="2"
      />
      <polygon
        points="100,60 140,100 100,140 60,100"
        fill="url(#techGlow)"
        opacity="0.2"
      />
      <circle cx="100" cy="100" r="8" fill="#ffffff" />
    </svg>
  );

  const FutureSVG = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="futureGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M100 40 L160 100 L100 160 L40 100 Z"
        fill="none"
        stroke="url(#futureGlow)"
        strokeWidth="2"
      />
      <path
        d="M100 60 L140 100 L100 140 L60 100 Z"
        fill="url(#futureGlow)"
        opacity="0.15"
      />
      <circle cx="100" cy="70" r="3" fill="#ffffff" />
      <circle cx="130" cy="100" r="3" fill="#ffffff" />
      <circle cx="100" cy="130" r="3" fill="#ffffff" />
      <circle cx="70" cy="100" r="3" fill="#ffffff" />
    </svg>
  );

  const AnimatedInterfaceBadge = () => {
    const badgeRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    // Generate star particles
    const starParticles = useMemo(() => 
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 2
      })), []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (badgeRef.current) {
        const rect = badgeRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    }, []);

    return (
      <motion.div
        ref={badgeRef}
        className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 relative overflow-hidden group"
        onMouseMove={handleMouseMove}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Interactive gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.1) 25%, 
              transparent 50%)`,
          }}
          transition={{ duration: 0.1 }}
        />

        {/* Star particles */}
        {starParticles.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.6,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
              x: [0, (Math.random() - 0.5) * 5, 0],
              y: [0, (Math.random() - 0.5) * 5, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-white" />
          <motion.span
            className="text-xs sm:text-sm md:text-base font-medium text-white/90 font-mulish tracking-wide"
            animate={{
              textShadow: [
                "0 0 5px rgba(255, 255, 255, 0.5)",
                "0 0 10px rgba(255, 255, 255, 0.7)",
                "0 0 5px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            New interface
          </motion.span>
        </div>
      </motion.div>
    );
  };

  const AnimatedGetInTouchButton = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for gradient effect
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    }, []);

    // Generate floating star particles
    const stars = useMemo(() => {
      return Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      }));
    }, []);

    return (
      <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
        className="relative inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ willChange: "transform" }}
      >
        {/* Glowing outline effect */}
        <motion.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 255, 255, 0.3)",
              "0 0 30px rgba(255, 255, 255, 0.5)",
              "0 0 20px rgba(255, 255, 255, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Interactive gradient overlay */}
        <motion.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Floating star particles */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: 0.6,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + star.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}

        {/* Button content */}
        <a href="https://www.instagram.com/lumozion/" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="relative overflow-hidden bg-white/10 hover:bg-white/15 border-2 border-white/30 text-white rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium group backdrop-blur-md transition-all duration-300 font-mulish w-full sm:w-auto"
            style={{
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Text with futuristic animation */}
            <motion.span
              className="relative z-10 inline-flex items-center"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.8)",
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Get in touch
              <motion.div
                className="ml-2 sm:ml-3"
                animate={{
                  x: [0, 4, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.div>
            </motion.span>
          </Button>
        </a>
      </motion.div>
    );
  };

  const FuturisticText = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.span
        className="relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text with shimmer mask */}
        <motion.span
          className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white"
          style={{
            WebkitBackgroundClip: "text",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.span>

        {/* Animated outline */}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
            color: "transparent",
          }}
          animate={{
            WebkitTextStroke: [
              "1px rgba(255, 255, 255, 0.3)",
              "1px rgba(255, 255, 255, 0.5)",
              "1px rgba(255, 255, 255, 0.3)",
            ],
            textShadow: [
              "0 0 5px rgba(255, 255, 255, 0.2)",
              "0 0 10px rgba(255, 255, 255, 0.4)",
              "0 0 5px rgba(255, 255, 255, 0.2)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.span>

        {/* Subtle glow */}
        <motion.span
          className="absolute inset-0 blur-[2px] opacity-30"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.span>
      </motion.span>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background with Subtle Movement */}
      <div className="fixed inset-0 z-0">
        {/* Subtle animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Animated Stars with Subtle Movement */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              willChange: "transform, opacity",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.1, 0.8],
              x: [0, star.moveX, 0],
              y: [0, star.moveY, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Overlays */}
      <motion.div
        className="fixed inset-0 z-10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.6) 50%, rgba(0,0,0,0.8) 100%)",
            "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.6) 50%, rgba(0,0,0,0.8) 100%)",
            "linear-gradient(225deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.6) 50%, rgba(0,0,0,0.8) 100%)",
            "linear-gradient(315deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.6) 50%, rgba(0,0,0,0.8) 100%)",
            "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(30,30,30,0.6) 50%, rgba(0,0,0,0.8) 100%)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Enhanced Navigation with Perfect Responsive Sizing */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-50 backdrop-blur-lg bg-white/5 border-b border-white/20"
        style={{
          willChange: "transform",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-5">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with Perfect Responsive Sizing */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-50 cursor-pointer"
              style={{ willChange: "transform" }}
              onClick={() => scrollToSection("home")}
            >
              <h1
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white relative z-10 font-outfit tracking-wider transition-all duration-300 px-1 sm:px-2 py-1 logo-cosmic-flicker"
                style={{
                  lineHeight: "1.2",
                }}
              >
                LUMOZION
                {Array.from({ length: 10 }, (_, i) => (
                  <span key={i} className="star" />
                ))}
              </h1>
            </motion.div>

            {/* Desktop Menu with Perfect Responsive Spacing */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 relative z-50">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Why Us", id: "why-us" },
              ].map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/90 hover:text-white transition-all duration-300 relative group font-medium font-mulish text-sm lg:text-base xl:text-lg overflow-hidden"
                >
                  {/* Starlight Glow Background */}


                  {/* Cosmic Glow Effect */}
                  

                  {/* Starlight Particles */}
                  

                  <span className="relative z-10">{item.name}</span>

                  {/* Enhanced Underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-white/50 via-white to-white/50 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{
                      width: "100%",
                      opacity: 1,
                      boxShadow: "0 0 8px rgba(255,255,255,0.6)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button with Perfect Sizing */}
            <motion.button
              className="md:hidden p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 relative z-50 overflow-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              {/* Button Glow Effect */}
              
              {isMenuOpen ? (
                <X className="relative z-10 w-5 h-5" />
              ) : (
                <Menu className="relative z-10 w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with Perfect Responsive Layout */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20 rounded-b-2xl sm:rounded-b-3xl mx-3 sm:mx-4 mb-3 sm:mb-4 relative z-40 overflow-hidden"
          >
            {/* Starlight Burst Background */}
          
  

            {/* Cosmic Particles */}
          

            <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-4 sm:space-y-6 relative z-10">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Why Us", id: "why-us" },
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white/90 hover:text-white transition-all duration-300 font-medium font-mulish text-base sm:text-lg relative overflow-hidden group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  {/* Mobile Link Glow Effect */}
                 

                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Bottom Glow Effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section with Perfect Responsive Typography */}
      <section
        id="home"
        className="relative z-20 min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 -mt-14 sm:pt-20 md:pt-24"
      >
        <div className="container mx-auto text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16 relative z-30"
          >
            {/* Glassmorphic Badge with Perfect Responsive Sizing */}
            <AnimatedInterfaceBadge />

            {/* Hero Title with Perfect Responsive Typography */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight relative z-30 font-outfit tracking-wide max-w-6xl mx-auto"
              style={{
                lineHeight: "1.1",
              }}
            >
              <span className="relative z-10">
                <FuturisticText>Future Of</FuturisticText>
                <br />
                <FuturisticText>
                  <span className="font-outfit relative">
                    Web Development
                  </span>
                </FuturisticText>
              </span>
            </motion.h1>

            {/* Hero Description with Perfect Responsive Typography */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed font-light relative z-30 font-mulish px-2 sm:px-0"
              style={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                lineHeight: "1.6",
              }}
            >
              Experience the next generation of online success with Lumozion's
              cutting-edge web development, crafting immersive digital solutions
              for your business.
            </motion.p>

            {/* Hero Buttons with Perfect Responsive Sizing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center relative z-30 pt-2 sm:pt-4"
            >
              <AnimatedGetInTouchButton />
              <a href="https://www.instagram.com/lumozion/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/10 hover:scale-105 hover:shadow-2xl rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium backdrop-blur-md bg-white/5 transition-all duration-300 font-mulish w-full sm:w-auto"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
                  }}
                >
                  Watch Demo
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements with Perfect Responsive Positioning */}
        <motion.div
          style={{
            y,
            willChange: "transform",
            boxShadow: "0 0 25px rgba(255, 255, 255, 0.15)",
          }}
          className="absolute top-20 left-2 w-12 h-12 sm:top-20 sm:left-4 sm:w-16 sm:h-16 md:top-24 md:left-8 md:w-20 md:h-20 lg:top-32 lg:left-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-500"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <TechSVG className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />
        </motion.div>
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]),
            willChange: "transform",
            boxShadow: "0 0 25px rgba(255, 255, 255, 0.15)",
          }}
          className="absolute bottom-16 right-2 w-10 h-10 sm:bottom-20 sm:right-4 sm:w-12 sm:h-12 md:bottom-24 md:right-8 md:w-16 md:h-16 lg:bottom-32 lg:right-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-500"
          animate={{
            rotate: -360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: {
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <FutureSVG className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />
        </motion.div>
      </section>

      {/* Features Section with Perfect Responsive Layout */}
      <section className="relative z-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-30"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white font-outfit tracking-wide max-w-5xl mx-auto"
              style={{
                textShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                lineHeight: "1.2",
              }}
            >
              Why Choose Lumozion?
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-light leading-relaxed font-mulish px-2 sm:px-0"
              style={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                lineHeight: "1.6",
              }}
            >
              Discover the features that make us the future of web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Lightning Fast",
                description:
                  "Experience blazing fast loading times and seamless interactions with our optimized platform",
              },
              {
                icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Secure & Safe",
                description:
                  "Advanced security measures and encryption to protect your data and transactions",
              },
              {
                icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "AI Powered",
                description:
                  "Intelligent recommendations and personalized development experience powered by artificial intelligence",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                }}
                className="group relative z-30"
                style={{ willChange: "transform" }}
              >
                <Card
                  className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/8 transition-all duration-500 h-full rounded-2xl sm:rounded-3xl"
                  style={{
                    boxShadow: "0 0 25px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="text-center space-y-4 sm:space-y-6">
                    <motion.div
                      className="inline-flex p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/10 text-white backdrop-blur-md border border-white/20"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 15px 30px rgba(255, 255, 255, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                        willChange: "transform",
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-outfit"
                      style={{
                        textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                        lineHeight: "1.3",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg font-light font-mulish"
                      style={{
                        textShadow: "0 0 8px rgba(255, 255, 255, 0.15)",
                        lineHeight: "1.7",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with Perfect Responsive Layout */}
      <section
        id="about"
        className="relative z-20 py-12 sm:py-16 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-30"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white font-outfit tracking-wide max-w-5xl mx-auto"
              style={{
                textShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                lineHeight: "1.2",
              }}
            >
              About Lumozion
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto font-light leading-relaxed font-mulish px-2 sm:px-0"
              style={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                lineHeight: "1.6",
              }}
            >
              We are a team of futuristic developers building immersive web,
              design, and automation solutions for next-gen businesses.
            </p>
          </motion.div>

          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            className="flex justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-30"
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card
                className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/8 transition-all duration-500 rounded-2xl sm:rounded-3xl max-w-md w-full relative overflow-hidden group"
                style={{
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.15)",
                }}
              >
                {/* Enhanced Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ opacity: 0.3 }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                    transition: {
                      duration: 1.5,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  }}
                />

                <div className="text-center space-y-4 sm:space-y-6 relative z-10">
                  <motion.div
                    className="relative inline-block group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full overflow-hidden border-2 border-white/30 backdrop-blur-sm relative"
                      style={{
                        boxShadow: "0 8px 32px rgba(255, 255, 255, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                      }}
                      whileHover={{
                        boxShadow: "0 12px 40px rgba(255, 255, 255, 0.25), inset 0 0 30px rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <img
                        src="/ceo-image.png"
                        alt="Ashwin Asthana"
                        className="w-full h-full object-cover transition-all duration-500"
                        style={{
                          filter: "brightness(1.1) contrast(1.1) saturate(1.05)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                      {/* Enhanced Inner Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                        }}
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Rotating Glow Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          boxShadow: "0 0 25px rgba(255, 255, 255, 0.4), inset 0 0 25px rgba(255, 255, 255, 0.1)",
                        }}
                        animate={{
                          rotate: 360,
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      />

                      {/* Enhanced Floating Particles */}
                      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {Array.from({ length: 6 }, (_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/60 rounded-full"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${20 + (i % 2) * 60}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              y: [0, -20, -40],
                              x: [0, (i % 2 ? 10 : -10), 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeOut",
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 font-outfit relative"
                      style={{
                        textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                        lineHeight: "1.3",
                      }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_100%] animate-shimmer">
                        Ashwin Asthana
                      </span>
                    </h3>
                    <p
                      className="text-white/80 text-sm sm:text-base md:text-lg font-light font-mulish relative"
                      style={{
                        textShadow: "0 0 8px rgba(255, 255, 255, 0.15)",
                        lineHeight: "1.5",
                      }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-[length:200%_100%] animate-shimmer">
                        CEO
                      </span>
                    </p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Our Services Section */}
          <section
            id="services"
            className="relative z-20 mb-12 sm:mb-16 md:mb-20 lg:mb-24 min-h-screen pt-10"
          >
            {/* Services Header with Glitch Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-30"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white font-outfit tracking-wide max-w-5xl mx-auto relative"
                style={{
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                  lineHeight: "1.2",
                }}
                animate={{
                  textShadow: [
                    "0 0 30px rgba(255, 255, 255, 0.4)",
                    "0 0 35px rgba(255, 255, 255, 0.6), 2px 0 0 rgba(255, 0, 255, 0.3)",
                    "0 0 30px rgba(255, 255, 255, 0.4)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Our Services
                {/* Glitch overlay */}
                <motion.span
                  className="absolute inset-0 text-white/20"
                  animate={{
                    x: [0, 2, -2, 0],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  Our Services
                </motion.span>
              </motion.h2>
            </motion.div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {[
                {
                  icon: <Code className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Web Development",
                  description:
                    "Custom websites built with modern technologies, optimized for performance and user experience across all devices.",
                },
                {
                  icon: <Palette className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Design & Branding",
                  description:
                    "Creative visual identity and brand design that captures your essence and resonates with your target audience.",
                },
                {
                  icon: <Bot className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "AI + Automation",
                  description:
                    "Intelligent automation solutions and AI integration to streamline processes and enhance business efficiency.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group relative z-30"
                  style={{ willChange: "transform" }}
                >
                  <Card
                    className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/8 transition-all duration-500 h-full rounded-2xl sm:rounded-3xl relative overflow-hidden"
                    style={{
                      boxShadow: "0 0 25px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: "100%",
                        transition: {
                          duration: 1.5,
                          ease: "easeInOut",
                        },
                      }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      }}
                    />

                    {/* Soft Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: "inset 0 0 30px rgba(255, 255, 255, 0.1)",
                      }}
                    />

                    <div className="text-center space-y-4 sm:space-y-6 relative z-10">
                      <motion.div
                        className="inline-flex p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/10 text-white backdrop-blur-md border border-white/20"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 15px 30px rgba(255, 255, 255, 0.2)",
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                          willChange: "transform",
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-outfit"
                        style={{
                          textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                          lineHeight: "1.3",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg font-light font-mulish"
                        style={{
                          textShadow: "0 0 8px rgba(255, 255, 255, 0.15)",
                          lineHeight: "1.7",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Us Section */}
          <section id="why-us" className="relative z-20 pt-10">
            {/* Starlight Particle Background */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.2, 0.5],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-30"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white font-outfit tracking-wide max-w-5xl mx-auto relative"
                style={{
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                  lineHeight: "1.2",
                }}
                animate={{
                  textShadow: [
                    "0 0 30px rgba(255, 255, 255, 0.4)",
                    "0 0 35px rgba(255, 255, 255, 0.6), 2px 0 0 rgba(255, 0, 255, 0.3)",
                    "0 0 30px rgba(255, 255, 255, 0.4)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Why us?
                {/* Glitch overlay */}
                <motion.span
                  className="absolute inset-0 text-white/20"
                  animate={{
                    x: [0, 2, -2, 0],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  Why Us?
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-6xl mx-auto"
            >
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light font-mulish px-2 sm:px-0 text-center"
                style={{
                  textShadow: "0 0 12px rgba(255, 255, 255, 0.15)",
                  lineHeight: "2",
                }}
              >
                <motion.span
                  className="font-semibold text-white"
                  transition={{ delay: 0.2 }}
                >
                  Expert Management
                </motion.span>{" "}
                — Our seasoned team brings years of industry expertise to guide
                your project from conception to completion, ensuring every
                detail meets the highest standards.<br/><br/>
                <motion.span
                  className="font-semibold text-white"
                  transition={{ delay: 0.4 }}
                >
                  Secure Investment
                </motion.span>{" "}
                — Your investment is protected through our transparent
                processes, milestone-based payments, and comprehensive project
                insurance that guarantees delivery.<br/><br/>
                <motion.span
                  className="font-semibold text-white"
                  transition={{ delay: 0.6 }}
                >
                  Increased Sales
                </motion.span>{" "}
                — Our data-driven approach and conversion-optimized designs have
                consistently delivered 40-60% increases in client revenue within
                the first quarter.<br/><br/>
                <motion.span
                  className="font-semibold text-white"
                  transition={{ delay: 0.8 }}
                >
                  Happy Customers
                </motion.span>{" "}
                — With a 98% client satisfaction rate and long-term partnerships
                spanning multiple projects, our commitment to excellence speaks
                for itself.
              </p>
            </motion.div>
          </section>
        </div>
      </section>

      {/* Footer with Perfect Responsive Layout */}
      <footer className="relative z-20 border-t border-white/10 backdrop-blur-xl bg-white/[0.02]">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
          {/* Main Footer Content */}
          <div className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Brand Section */}
              <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-block"
                >
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-outfit tracking-wider cursor-pointer transition-all duration-300"
                    style={{
                      textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    LUMOZION
                  </h3>
                </motion.div>
                <p
                  className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed font-mulish max-w-md mx-auto md:mx-0"
                  style={{
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
                    lineHeight: "1.7",
                  }}
                >
                   Empowering businesses through innovation, design, and
                  technology. Crafted with passion

                </p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                <h4
                  className="text-base sm:text-lg font-semibold text-white font-outfit tracking-wide"
                  style={{
                    textShadow: "0 0 12px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Navigation
                </h4>
                <nav className="space-y-2 sm:space-y-3">
                  {[
                    { name: "Home", id: "home" },
                    { name: "About", id: "about" },
                    { name: "Services", id: "services" },
                    { name: "Why Us", id: "why-us" },
                  ].map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-center md:text-left text-white/70 hover:text-white transition-all duration-300 text-sm sm:text-base font-light font-mulish group"
                      whileHover={{ x: 4 }}
                      style={{
                        textShadow: "0 0 6px rgba(255, 255, 255, 0.1)",
                        lineHeight: "1.6",
                      }}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-4 sm:py-6 md:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p
                className="text-white/60 text-xs sm:text-sm md:text-base font-light font-mulish text-center sm:text-left"
                style={{
                  textShadow: "0 0 6px rgba(255, 255, 255, 0.1)",
                  lineHeight: "1.6",
                }}
              >
                &copy; {new Date().getFullYear()} Lumozion. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <motion.a
                  href="https://www.instagram.com/lumozion?igsh=MXJqOTJvYmNvNmV1ag=="
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/15 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
                  }}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
                </motion.a>
                <motion.a
                  href="https://x.com/AshwinAsth40452"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/15 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
                  }}
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
                </motion.a>
                <motion.a
                  href="https://youtube.com/@lumozion?si=fwYDBpk8gw59EzO2"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/15 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
                  }}
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
