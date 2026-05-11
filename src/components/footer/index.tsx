"use client";

import Image from "next/image";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kmertvv531@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-gray-900 border-t border-gray-800"
    >
      {/* 배경 ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-[0.03] blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #f59e0b, transparent)" }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        {/* CTA 영역 */}
        <div className="mb-10 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start mb-4">
            <span className="font-mono text-sm text-amber-400/40 tracking-widest select-none">
              05
            </span>
            <div className="h-px w-12 bg-amber-400/30" />
            <span className="font-mono text-xs text-amber-400/40 tracking-widest uppercase select-none">
              {"// contact"}
            </span>
          </div>
        </div>

        {/* 연락처 + 소셜 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* 연락처 */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-gray-600 uppercase tracking-wider mb-4">
              Contact Info
            </p>
            <a
              href="tel:010-4576-9690"
              className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors duration-200 group w-fit"
            >
              <span className="w-7 h-7 flex items-center justify-center rounded bg-gray-800 group-hover:bg-amber-400/10 transition-colors duration-200">
                <BsFillTelephoneFill className="text-xs" />
              </span>
              <span className="text-sm">010-4576-9690</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="mailto:kmertvv531@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors duration-200 group w-fit"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded bg-gray-800 group-hover:bg-amber-400/10 transition-colors duration-200">
                  <MdOutlineEmail className="text-sm" />
                </span>
                <span className="text-sm font-mono">kmertvv531@gmail.com</span>
              </a>
              <button
                onClick={copyEmail}
                className="text-gray-600 hover:text-amber-400 transition-colors duration-200 p-1"
                aria-label="이메일 복사"
                title="이메일 복사"
              >
                {copied ? (
                  <MdCheck className="text-sm text-amber-400" />
                ) : (
                  <MdContentCopy className="text-sm" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="w-7 h-7 flex items-center justify-center rounded bg-gray-800">
                <IoLocationOutline className="text-sm" />
              </span>
              <span className="text-sm font-mono">경기도 고양시 덕양구 행신동</span>
            </div>
          </div>

          {/* 소셜 링크 */}
          <div>
            <p className="font-mono text-xs text-gray-600 uppercase tracking-wider mb-4">
              Links
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/hoptt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub 프로필"
                className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors duration-200 group w-fit"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded bg-gray-800 group-hover:bg-amber-400/10 transition-colors duration-200">
                  <FaGithub className="text-sm" />
                </span>
                <span className="text-sm font-mono">github.com/hoptt</span>
              </a>
              <a
                href="https://velog.io/@jamee_/posts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Velog 블로그"
                className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors duration-200 group w-fit"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded bg-gray-800 group-hover:bg-amber-400/10 transition-colors duration-200">
                  <div className="relative w-3 h-3">
                    <Image
                      alt="Velog"
                      src="/assets/images/velog.webp"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-200"
                      sizes="12px"
                    />
                  </div>
                </span>
                <span className="text-sm font-mono">velog.io/@jamee_</span>
              </a>
            </div>
          </div>
        </div>

        {/* 하단 구분선 + 카피라이트 + 맨 위로 */}
        <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
          <p className="font-mono text-xs text-gray-700">
            © 2026 서호준. Frontend Developer.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-600 hover:text-amber-400 transition-colors duration-200 text-xs font-mono group"
            aria-label="맨 위로 이동"
          >
            <HiArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform duration-200" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
