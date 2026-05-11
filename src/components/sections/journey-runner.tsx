"use client";

import { motion, type Variants } from "framer-motion";
import { FaPersonRunning } from "react-icons/fa6";

type Props = {
  index: number;
  period: string;
  label: string;
  inView: boolean;
};

const enter: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const labelEnter: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.55 + i * 0.12, duration: 0.45, ease: "easeOut" },
  }),
};

const DUST_DELAYS = [0, 0.4, 0.8];

export default function JourneyRunner({ index, period, label, inView }: Props) {
  return (
    <motion.div
      custom={index}
      variants={enter}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative flex md:flex-col md:items-center md:flex-1
                 flex-row items-start gap-4 md:gap-0"
    >
      {/* dashed trail — 직전 블록에서 러너까지 (데스크탑만) */}
      <span
        className="hidden md:block absolute right-full top-[20px] w-8 h-px
                   border-t border-dashed border-amber-400/25"
        aria-hidden
      />

      {/* 달리는 사람 영역 */}
      <div className="relative md:mb-3 w-10 h-10 flex items-center justify-center flex-shrink-0">
        {/* 먼지 puff 3개 */}
        {DUST_DELAYS.map((delay, di) => (
          <motion.span
            key={di}
            className="absolute left-0 bottom-1 w-1.5 h-1.5 rounded-full bg-amber-400/30"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 0.6, 0],
              x: [-2, -10, -16],
              y: [0, -3, -6],
              scale: [0.6, 1, 0.4],
            }}
            transition={{
              duration: 1.4,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
            aria-hidden
          />
        ))}

        {/* 러너 본체 */}
        <motion.div
          animate={{
            y: [0, -7, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <FaPersonRunning className="w-6 h-6 text-amber-400" />
        </motion.div>
      </div>

      {/* 라벨 */}
      <motion.div
        custom={index}
        variants={labelEnter}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="md:text-center"
      >
        <p className="font-mono text-[11px] tracking-widest text-amber-400/80 uppercase">
          {period}
        </p>
        <p
          className="mt-1 text-sm font-semibold text-amber-400"
          style={{ wordBreak: "keep-all" }}
        >
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
}
