import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Preference = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const preferences = [
    {
      category: 'Basic Requirements',
      icon: '👤',
      items: [
        { label: 'Age Range', value: '28-35 years', icon: '🎂' },
        { label: 'Height', value: '5\'6" and above', icon: '📏' },
        { label: 'Marital Status', value: 'Unmarried', icon: '💍' },
        { label: 'Religion', value: 'Hindu', icon: '🕉️' }
      ]
    },
    {
      category: 'Education & Career',
      icon: '🎓',
      items: [
        { label: 'Education', value: 'Graduate or Post-Graduate', icon: '📚' },
        { label: 'Profession', value: 'Well-established career', icon: '💼' },
        { label: 'Income', value: 'Financially stable', icon: '💰' },
        { label: 'Work Location', value: 'Metro cities preferred', icon: '🏙️' }
      ]
    },
    {
      category: 'Personal Qualities',
      icon: '❤️',
      items: [
        { label: 'Nature', value: 'Kind, understanding, and respectful', icon: '😊' },
        { label: 'Family Values', value: 'Family-oriented and traditional', icon: '👨‍👩‍👧‍👦' },
        { label: 'Lifestyle', value: 'Balanced and health-conscious', icon: '🧘‍♂️' },
        { label: 'Interests', value: 'Shared hobbies and interests', icon: '🎨' }
      ]
    },
    {
      category: 'Family Background',
      icon: '🏠',
      items: [
        { label: 'Family Type', value: 'Respectable and well-cultured', icon: '👑' },
        { label: 'Values', value: 'Traditional with modern outlook', icon: '⚖️' },
        { label: 'Location', value: 'Any major city in India', icon: '🗺️' },
        { label: 'Background', value: 'Similar social background', icon: '🤝' }
      ]
    }
  ];

  const importantNotes = [
    {
      title: 'Compatibility',
      description: 'Looking for someone who values both tradition and progress, with whom I can build a loving and understanding relationship.',
      icon: '💕'
    },
    {
      title: 'Mutual Respect',
      description: 'Believe in equality and mutual respect in marriage. Both partners should support each other\'s dreams and aspirations.',
      icon: '🤝'
    },
    {
      title: 'Family Integration',
      description: 'Someone who can blend well with our family and values the importance of family bonds and relationships.',
      icon: '👨‍👩‍👧‍👦'
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
        <div className="absolute top-28 right-28 w-88 h-88 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-28 left-28 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Partner <span className="text-gradient-primary">Preferences</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Looking for a life partner who shares similar values and aspirations
          </p>
        </motion.div>

        {/* Preferences Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {preferences.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="modern-card p-8 group"
            >
              <div className="flex items-center mb-8">
                <div className="relative w-16 h-16 mr-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 glow group-hover:animate-pulse">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-2xl">
                      {category.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-accent rounded-full animate-bounce opacity-70"></div>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 group-hover:text-gradient-primary transition-all duration-300">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-5">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + itemIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{item.icon}</span>
                      <span className="font-medium text-gray-700 text-lg">{item.label}:</span>
                    </div>
                    <span className="text-gray-900 font-bold">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-10 text-center">
            What I Value Most
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {importantNotes.map((note, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -8 }}
                className="modern-card p-8 text-center group"
              >
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-rose rounded-full p-1 glow-accent group-hover:animate-pulse">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
                      {note.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-primary rounded-full animate-bounce opacity-70"></div>
                </div>
                <h4 className="text-xl font-display font-bold text-gray-800 mb-4 group-hover:text-gradient-rose transition-all duration-300">
                  {note.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {note.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="modern-card p-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-gradient-accent rounded-full p-1 glow-accent animate-pulse">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
                    💝
                  </div>
                </div>
              </div>
            </div>
            <div className="text-6xl text-gradient-accent mb-6 font-display">"</div>
            <p className="text-2xl text-gray-700 italic leading-relaxed mb-8 font-display">
              I believe that marriage is not just the union of two individuals, but the coming together
              of two families and two hearts. I am looking for a partner who will be my best friend,
              my companion, and my support system through all of life's beautiful moments.
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 font-medium text-lg">
              Open to meeting families who feel we might be a good match.
              Let's take this journey together with understanding and respect.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Preference;
