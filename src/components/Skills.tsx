import { motion } from "framer-motion";
import { Code2, Palette, Brain, Rocket } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Development",
    description: "Expert in modern web technologies and frameworks"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design",
    description: "Creating beautiful and intuitive user experiences"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Strategy",
    description: "Strategic thinking and problem-solving abilities"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Leadership",
    description: "Leading teams and driving successful projects"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};