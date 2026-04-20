"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));

    const updateActive = () => {
      setScrolled(window.scrollY > 50);

      const isAtBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const offset = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/85 backdrop-blur-xl border-b border-amber-400/20 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-6 sm:px-10 h-14">
          {/* 로고/브랜드 */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#about");
            }}
            className="font-mono text-sm tracking-widest text-amber-400/80 hover:text-amber-400 transition-colors duration-200 select-none"
          >
            <span className="text-gray-500">&lt;</span>
            <span className="text-gray-200 font-semibold">seo</span>
            <span className="text-amber-400">.</span>
            <span className="text-gray-200 font-semibold">dev</span>
            <span className="text-gray-500"> /&gt;</span>
          </a>

          {/* 데스크탑 네비게이션 */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3 py-1.5 text-sm font-mono transition-all duration-200 rounded group flex items-center gap-1 ${
                      isActive
                        ? "text-amber-400"
                        : "text-gray-500 hover:text-gray-200"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-amber-400/8 rounded border border-amber-400/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span
                      className={`font-mono text-xs transition-all duration-200 ${
                        isActive ? "opacity-100 text-amber-400/60" : "opacity-0 group-hover:opacity-40"
                      }`}
                    >
                      {"//"}
                    </span>
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* 소셜 링크 + 모바일 메뉴 */}
          <div className="flex items-center gap-3">
            {/* Github 링크 */}
            <a
              href="https://github.com/hoptt"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-gray-500 hover:text-gray-200 transition-colors duration-200"
              aria-label="GitHub 프로필 방문"
            >
              <FaGithub className="text-lg group-hover:text-amber-400 transition-colors duration-200" />
              <span className="hidden sm:inline text-sm font-mono text-gray-500 group-hover:text-gray-300 transition-colors duration-200">
                Github
              </span>
            </a>

            {/* Velog 링크 */}
            <a
              href="https://velog.io/@jamee_/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-gray-500 hover:text-gray-200 transition-colors duration-200"
              aria-label="Velog 블로그 방문"
            >
              <div className="relative w-[18px] h-[18px]">
                <Image
                  alt="Velog 블로그"
                  src="/assets/images/velog.webp"
                  fill
                  className="object-contain opacity-50 group-hover:opacity-90 transition-opacity duration-200"
                  sizes="18px"
                />
              </div>
              <span className="hidden sm:inline text-sm font-mono text-gray-500 group-hover:text-gray-300 transition-colors duration-200">
                velog
              </span>
            </a>

            {/* 모바일 햄버거 */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-1.5 text-gray-400 hover:text-amber-400 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-amber-400/50 rounded"
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {menuOpen ? (
                <RiCloseLine className="text-xl" />
              ) : (
                <RiMenu4Line className="text-xl" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* 모바일 드롭다운 메뉴 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-amber-400/20 shadow-xl shadow-black/40"
          >
            <ul className="flex flex-col max-w-screen-xl mx-auto px-6 py-3 gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center gap-2 py-2.5 px-3 rounded text-sm font-mono transition-all duration-200 ${
                        isActive
                          ? "text-amber-400 bg-amber-400/8 border border-amber-400/20"
                          : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                      }`}
                    >
                      <span
                        className={`text-xs ${isActive ? "text-amber-400/60" : "text-gray-600"}`}
                      >
                        {"//"}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
