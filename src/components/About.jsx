import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const personalDetails = [
    { label: 'Full Name', value: 'Anjali Tiwari' },
    { label: 'Age', value: '23 Years' },
    { label: 'Profession', value: 'Associate Engineer at Tech Mahindra' },
    { label: 'Location', value: 'Jhargram, West Bengal' },
    { label: 'Education', value: 'B.Tech Engineering' },
    { label: 'Marital Status', value: 'Unmarried' }
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
    <section id="about" className="py-20 bg-gradient-hero bg-pattern relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-rose rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Get to know me better through my personal details and background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              {/* Main Image with Glassmorphism Frame */}
              <div className="relative w-80 h-96 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl p-1 glow animate-pulse">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white p-2">
                    <img
                      src="https://i.ibb.co/gF4LVXGs/Whats-App-Image-2025-06-30-at-00-03-19-f2d977c1.jpg"
                      alt="Anjali Tiwari"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-accent rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-rose rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-primary rounded-full animate-float opacity-70"></div>
                <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-gradient-accent rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </motion.div>

          {/* Modern Details Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="modern-card p-8"
            >
              <h3 className="text-3xl font-display font-bold text-gray-800 mb-8">Personal Details</h3>
              <div className="grid gap-4 mb-8">
                {personalDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center p-4 glass rounded-2xl hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="font-medium text-gray-700">{detail.label}:</span>
                    <span className="font-bold text-gray-900">{detail.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="modern-card p-8"
            >
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                About Myself
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                I am a <span className="text-gradient-accent font-semibold">23-year-old Associate Engineer</span> at Tech Mahindra, originally from Jhargram.
                I am a caring, family-oriented person who believes in maintaining a balance between
                <span className="text-gradient-primary font-semibold"> tradition and modernity</span>. I value honesty, respect, and understanding in relationships.
                I enjoy spending quality time with my family, which includes my parents and two sisters.
                I am looking forward to starting a new chapter of life with someone who shares
                similar values and aspirations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
