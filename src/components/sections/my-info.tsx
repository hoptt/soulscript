"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExperienceCard } from "./experience-card";
import { EXPERIENCE_DATA } from "@/data/experience";
import ScrollReveal from "@/components/common/scroll-reveal";

function getTotalCareerDuration(): string {
  const totalMonths = EXPERIENCE_DATA.reduce((acc, exp) => {
    const match = exp.duration.match(/(\d+)년\s*(\d+)?개월/);
    if (!match) return acc;
    const years = parseInt(match[1], 10);
    const months = match[2] ? parseInt(match[2], 10) : 0;
    return acc + years * 12 + months;
  }, 0);
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  return `${y}년 ${m}개월`;
}

export default function MyInfo() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([0]));
  const totalDuration = getTotalCareerDuration();
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const timelineLineInView = useInView(timelineLineRef, { once: true, margin: "-50px 0px" });

  const handleToggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="experience" className="relative py-16 sm:py-20">
      {/* 배경 구분선 */}
      <div className="absolute top-0 left-6 right-6 sm:left-10 sm:right-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-screen-lg mx-auto px-6 sm:px-10">
        {/* 섹션 넘버링 */}
        <ScrollReveal delay={0} direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-sm text-amber-400/40 tracking-widest select-none">03</span>
            <div className="h-px w-12 bg-amber-400/30" />
            <span className="font-mono text-xs text-amber-400/40 tracking-widest uppercase select-none">{"// experience"}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05} direction="up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-2">주요 경력</h2>
          <p className="text-sm text-gray-500 font-mono mb-10">
            {EXPERIENCE_DATA.length}개 회사에서 총 {totalDuration}의 경험을 쌓았습니다.
          </p>
        </ScrollReveal>

        {/* 타임라인 + 경력 카드 */}
        <div className="relative pl-4 sm:pl-6">
          {/* 타임라인 세로선 */}
          <motion.div
            ref={timelineLineRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: timelineLineInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent"
          />

          {EXPERIENCE_DATA.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="relative mb-6 last:mb-0">
                {/* 타임라인 dot */}
                <div className="absolute -left-[21px] sm:-left-[29.5px] top-5 w-2.5 h-2.5">
                  {/* 퍼지는 pulse 링 (CSS only) */}
                  <span className="absolute inset-0 left-[2px] top-[1px] rounded-full bg-amber-400/20 animate-ping" />
                  {/* 도트 원 */}
                  <div className="relative w-3 h-3 rounded-full bg-gray-900 border-2 border-amber-400/50 flex items-center justify-center">
                    {/* 열려있을 때 내부 원 */}
                    <span
                      className={`rounded-full bg-amber-400 transition-all duration-300 ease-in-out ${
                        openIndices.has(index)
                          ? "w-1 h-1 opacity-100 scale-100"
                          : "w-0 h-0 opacity-0 scale-0"
                      }`}
                    />
                  </div>
                </div>

                <ExperienceCard
                  {...exp}
                  isOpen={openIndices.has(index)}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
