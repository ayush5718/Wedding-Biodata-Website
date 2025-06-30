import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Horoscope = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const horoscopeDetails = [
    { label: 'Date of Birth', value: '08/01/2001', icon: '📅' },
    { label: 'Place of Birth', value: 'Jhargram', icon: '📍' },
    { label: 'Gotra', value: 'Sabran', icon: '🕉️' },
    { label: 'Rashi (Moon Sign)', value: 'Gemini (Mithun)', icon: '🌙' },
    { label: 'Gan', value: 'Manushya', icon: '⭐' },
    { label: 'Manglik Status', value: 'No', icon: '🔴' },
    { label: 'Blood Group', value: 'O+', icon: '🩸' },
    { label: 'Caste', value: 'Brahmin', icon: '🙏' }
  ];

  const additionalInfo = [
    {
      title: 'Kundali Matching',
      description: 'Complete horoscope available for detailed matching. All astrological details can be shared with interested families.',
      icon: '📊'
    },
    {
      title: 'Auspicious Time',
      description: 'Born during Brahma Muhurta, considered highly auspicious according to Vedic astrology.',
      icon: '🌅'
    },
    {
      title: 'Planetary Position',
      description: 'Favorable planetary positions indicating good fortune, health, and prosperity in married life.',
      icon: '🪐'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-hero bg-pattern relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-rose rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Horoscope <span className="text-gradient-accent">Details</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Astrological information for kundali matching and compatibility
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Horoscope Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="modern-card p-8">
              <h3 className="text-3xl font-display font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                <span className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </span>
                Birth Details
              </h3>
              <div className="grid gap-4">
                {horoscopeDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{detail.icon}</span>
                      <span className="font-medium text-gray-700">{detail.label}</span>
                    </div>
                    <span className="text-gray-900 font-bold">{detail.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Astrological Insights
            </h3>
            {additionalInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-xl">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Kundali Chart Placeholder */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="modern-card p-8 text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 glow group-hover:animate-pulse">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-5xl">
                    🔮
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-accent rounded-full animate-bounce opacity-70"></div>
              </div>
              <h4 className="text-2xl font-display font-bold text-gray-800 mb-4">
                Complete Kundali Available
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Detailed birth chart with all planetary positions available for serious inquiries
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="modern-card p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-accent rounded-full p-1 glow-accent animate-pulse">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-2xl">
                    📋
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-6">Important Note</h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg mb-8">
              Complete horoscope details including detailed kundali, planetary positions,
              and compatibility analysis are available upon request. We believe in the
              importance of astrological compatibility along with personal compatibility
              for a harmonious married life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent text-lg px-8 py-4 rounded-2xl font-semibold transition-bounce hover:glow-accent"
            >
              Request Complete Kundali
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Horoscope;
