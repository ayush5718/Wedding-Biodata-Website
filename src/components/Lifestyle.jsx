import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Lifestyle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const hobbies = [
   {
  icon: '🎨',
  title: 'Art and Craft',
  description: 'Enjoy creating handmade crafts and exploring various art forms',
  color: 'from-pink-400 to-red-600'
},
    {
      icon: '🍳',
      title: 'Cooking',
      description: 'Enjoy experimenting with traditional and modern recipes',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: '🎵',
      title: 'Music',
      description: 'Classical music enthusiast, also enjoy Bollywood songs',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🧘‍♀️',
      title: 'Yoga & Meditation',
      description: 'Daily practice for physical and mental well-being',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: '✈️',
      title: 'Traveling',
      description: 'Love exploring new places and experiencing different cultures',
      color: 'from-indigo-400 to-purple-500'
    },
    // {
    //   icon: '🎨',
    //   title: 'Art & Crafts',
    //   description: 'Enjoy painting, sketching, and DIY home decoration',
    //   color: 'from-pink-400 to-rose-500'
    // }
  ];

  const lifestyle = [
    {
      category: 'Health & Fitness',
      items: ['Regular yoga practice', 'Balanced vegetarian diet', 'Morning walks', 'Adequate sleep routine']
    },
    {
      category: 'Social Life',
      items: ['Close-knit friend circle', 'Family gatherings', 'Community involvement', 'Cultural events participation']
    },
    {
      category: 'Personal Values',
      items: ['Honesty and integrity', 'Respect for traditions', 'Continuous learning', 'Helping others']
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
        <div className="absolute top-24 right-24 w-88 h-88 bg-gradient-rose rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-24 left-24 w-96 h-96 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1.8s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Lifestyle & <span className="text-gradient-rose">Hobbies</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-rose mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The activities and values that bring joy and meaning to my life
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="modern-card p-8 text-center group"
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 glow group-hover:animate-pulse">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
                    {hobby.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-accent rounded-full animate-bounce opacity-70"></div>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-4 group-hover:text-gradient-primary transition-all duration-300 text-center">
                {hobby.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Lifestyle Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-10"
        >
          {lifestyle.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -8 }}
              className="modern-card p-8 group"
            >
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center group-hover:text-gradient-primary transition-all duration-300">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + itemIndex * 0.1 }}
                    className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                  >
                    <div className="w-3 h-3 bg-gradient-rose rounded-full mr-4 flex-shrink-0 animate-pulse"></div>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-6xl text-indigo-200 mb-4">"</div>
            <p className="text-xl text-gray-700 italic leading-relaxed mb-4">
              Life is a beautiful journey when filled with love, laughter, and meaningful connections. 
              I believe in living each day with gratitude and spreading positivity wherever I go.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lifestyle;
