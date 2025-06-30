import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero bg-pattern">
      {/* Modern Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-rose rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 glass-dark"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Modern Profile Image with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 glow animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                  <img
                    src="https://i.ibb.co/zWX6yZBP/Whats-App-Image-2025-06-30-at-14-42-13-3f5542be.jpg"
                    alt="Anjali Tiwari"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-accent rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-rose rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </motion.div>

          {/* Modern Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-4 sm:mb-6"
          >
            {/* Hi, I'm{' '} */}
            <span className="text-gradient-accent block md:inline">
              Anjali Tiwari
            </span>
          </motion.h1>

          {/* Modern Subtitle */}
          {/* <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl text-white/90 mb-8 font-light tracking-wide"
          >
            Associate Engineer at{' '}
            <span className="text-gradient-primary font-semibold">Tech Mahindra</span>
          </motion.h2> */}

          {/* Modern Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 max-w-4xl mx-auto"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              Welcome to my profile. I am a <span className="text-gradient-accent font-semibold">24-year-old engineer</span> working at Tech Mahindra.
              I believe in the beauty of <span className="text-gradient-primary font-semibold">traditional values</span> combined with
              <span className="text-gradient-accent font-semibold"> modern aspirations</span>.
              Let's embark on this beautiful journey of life together.
            </p>
          </motion.div>

          {/* Modern CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-bounce hover:glow group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Explore My Profile
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-bounce hover:glow-accent group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Contact Family
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
