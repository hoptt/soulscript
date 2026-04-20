"use client";

import ScrollReveal from "@/components/common/scroll-reveal";
import { BLUR_DATA_URL } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* 배경 ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />

      <div className="relative w-full max-w-screen-lg mx-auto px-6 sm:px-10 py-20 sm:py-24 lg:py-28">
        {/* 섹션 넘버링 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-sm text-amber-400/40 tracking-widest select-none">
            01
          </span>
          <div className="h-px w-12 bg-amber-400/30" />
          <span className="font-mono text-xs text-amber-400/40 tracking-widest uppercase select-none">
            {"// about"}
          </span>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 items-start gap-8 lg:gap-10">
          {/* 우측: 텍스트 */}
          <div className="order-2 lg:order-2 lg:col-span-3 w-full">
            {/* 이름 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-100 leading-[1.1] mb-2">
                서호준
              </h1>
              <p className="font-mono text-sm sm:text-base text-amber-400 tracking-wider mb-5">
                Frontend Developer
              </p>
            </motion.div>

            {/* 구분선 */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="origin-left h-px w-20 bg-gradient-to-r from-amber-400/60 to-transparent mb-6"
            />

            {/* 자기소개 */}
            <ScrollReveal delay={0.05} direction="up">
              <p className="text-base text-gray-400 leading-relaxed mb-2 max-w-lg">
                프론트엔드 개발 3년동안 개발, 기획, QA, 디자인팀 등 다양한
                팀원들과 협업하며 프로젝트를 진행해 왔습니다.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12} direction="up">
              <p className="text-base text-gray-400 leading-relaxed mb-2 max-w-lg">
                요구사항 구현뿐 아니라 기획 의도와 사용자 흐름에 대한 이해를
                중시했습니다.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <p className="text-base text-gray-400 leading-relaxed mb-2 max-w-lg">
                <span className="text-gray-200 font-semibold">
                  세밀한 업무 점검 능력
                </span>
                과{" "}
                <span className="text-gray-200 font-semibold">성실함</span>,
                그리고 스스로를 객관적으로 돌아보는{" "}
                <span className="text-gray-200 font-semibold">메타인지</span>{" "}
                역량을 갖추고 있습니다.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28} direction="up">
              <p className="text-base text-gray-400 leading-relaxed max-w-lg">
                사용자에게 좋은 경험과{" "}
                <span className="text-gray-200 font-semibold">레퍼런스</span>를
                전할 수 있는 개발자가 되는 것이 목표입니다.
              </p>
            </ScrollReveal>

            {/* 연락처 CTA */}
            <ScrollReveal delay={0.35} direction="up">
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-mono rounded hover:bg-amber-400/20 hover:border-amber-400/60 transition-all duration-200"
                >
                  Contact me
                  <span className="text-amber-400/60">→</span>
                </a>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-mono text-gray-500 hover:text-gray-300 transition-colors duration-200 underline underline-offset-4"
                >
                  경력 보기
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* 좌측: 프로필 사진 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="order-1 lg:order-1 lg:col-span-2 w-full flex justify-center lg:justify-center"
          >
            <div className="relative">
              {/* 외부 장식 링 */}
              <div className="absolute -inset-2 rounded-full border border-amber-400/10 animate-pulse-slow" />
              <div className="absolute -inset-4 rounded-full border border-amber-400/5" />

              {/* 프로필 이미지 */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
                <div className="absolute inset-0 rounded-full ring-1 ring-amber-400/30 ring-offset-2 ring-offset-gray-900" />
                <Image
                  alt="서호준 프로필 사진"
                  src="/assets/images/hj.png"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  priority={true}
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 176px"
                />
              </div>

              {/* 상태 배지 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-gray-800 border border-gray-700 rounded-full whitespace-nowrap shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-gray-400">
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
