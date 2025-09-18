import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 90, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Laravel", level: 60, category: "backend" },
  { name: "Spring boot", level: 60, category: "backend" },
  

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

   // Data Science
  { name: "Python", level: 90, category: "datascience" },
  { name: "NumPy", level: 85, category: "datascience" },
  { name: "Pandas", level: 85, category: "datascience" },
  { name: "Matplotlib", level: 80, category: "datascience" },
  { name: "Seaborn", level: 80, category: "datascience" },
  
   // Mobile Development
  { name: "Flutter", level: 80, category: "mobile" },
  { name: "Dart", level: 70, category: "mobile" },
  
  
  // Mobile Tools
  { name: "Android Studio", level: 80, category: "tools" },
  { name: "Firebase", level: 75, category: "tools" },
];

const categories = ["all","frontend", "backend","datascience","tools","mobile"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
    );
  return <section id="skills" className="py-24 px-4 relative bg-secondary/30"
  >
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="flec flex-wrap justify-center gap-4 mb-10">
        {categories.map((category, key)=> (
          <button 
          key={key}
          onClick={() => setActiveCategory(category)}
          className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
          )}
          >{category}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill,key)=> (
          <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
          >
            <div className="text-left mb-4">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>

            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-x-hidden">
            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>
            </div>

            <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
};