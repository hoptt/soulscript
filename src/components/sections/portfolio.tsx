"use client";

import { BLUR_DATA_URL } from "@/constants";
import { portfolioData, DetailSection } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import ScrollReveal from "@/components/common/scroll-reveal";

function getAccentClass(sliderColor: string) {
  if (sliderColor === "#fda4af") return "text-rose-400 dark:text-rose-300";
  if (sliderColor === "#97cfe8") return "text-sky-500 dark:text-sky-400";
  if (sliderColor === "#6b7280") return "text-gray-500 dark:text-gray-400";
  return "text-teal-500 dark:text-teal-400";
}

function DetailModal({
  sections,
  accentClass,
  onClose,
}: {
  sections: DetailSection[];
  accentClass: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* 오버레이 */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 본체 */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
      >
        {/* 헤더 */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
          <span className={`font-bold text-lg ${accentClass}`}>DueCast — 프로젝트 상세</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-colors duration-200"
            aria-label="닫기"
          >
            <IoClose className="text-xl" />
          </button>
        </div>

        {/* 콘텐츠 */}
        <div className="px-6 py-5 flex flex-col gap-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className={`font-semibold text-sm mb-2 ${accentClass}`}>
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
              {section.image && (
                <div className="mt-3 rounded-xl overflow-hidden border border-gray-700">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={640}
                    height={360}
                    className="w-full h-auto object-contain"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
              )}
              {idx < sections.length - 1 && (
                <div className="mt-6 h-px bg-gray-800" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DiagramModal({
  src,
  title,
  accentClass,
  onClose,
}: {
  src: string;
  title: string;
  accentClass: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
          <span className={`font-bold text-lg ${accentClass}`}>{title}</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-colors duration-200"
            aria-label="닫기"
          >
            <IoClose className="text-xl" />
          </button>
        </div>
        <div className="p-4">
          <Image
            src={src}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioCarousel() {
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const prevActiveSlideRef = useRef(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(600);

  const currentPortfolio = portfolioData[activePortfolioIndex];

  React.useEffect(() => {
    prevActiveSlideRef.current = activeSlide;
  }, [activeSlide]);

  // 이미지 컨테이너 너비를 동적으로 계산
  useEffect(() => {
    const updateWidth = () => {
      if (imageContainerRef.current) {
        setImageWidth(imageContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    portfolioData.forEach((portfolio) => {
      portfolio.images.forEach((imageSrc) => {
        const img = new window.Image();
        img.src = imageSrc;
      });
    });
  }, []);

  const goToNext = () => {
    setSlideDirection(1);
    setActivePortfolioIndex((prev) =>
      prev === portfolioData.length - 1 ? 0 : prev + 1
    );
    setActiveSlide(0);
    setIsDetailOpen(false);
    setIsDiagramOpen(false);
  };

  const goToPrev = () => {
    setSlideDirection(-1);
    setActivePortfolioIndex((prev) =>
      prev === 0 ? portfolioData.length - 1 : prev - 1
    );
    setActiveSlide(0);
    setIsDetailOpen(false);
    setIsDiagramOpen(false);
  };

  const accentClass = getAccentClass(currentPortfolio.sliderColor);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20">
      {/* 배경 구분선 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-screen-lg mx-auto px-6 sm:px-10">
        {/* 섹션 넘버링 */}
        <ScrollReveal delay={0} direction="up">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-sm text-amber-400/40 tracking-widest select-none">
              04
            </span>
            <div className="h-px w-12 bg-amber-400/30" />
            <span className="font-mono text-xs text-amber-400/40 tracking-widest uppercase select-none">
              {"// portfolio"}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05} direction="up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-10">
            개인 포트폴리오
          </h2>
        </ScrollReveal>

        {/* 캐러셀 */}
        <ScrollReveal delay={0.1} direction="up">
          <div>
            {/* 네비게이션 컨트롤 */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={goToPrev}
                className="p-2 bg-gray-800 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-400/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="이전 프로젝트"
              >
                <MdArrowBackIos className="relative left-0.5 text-lg text-gray-300" />
              </button>
              <span className="text-gray-500 text-sm font-mono">
                {activePortfolioIndex + 1} / {portfolioData.length}
              </span>
              <button
                onClick={goToNext}
                className="p-2 bg-gray-800 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-400/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="다음 프로젝트"
              >
                <MdArrowForwardIos className="text-lg text-gray-300" />
              </button>
            </div>

            {/* 프로젝트 카드 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPortfolio.title}
                initial={{ opacity: 0, x: slideDirection * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -slideDirection * 20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                  {/* 이미지 섹션 (모바일: 위, 데스크탑: 우측) */}
                  <div
                    ref={imageContainerRef}
                    className="w-full lg:w-[45%] order-1 lg:order-2 flex-shrink-0"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg dark:shadow-none">
                      <motion.div
                        key={currentPortfolio.title + activeSlide}
                        className="flex"
                        style={{
                          width: currentPortfolio.images.length * imageWidth,
                        }}
                        initial={{
                          // eslint-disable-next-line react-hooks/refs
                          x: -1 * prevActiveSlideRef.current * imageWidth,
                        }}
                        animate={{ x: -1 * activeSlide * imageWidth }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {currentPortfolio.images.map((image, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-[4/3] flex-shrink-0 cursor-pointer hover:scale-[102%] transition-transform duration-500"
                            style={{ width: imageWidth }}
                            onClick={() => {
                              window.open(currentPortfolio.websiteLink);
                            }}
                          >
                            <Image
                              alt={`${currentPortfolio.title} 스크린샷 ${idx + 1}`}
                              src={image}
                              className={`${
                                idx === 0
                                  ? "rounded-s-2xl"
                                  : idx ===
                                    currentPortfolio.images.length - 1
                                  ? "rounded-e-2xl"
                                  : ""
                              } ${image.includes('_flutter.webp') ? 'object-contain' : 'object-cover'}`}
                              fill
                              placeholder={image.includes('_flutter.webp') ? "empty" : "blur"}
                              blurDataURL={image.includes('_flutter.webp') ? undefined : BLUR_DATA_URL}
                              priority={true}
                              sizes="(max-width: 1024px) 100vw, 45vw"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Dot indicator */}
                    <div className="flex justify-center gap-2 mt-3">
                      {Array.from({
                        length: currentPortfolio.images.length,
                      }).map((_, i) => (
                        <motion.button
                          key={i}
                          className="rounded-full h-3 cursor-pointer focus:outline-none"
                          aria-label={`이미지 ${i + 1}로 이동`}
                          initial={{ opacity: 0, minWidth: "12px" }}
                          animate={{
                            opacity: 1,
                            minWidth: activeSlide === i ? "40px" : "12px",
                            backgroundColor:
                              activeSlide === i
                                ? currentPortfolio.sliderColor
                                : "#4b5563",
                          }}
                          onClick={() => setActiveSlide(i)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* 텍스트 섹션 (모바일: 아래, 데스크탑: 좌측) */}
                  <div className="w-full lg:w-[55%] order-2 lg:order-1 flex flex-col">
                    <div className="border border-gray-700 rounded-2xl p-5 sm:p-6 bg-gray-800/50 flex flex-col flex-1 min-h-[320px] sm:min-h-[380px]">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className={`text-xl sm:text-2xl font-bold leading-tight ${accentClass}`}>
                            {currentPortfolio.type}
                          </p>
                          <p className={`text-xl sm:text-2xl font-bold mb-3 ${accentClass}`}>
                            {currentPortfolio.title}
                          </p>
                        </div>
                        {currentPortfolio.diagramImage && (
                          <button
                            onClick={() => setIsDiagramOpen(true)}
                            className={`flex flex-col items-center gap-1 px-2.5 py-2 rounded-xl border border-gray-700 hover:border-current bg-gray-800/60 hover:bg-gray-700/60 transition-all duration-200 flex-shrink-0 ${accentClass}`}
                            aria-label="아키텍처 다이어그램 보기"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="7" height="7" rx="1"/>
                              <rect x="14" y="3" width="7" height="7" rx="1"/>
                              <rect x="3" y="14" width="7" height="7" rx="1"/>
                              <path d="M17.5 14v3M17.5 17h3M17.5 17h-3"/>
                            </svg>
                            <span className="text-[10px] font-mono leading-tight text-center">아키텍처</span>
                          </button>
                        )}
                      </div>

                      <span className="text-gray-400 text-xs sm:text-sm mb-2 dark:text-gray-400 font-mono">
                        {currentPortfolio.techStack}
                      </span>
                      <div className="h-px bg-gray-700 mb-4" />

                      <div className="flex flex-1 flex-col text-gray-400 whitespace-pre-wrap text-xs sm:text-sm leading-relaxed flex-grow">
                        {currentPortfolio.description
                          .split("\\n")
                          .map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                      </div>

                      {currentPortfolio.detail && (
                        <button
                          onClick={() => setIsDetailOpen(true)}
                          className={`self-start mt-3 text-xs font-mono underline underline-offset-2 ${accentClass} opacity-70 hover:opacity-100 transition-opacity duration-200`}
                        >
                          자세히보기 →
                        </button>
                      )}

                      <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-700">
                        <a
                          href={currentPortfolio.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${currentPortfolio.title} GitHub 저장소`}
                          className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                        <a
                          href={currentPortfolio.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${currentPortfolio.title} 웹사이트 방문`}
                          className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        >
                          <IoEnterOutline className="text-xl" />
                        </a>
                        <span className="ml-auto font-mono text-xs text-gray-600">
                          {activePortfolioIndex + 1} / {portfolioData.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {isDetailOpen && currentPortfolio.detail && (
          <DetailModal
            sections={currentPortfolio.detail.sections}
            accentClass={accentClass}
            onClose={() => setIsDetailOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDiagramOpen && currentPortfolio.diagramImage && (
          <DiagramModal
            src={currentPortfolio.diagramImage}
            title={`${currentPortfolio.title} — 아키텍처`}
            accentClass={accentClass}
            onClose={() => setIsDiagramOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
