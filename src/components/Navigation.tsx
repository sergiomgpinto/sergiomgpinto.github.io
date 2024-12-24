import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Music2, BookOpen, Brain } from "lucide-react";

export const Navigation = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:your.email@example.com", label: "Email" },
    { icon: <Music2 className="w-5 h-5" />, href: "https://soundcloud.com/yourusername", label: "SoundCloud" },
    { icon: <BookOpen className="w-5 h-5" />, href: "https://goodreads.com/yourusername", label: "Goodreads" },
    { icon: <Brain className="w-5 h-5" />, href: "https://huggingface.co/yourusername", label: "HuggingFace" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-white font-bold text-xl"
          >
            SP
          </motion.div>
          <div className="flex items-center space-x-6">
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
      </div>
    </motion.nav>
  );
};