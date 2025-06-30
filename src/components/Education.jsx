import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const educationData = [
    {
      year: '2021-2025',
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
    <section className="py-20 bg-gradient-hero bg-pattern relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-16 left-16 w-72 h-72 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Education & <span className="text-gradient-primary">Career</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            My academic journey and professional growth over the years
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-10 text-center">
              Educational Background
            </h3>
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8 }}
                className="modern-card p-8 group"
              >
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 glow group-hover:animate-pulse">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-accent rounded-full animate-bounce opacity-70"></div>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-800 mb-4">{item.degree}</h4>
                  <div className="inline-block glass px-6 py-2 rounded-full text-sm font-semibold mb-4 text-gray-700">
                    {item.year}
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-3">{item.institution}</p>
                  <p className="text-gray-600 mb-4">{item.stream}</p>
                  <div className="inline-block bg-gradient-accent text-white px-6 py-2 rounded-full font-bold">
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
            <h3 className="text-3xl font-display font-bold text-white mb-10 text-center">
              Current Profession
            </h3>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="modern-card p-8 group"
            >
              <div className="text-center mb-8">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-rose rounded-full p-1 glow-accent group-hover:animate-pulse">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
                      {currentProfession.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full animate-bounce opacity-70"></div>
                </div>
                <h4 className="text-2xl font-display font-bold text-gray-800 mb-4">{currentProfession.position}</h4>
                <div className="inline-block glass px-6 py-2 rounded-full text-sm font-semibold mb-4 text-gray-700">
                  {currentProfession.startYear} - Present
                </div>
                <p className="text-xl font-semibold text-gray-700 mb-4">{currentProfession.company}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{currentProfession.description}</p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h5 className="text-xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Key Responsibilities
                </h5>
                <ul className="space-y-3">
                  {currentProfession.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="w-3 h-3 bg-gradient-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Education;
