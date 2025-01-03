import { motion } from "framer-motion";

export const Contact = () => {

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    window.history.pushState({}, '', '/');
  }

  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1garNpMQV9tLEPcYVXvO4Khs4Nrxf2lGi/view?usp=sharing';
    window.open(cvUrl, '_blank');
  };

  return (
      <section id="contact" className="bg-secondary py-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-8"
        >
          <div className="flex flex-col md:flex-row justify-left gap-16 md:gap-32">
            <div>
              <h3 className="text-gray-400 font-medium mb-6">Pages</h3>
              <div className="space-y-4">
                <motion.a
                    whileHover={{ x: 5 }}
                    className="block text-white hover:text-primary transition-colors cursor-pointer"
                    onClick={handleHomeClick}
                >
                  Home
                </motion.a>
                <motion.a
                    whileHover={{ x: 2 }}
                    className="block text-white hover:text-primary cursor-not-allowed opacity-50 transition-colors"
                >
                  Blog (soon)
                </motion.a>
                <motion.a
                    whileHover={{ x: 2 }}
                    className="block text-white hover:text-primary cursor-not-allowed opacity-50 transition-colors"
                >
                  Projects (soon)
                </motion.a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <motion.a
                    href="mailto:sergiomgpintoo@gmail.com"
                    whileHover={{ x: 5 }}
                    className="block text-white hover:text-primary transition-colors"
                >
                  Gmail
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/s%C3%A9rgio-pinto-5696a11a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="block text-white hover:text-primary transition-colors"
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-6">
                Resources
              </h3>
              <div className="space-y-4">
                <motion.a
                    onClick={handleDownloadCV}
                    whileHover={{ x: 5 }}
                    className="block text-white hover:text-primary transition-colors cursor-pointer"
                    target="_blank"
                >
                  View CV
                </motion.a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 Sérgio Pinto. All Rights Reserved.
              </p>
              <p className="text-gray-400 text-sm text-center md:text-left">
                Made by Sérgio Pinto | Powered by{" "}
                <a
                    href="https://lovable.dev/"
                    target="_blank"
                    className="text-gray-400 underline"
                >
                  lovable.dev
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
  );
};