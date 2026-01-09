import React from "react";
import { SKILLS } from "../../../../OneDrive/Desktop/portfolio/src/constants";

const SkillBar: React.FC<{
  name: string;
  percentage: number;
  level: string;
}> = ({ name, percentage, level }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-white tracking-wide">{name}</span>
      <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-tighter">
        {level}
      </span>
    </div>
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#D4AF37] transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const categories = ["Cloud", "DevOps", "Frontend", "Backend"] as const;

  return (
    <section id="skills" className="py-24 px-6 bg-[#002624] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.5em] uppercase mb-2">
            Technical Proficiency
          </h2>
          <h3 className="text-4xl font-serif">A Hybrid Skillset.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-8">
              <h4 className="text-xl font-bold border-b border-[#D4AF37]/30 pb-2 mb-6">
                {category}{" "}
                <span className="text-gray-400 font-normal">Expertise</span>
              </h4>
              {SKILLS.filter((s) => s.category === category).map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  level={skill.level}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
