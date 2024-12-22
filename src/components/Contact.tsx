import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 prose-content"
        >
          Interested in collaboration? Let's connect and discuss how we can work together.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a href="mailto:your.email@example.com" className="p-3 rounded-full bg-background hover:bg-background/80 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background hover:bg-background/80 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background hover:bg-background/80 transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};