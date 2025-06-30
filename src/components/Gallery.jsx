import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
    id: 1,
    src: 'https://i.ibb.co/9k6YHgRc/Whats-App-Image-2025-06-29-at-16-19-00-b168a97f.jpg',
    alt: 'Graceful Portrait in Yellow Ethnic Wear',
    category: 'Portrait Look'
  },
  {
    id: 2,
    src: 'https://i.ibb.co/JRgb1Wd7/Whats-App-Image-2025-06-30-at-16-49-01-31a35e94.jpg',
    alt: 'Traditional Close-Up with a Warm Smile',
    category: 'Cultural Attire'
  },
  {
    id: 3,
    src: 'https://i.ibb.co/h1dxfjMq/Whats-App-Image-2025-06-29-at-22-49-14-19dc3bbd.jpg',
    alt: 'Casual Elegance in Light Green Kurti',
    category: 'Casual Ethnic'
  },
  {
    id: 4,
    src: 'https://i.ibb.co/rGP0ppJB/Whats-App-Image-2025-06-29-at-22-49-15-f87b9233.jpg',
    alt: 'Professional Pose at Cultural Event',
    category: 'Poised & Confident'
  },
  {
    id: 5,
    src: 'https://i.ibb.co/8D1qWS6w/Whats-App-Image-2025-06-29-at-22-49-15-9a620cb2.jpg',
    alt: 'Family Gathering Moment in Red Suit',
    category: 'Family Function'
  },
  {
    id: 6,
    src: 'https://i.ibb.co/Z445dMh/Whats-App-Image-2025-06-29-at-22-49-24-2ff19191.jpg',
    alt: 'Relaxed Outdoor Shot with Rustic Backdrop',
    category: 'Outdoor Candid'
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-hero bg-pattern relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-rose rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2.2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Photo <span className="text-gradient-accent">Gallery</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A glimpse into my life through various moments and occasions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer modern-card p-2"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {image.category}
                  </span>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-gray-700 text-lg">👁️</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="relative max-w-5xl max-h-[90vh] modern-card p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="w-12 h-12 bg-gradient-accent text-white rounded-full flex items-center justify-center glow-accent hover:bg-gradient-rose transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <h3 className="text-white text-2xl font-display font-bold mb-3">{selectedImage.alt}</h3>
                  <span className="inline-block glass text-white px-4 py-2 rounded-full font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3">📸</span>
              <h3 className="text-xl font-bold text-gray-800">Photo Gallery Note</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              More photos are available upon request. All photos are recent and represent 
              different aspects of my personality and lifestyle. Family photos and additional 
              pictures can be shared during the meeting process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
