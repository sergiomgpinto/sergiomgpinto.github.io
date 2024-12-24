import { motion } from "framer-motion";
import { GraduationCap, Users, FileText, Briefcase } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Master's Degree",
      description: "Completing in June 2024"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teaching Experience",
      description: "Very Good student evaluations"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Research Paper",
      description: "Meme generation for misinformation correction"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Goal",
      description: "Seeking ML internship positions for July 2025"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground">
                I'm passionate about artificial intelligence and its potential to transform our world. 
                Currently pursuing expertise in machine learning and deep learning, with a focus on 
                natural language processing and computer vision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="text-primary mb-2">{achievement.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Sérgio with his parrot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};