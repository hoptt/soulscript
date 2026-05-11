"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import ScrollReveal from "@/components/common/scroll-reveal";
import { JOURNEY_DATA } from "@/data/journey";
import JourneyRunner from "./journey-runner";

const phaseVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.55 + i * 0.12, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { once: true, margin: "-80px 0px" });

  return (
    <section id="journey" className="relative py-16 sm:py-20">
      {/* 상단 구분선 */}
      <div className="absolute top-0 left-6 right-6 sm:left-10 sm:right-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-screen-lg mx-auto px-6 sm:px-10">
        {/* 섹션 헤더 */}
        <ScrollReveal delay={0} direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-sm text-amber-400/40 tracking-widest select-none">
              02
            </span>
            <div className="h-px w-12 bg-amber-400/30" />
            <span className="font-mono text-xs text-amber-400/40 tracking-widest uppercase select-none">
              {"// journey"}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05} direction="up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-2">
            달려온 길
          </h2>
          <p
            className="text-sm text-gray-500 font-mono mb-12"
            style={{ wordBreak: "keep-all" }}
          >
            지나온 시간들을 짧게 정리했습니다.
          </p>
        </ScrollReveal>

        {/* 타임라인 트랙 */}
        <div ref={trackRef} className="relative">
          <div className="relative flex flex-col gap-10 md:flex-row md:gap-0 md:items-start md:justify-between md:pb-18">
            {/* 가로 베이스라인 (md↑) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: inView ? 1 : 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="hidden md:block absolute left-0 right-0 top-[20px] h-px
                         bg-gradient-to-r from-amber-400/40 via-amber-400/25 to-amber-400/10"
              aria-hidden
            />

            {/* 세로 베이스라인 (모바일) */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ originY: 0 }}
              className="md:hidden absolute left-[19px] top-2 bottom-2 w-px
                         bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent"
              aria-hidden
            />

            {JOURNEY_DATA.map((phase, i) => {
              if (phase.isCurrent) {
                return (
                  <JourneyRunner
                    key={phase.id}
                    index={i}
                    period={phase.period}
                    label={phase.label}
                    inView={inView}
                  />
                );
              }

              const Icon = phase.Icon;

              return (
                <motion.div
                  key={phase.id}
                  custom={i}
                  variants={phaseVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="relative flex md:flex-col md:items-center md:flex-1
                             flex-row items-start gap-4 md:gap-0"
                >
                  {/* I-beam 블록 */}
                  <div className="relative md:mb-3 flex-shrink-0">
                    {/* 위 엔드캡 */}
                    <span
                      className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2
                                 w-px h-2 bg-amber-400/60"
                      aria-hidden
                    />

                    {/* 블록 본체 */}
                    <div
                      className="relative z-10 flex items-center justify-center
                                 w-10 h-10 rounded-md
                                 border border-amber-400/40 bg-gray-900
                                 shadow-[0_0_0_4px_rgb(17,24,39)]"
                    >
                      <Icon className="text-amber-400/90" style={{ width: 18, height: 18 }} />
                    </div>

                    {/* 아래 엔드캡 */}
                    <span
                      className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2
                                 w-px h-2 bg-amber-400/60"
                      aria-hidden
                    />
                  </div>

                  {/* 라벨 */}
                  <motion.div
                    custom={i}
                    variants={labelVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="md:text-center md:mt-3"
                  >
                    <p className="font-mono text-[11px] tracking-widest text-amber-400/70 uppercase">
                      {phase.period}
                    </p>
                    <p
                      className="mt-1 text-sm font-semibold text-gray-200"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {phase.label}
                    </p>
                    {phase.sublabel && (
                      <p
                        className="mt-0.5 text-xs text-gray-500"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {phase.sublabel}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
