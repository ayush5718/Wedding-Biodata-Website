import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const contactDetails = [
    {
      person: 'Father',
      name: 'Mr. Devendra Nath Tiwari',
      phone: '+91 98765 43210',
      email: 'devendra.tiwari@email.com',
      icon: '👨‍💼'
    },
    {
      person: 'Mother',
      name: 'Mrs. Mousumi Tiwari',
      phone: '+91 98765 43211',
      email: 'mousumi.tiwari@email.com',
      icon: '👩‍💼'
    }
  ];

  const additionalInfo = [
    {
      label: 'Best Time to Call',
      value: '6:00 PM - 9:00 PM',
      icon: '🕕'
    },
    {
      label: 'Preferred Language',
      value: 'Hindi / English',
      icon: '🗣️'
    },
    {
      label: 'Location',
      value: 'Jhargram, West Bengal',
      icon: '📍'
    },
    {
      label: 'Available for Meeting',
      value: 'Weekends & Evenings',
      icon: '📅'
    }
  ];

  const socialLinks = [
    { platform: 'WhatsApp', icon: '💬', color: 'from-green-400 to-green-600',link: 'https://wa.me/919732552082' },// replace with actual WhatsApp number },
    { platform: 'Email', icon: '📧', color: 'from-blue-400 to-blue-600',link: 'mailto:devendra.tiwari@email.com' },
    { platform: 'Phone', icon: '📞', color: 'from-purple-400 to-purple-600' , link: 'tel:+919876543210'}
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
        <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-rose rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-88 h-88 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2.8s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Get In <span className="text-gradient-rose">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-rose mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We welcome inquiries from interested families. Please feel free to reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-10">Contact Information</h3>

            {contactDetails.map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8 }}
                className="modern-card p-8 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center text-2xl glow-accent group-hover:animate-pulse">
                      {contact.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-primary rounded-full animate-bounce opacity-70"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-display font-bold text-gray-800 mb-3 group-hover:text-gradient-rose transition-all duration-300">{contact.name}</h4>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{contact.person}</p>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 glass rounded-xl">
                        <span className="text-xl mr-4">📞</span>
                        <span className="text-gray-700 font-medium">{contact.phone}</span>
                      </div>
                      <div className="flex items-center p-3 glass rounded-xl">
                        <span className="text-xl mr-4">📧</span>
                        <span className="text-gray-700 font-medium">{contact.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-10">Additional Information</h3>

            <div className="modern-card p-8">
              <div className="space-y-5">
                {additionalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{info.icon}</span>
                      <span className="font-medium text-gray-700 text-lg">{info.label}:</span>
                    </div>
                    <span className="text-gray-900 font-bold">{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Quick Contact</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    target={link.platform === 'Email' || link.platform === 'Phone' ? '_self' : '_blank'}
                    rel={link.platform === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${link.color} p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 block cursor-pointer`}
                  >
                    <div className="text-2xl mb-2 ">{link.icon}</div>
                    <div className="text-sm font-medium text-white">{link.platform}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <div className="modern-card p-10 max-w-5xl mx-auto">
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-accent rounded-full p-1 glow-accent animate-pulse">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
                  🙏
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-8">Thank You</h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-xl">
              Thank you for taking the time to go through my profile. We believe that the right
              match is made in heaven, and we hope to find that special connection. We look forward
              to hearing from families who feel we might be compatible.
            </p>
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-800 font-medium text-lg italic">
                "May this journey lead us to a beautiful beginning filled with love, understanding, and happiness."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Modern Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg font-medium">
              © 2024 Anjali Tiwari - Marriage Biodata Portfolio
            </p>
            <p className="text-gray-600">
              Created with love and hope for a beautiful future together
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Contact;
