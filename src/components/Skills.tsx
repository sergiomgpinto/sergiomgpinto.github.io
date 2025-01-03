import { motion } from "framer-motion";
import { Code2, Database, Brain, Globe, Server, Cpu } from "lucide-react";

export const Skills = () => {
  const techStack = {
    'Languages': {
      icon: <Code2 className="w-8 h-8" />,
      skills: ['Python', 'SQL', 'Javascript', 'CUDA (Learning)']
    },
    'ML & Data': {
      icon: <Brain className="w-8 h-8" />,
      skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'LangChain', 'Numba', 'llama.cpp']
    },
    'Web & APIs': {
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'Flask', 'REST']
    },
    'Databases': {
      icon: <Database className="w-8 h-8" />,
      skills: ['ChromaDB', 'NoSQL', 'SQLAlchemy']
    },
    'Infrastructure': {
      icon: <Server className="w-8 h-8" />,
      skills: ['Docker', 'Kubernetes', 'AWS']
    },
    'Tools': {
      icon: <Cpu className="w-8 h-8" />,
      skills: ['Framer', 'Firebase', 'Figma']
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, { icon, skills }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="mb-4 text-primary">{icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-black/20 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};