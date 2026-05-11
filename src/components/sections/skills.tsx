"use client";

import ScrollReveal from "@/components/common/scroll-reveal";
import {
  SKILL_CATEGORIES,
  SKILLS_DATA,
  type SkillCategory,
  type SkillItem,
} from "@/data/skills";
import Image from "next/image";

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  'Markup/Style': "Markup/Style",
  Language: "Language",
  Framework: "Framework",
  Library: "Library",
  Tool: "Tool",
  AI: "AI",
};

function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <div className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-gray-800 bg-gray-800/30 hover:bg-gray-800/70 hover:border-amber-400/30 transition-all duration-200 cursor-default">
      {skill.icon ? (
        <div className="relative w-4 h-4 flex-shrink-0">
          <Image
            alt={skill.name}
            src={skill.icon}
            fill
            className="object-contain"
            sizes="16px"
          />
        </div>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
      )}
      <span className="text-sm font-mono text-gray-400 truncate">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const grouped = SKILL_CATEGORIES.reduce<Record<SkillCategory, SkillItem[]>>(
    (acc, cat) => {
      acc[cat] = SKILLS_DATA.filter((s) => s.category === cat);
      return acc;
    },
    { 'Markup/Style': [], Framework: [], Language: [], Library: [], Tool: [], AI: [] }
  );

  return (
    <section id="skills" className="relative py-16 sm:py-20">
      {/* 배경 구분선 */}
      <div className="absolute top-0 left-6 right-6 sm:left-10 sm:right-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-screen-lg mx-auto px-6 sm:px-10">
        {/* 섹션 넘버링 */}
        <ScrollReveal delay={0} direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-sm text-amber-400/40 tracking-widest select-none">
              04
            </span>
            <div className="h-px w-12 bg-amber-400/30" />
            <span className="font-mono text-xs text-amber-400/40 tracking-widest uppercase select-none">
              {"// skills"}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05} direction="up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-2">
            기술 스택
          </h2>
          <p className="text-sm text-gray-500 font-mono mb-10">
            현재까지 사용해온 기술들입니다.
          </p>
        </ScrollReveal>

        {/* 카테고리별 그리드 */}
        <div className="space-y-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <ScrollReveal
              key={category}
              delay={catIdx * 0.08}
              direction="up"
            >
              <div>
                {/* 카테고리 헤더 */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-amber-400/60 tracking-widest">
                    {"["}
                  </span>
                  <span className="font-mono text-xs text-amber-400/80 tracking-wider uppercase">
                    {CATEGORY_LABELS[category]}
                  </span>
                  <span className="font-mono text-xs text-amber-400/60 tracking-widest">
                    {"]"}
                  </span>
                  <div className="flex-1 h-px bg-gray-800 ml-1" />
                </div>

                {/* 스킬 카드 그리드 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {grouped[category].map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
