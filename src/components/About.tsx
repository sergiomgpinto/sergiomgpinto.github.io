import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-content text-lg text-muted-foreground space-y-6"
        >
          <p>
            With [X] years of experience in [Your Field], I've developed a deep understanding of [Key Areas]. 
            My journey has been focused on creating meaningful impact through [Your Expertise].
          </p>
          <p>
            I believe in [Your Philosophy/Approach] and have successfully [Key Achievement]. 
            My goal is to [Your Mission/Vision].
          </p>
        </motion.div>
      </div>
    </section>
  );
};