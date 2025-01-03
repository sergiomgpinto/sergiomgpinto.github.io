import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiSoundcloud,
  SiGoodreads,
  SiHuggingface,
  SiLeetcode,
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiX,
  SiGooglescholar
} from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import { InfiniteMarquee } from "@/components/ui/infinite_disclaimer.tsx";

export const Navigation = () => {
  const socialLinks = [
    { icon: <SiGithub className="w-5 h-5" />, href: "https://github.com/sergiomgpinto", label: "GitHub" },
    { icon: <SiLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/s%C3%A9rgio-pinto-5696a11a3/", label: "LinkedIn" },
    { icon: <SiX className="w-5 h-5" />, href: "https://x.com/sergiomgpintoo", label: "X" },
    { icon: <SiGmail className="w-5 h-5" />, href: "mailto:sergiomgpintoo@gmail.com", label: "Email" },
    { icon: <SiGooglescholar className="w-5 h-5" />, href: "https://scholar.google.com/citations?user=5eU3qMYAAAAJ&hl=en&oi=sra", label: "Google Scholar" },
    { icon: <SiSoundcloud className="w-5 h-5" />, href: "https://soundcloud.com/miguel-pinto-623090307", label: "SoundCloud" },
    { icon: <SiGoodreads className="w-5 h-5" />, href: "https://www.goodreads.com/user/show/160986189-s-rgio-pinto", label: "Goodreads" },
    { icon: <SiHuggingface className="w-5 h-5" />, href: "https://huggingface.co/sergiogpinto", label: "HuggingFace" },
    { icon: <SiLeetcode className="w-5 h-5" />, href: "https://leetcode.com/u/sergiomgpinto/", label: "LeetCode" }
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', '/');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-2">
            <motion.div
                onClick={handleLogoClick}
                whileHover={{ scale: 1.2, color: "#0EA5E9" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white hover:text-primary transition-colors cursor-pointer font-bold text-xl md:text-base"
            >
              SP
            </motion.div>

            {/* Menu Toggle for Mobile */}
            <div className="md:hidden">
              <button
                  onClick={toggleMenu}
                  className="text-white hover:text-primary focus:outline-none"
                  aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                    <HiX className="w-8 h-8" />
                ) : (
                    <HiMenu className="w-8 h-8" />
                )}
              </button>
            </div>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                  <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: "#0EA5E9" }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1 }
                      }}
                      className="text-white hover:text-primary transition-colors"
                      aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu (Visible when isMenuOpen is true) */}
          {isMenuOpen && (
              <div className="md:hidden px-2 pt-2 pb-3 sm:px-3">
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link) => (
                      <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white flex justify-center items-center p-2 rounded-md"
                      >
                        {link.icon}
                      </a>
                  ))}
                </div>
              </div>
          )}
        </div>
        <InfiniteMarquee />
      </motion.nav>
  );
};

export default Navigation;