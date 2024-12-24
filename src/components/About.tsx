import { motion } from "framer-motion";
import { GraduationCap, Users, FileText, Briefcase, Code2, Brain, Database, Globe } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Master's in AI",
      description: "Specializing in humor understanding and generation in MLLMs"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Published Research",
      description: "AI-mediated Meme Generation for Misinformation Correction"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teaching Experience",
      description: "Machine Learning & Logic for Programming"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Research Focus",
      description: "Low-level inference optimization in LLMs"
    }
  ];

  const languages = [
    { name: "Portuguese", level: "Native", progress: 100 },
    { name: "English", level: "Professional Working", progress: 90 },
    { name: "French", level: "Basic", progress: 40 },
    { name: "German", level: "Learning", progress: 20 }
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
                Currently specializing in Machine Learning and Deep Learning at Instituto Superior Técnico, 
                with a focus on humor understanding and generation in Large Language Models.
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
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Languages</h3>
              {languages.map((language) => (
                <div key={language.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}</span>
                  </div>
                  <div className="h-2 bg-black/20 rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${language.progress}%` }}
                    />
                  </div>
                </div>
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