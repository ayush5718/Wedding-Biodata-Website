import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Family = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const familyMembers = [
    {
      relation: 'Father',
      name: 'Mr. Devendra Nath Tiwari',
      profession: 'Businessman, News Reporter at Aajtak',
      details: 'Experienced businessman and respected news reporter with strong community connections',
      image: 'https://i.ibb.co/Y4myhdGW/Chat-GPT-Image-Jun-30-2025-06-21-48-PM.png'
    },
    {
      relation: 'Mother',
      name: 'Mrs. Mousumi Tiwari',
      profession: 'Homemaker',
      details: 'Dedicated homemaker, excellent cook, and pillar of strength for the family',
      image: 'https://i.ibb.co/YB61kQkH/Whats-App-Image-2025-06-30-at-17-14-57-f7de0b73.jpg'
    },
    {
      relation: 'Sister',
      name: 'Ms. Anushree Tiwari',
      profession: 'Student/Professional',
      details: 'Loving and supportive sister, unmarried',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      relation: 'Sister',
      name: 'Ms. Bhumi Tiwari',
      profession: 'Student/Professional',
      details: 'Caring younger sister, unmarried',
      image: 'https://i.ibb.co/tgWHTPQ/Whats-App-Image-2025-06-30-at-18-15-32-bea0e00d.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero bg-pattern relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-rose rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            My <span className="text-gradient-rose">Family</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-rose mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A loving and supportive family that has shaped who I am today
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-7xl mx-auto"
        >
          {familyMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="modern-card p-4 sm:p-6 lg:p-8 group"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                    {/* Glowing Ring */}
                    <div className="absolute inset-0 bg-gradient-rose rounded-full p-1 glow-accent group-hover:animate-pulse">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to initial circle if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-rose rounded-full flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-white font-bold text-lg">
                            {member.relation.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-accent rounded-full animate-bounce opacity-70"></div>
                    <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-primary rounded-full animate-bounce opacity-60" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-gray-800 group-hover:text-gradient-primary transition-all duration-300 truncate">
                      {member.name}
                    </h3>
                    <span className="px-2 py-1 sm:px-3 bg-gradient-rose text-white text-xs sm:text-sm font-semibold rounded-full self-start sm:self-auto">
                      {member.relation}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gradient-accent mb-2 sm:mb-3">
                    {member.profession}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {member.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Family Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="modern-card p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-800 mb-4 sm:mb-6">Family Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center glass rounded-xl p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-sm sm:text-base">❤️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Love & Care</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Strong bonds built on unconditional love and mutual care</p>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-sm sm:text-base">🙏</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Respect</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Deep respect for elders and traditional values</p>
              </div>
              <div className="text-center glass rounded-xl p-4 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-white font-bold text-sm sm:text-base">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Unity</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Standing together through all of life's challenges</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Family;
