import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const educationData = [
    {
      year: '2020-2024',
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Techno International Newtown',
      grade: '8+',
      stream: 'Information Technology',
      icon: '🎓'
    }
  ];

  const currentProfession = {
    position: 'Associate Engineer',
    company: 'Tech Mahindra',
    startYear: '2024',
    description: 'Working as an Associate Engineer, contributing to various technical projects and gaining valuable industry experience',
    responsibilities: [
      'Working on technical projects and solutions',
      'Collaborating with senior engineers and team members',
      'Learning and implementing new technologies',
      'Contributing to project development and delivery'
    ],
    icon: '👩‍💻'
  };

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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero bg-pattern relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-16 left-16 w-72 h-72 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
            Education & <span className="text-gradient-primary">Career</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            My academic journey and professional growth over the years
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 lg:mb-10 text-center">
              Educational Background
            </h3>
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8 }}
                className="modern-card p-4 sm:p-6 lg:p-8 group"
              >
                <div className="text-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 glow group-hover:animate-pulse">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-accent rounded-full animate-bounce opacity-70"></div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">{item.degree}</h4>
                  <div className="inline-block glass px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-700">
                    {item.year}
                  </div>
                  <p className="text-base sm:text-lg font-medium text-gray-700 mb-2 sm:mb-3 break-words">{item.institution}</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{item.stream}</p>
                  <div className="inline-block bg-gradient-accent text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base">
                    Grade: {item.grade}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Current Profession Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 lg:mb-10 text-center">
              Current Profession
            </h3>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="modern-card p-4 sm:p-6 lg:p-8 group"
            >
              <div className="text-center mb-6 sm:mb-8">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-rose rounded-full p-1 glow-accent group-hover:animate-pulse">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                      {currentProfession.icon}
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-primary rounded-full animate-bounce opacity-70"></div>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">{currentProfession.position}</h4>
                <div className="inline-block glass px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-700">
                  {currentProfession.startYear} - Present
                </div>
                <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">{currentProfession.company}</p>
                <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base px-2">{currentProfession.description}</p>
              </div>

              {/* <div className="glass rounded-xl lg:rounded-2xl p-4 sm:p-6">
                <h5 className="text-lg sm:text-xl font-display font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Key Responsibilities
                </h5>
                <ul className="space-y-2 sm:space-y-3">
                  {currentProfession.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-accent rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed text-sm sm:text-base">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Education;
