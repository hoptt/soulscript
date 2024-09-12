import { BLUR_DATA_URL } from "@/src/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";

export function FirstPortfolio() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="relative h-[500px]">
      <div className="relative w-[50%] rounded-2xl z-[1] shadow-lg cursor-pointer">
        <div
          className="overflow-hidden rounded-2xl"
          onClick={() => {
            window.open("https://resortbnb.vercel.app");
          }}
        >
          <motion.div
            className="flex w-[1800px] "
            initial={{ x: 0 }}
            animate={{
              transition: { duration: 0.5 },
              x: -1 * activeSlide * 600,
            }}
          >
            <div className="relative w-[600px] aspect-[4/3] hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/resortbnb3.webp"
                className="rounded-s-2xl object-cover"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="relative w-[600px] aspect-[4/3] bg-white hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/resortbnb4.webp"
                className="object-contain"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="relative w-[600px] aspect-[4/3] bg-white hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/resortbnb5.webp"
                className="rounded-e-2xl object-contain"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center absolute bottom-[-35px] right-[-30px] w-[200px] gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.span
              key={i}
              className="bg-[#eaeaea] rounded-full block h-4 cursor-pointer"
              initial={{ opacity: 0, minWidth: "16px" }}
              animate={{
                opacity: 1,
                minWidth: activeSlide === i ? "70px" : "16px",
                backgroundColor: activeSlide === i ? "#fda4af" : "#eaeaea",
              }}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </div>

      <div className="w-[70%] top-0 right-0 mt-16 absolute">
        <div className="min-h-[550px] sm:min-h-[500px] lg:min-h-[500px] border shadow-lg rounded-2xl flex flex-col">
          <div className="ms-[30%] p-5 mt-2 flex flex-col flex-1">
            <p className="text-2xl font-bold text-rose-400 leading-tight">
              숙박 예약 플랫폼
            </p>
            <p className="text-2xl font-bold text-rose-400 mb-1">Resort BnB</p>
            <div className="flex flex-col flex-1">
              <span className="text-gray-400 text-sm">
                React, Next.js, TypeScript, TailwindCSS, Prisma, Supabase...
              </span>
              <div className="p-2 rounded-full bg-[#f5f5f7]" />
              <div className="flex flex-1 flex-col mt-5 text-gray-500 whitespace-pre-wrap">
                <span className="text-gray-400 font-semibold text-lg mb-1">
                  개인 프로젝트로 제작한 간단한 숙소 등록 및 예약 플랫폼입니다.
                </span>
                {"\n"}
                React와 Next.js를 사용하여 동적이고 반응성 높은 UI를 구현했으며,
                {"\n"}
                Prisma와 Supabase를 통해 데이터를 관리했습니다.
              </div>
              <div className="flex items-center justify-end gap-2">
                <div className="text-[#757575] max-w-fit">
                  <a href="https://resortbnb.vercel.app" target="_blank">
                    <IoEnterOutline className="text-lg" />
                  </a>
                </div>
                <a href="https://github.com/hoptt/resortbnb" target="_blank">
                  <FaGithub className="text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function SecondPortfolio() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="relative h-[500px] mt-32">
      <div className="w-[70%] top-0 left-0 mt-16 absolute">
        <div className="min-h-[550px] sm:min-h-[500px] lg:min-h-[500px] border shadow-lg rounded-2xl flex flex-col">
          <div className="me-[30%] p-5 ms-2 mt-2 flex flex-col flex-1">
            <p className="text-2xl font-bold text-sky-500 leading-tight">
              3D SNS 플랫폼
            </p>
            <p className="text-2xl font-bold text-sky-500 mb-1">Chicks Fly</p>
            <div className="flex flex-col flex-1">
              <span className="text-gray-400 text-sm">
                React, Vite, TypeScript, Three.js, R3F, Socket.io, Prisma,
                Supabase...
              </span>
              <div className="p-2 rounded-full bg-[#f5f5f7]" />
              <div className="flex flex-1 flex-col mt-5 text-gray-500 whitespace-pre-wrap">
                <span className="text-gray-400 font-semibold text-lg mb-1">
                  개인 프로젝트로 제작한 3D 멀티플레이 SNS 플랫폼입니다.
                </span>
                {"\n"}
                React 와 Vite 를 사용하여 빠른 테스트 및 개발을 진행했으며,
                {"\n"}
                Three.js 와 React-three-fiber 를 사용하여 3D 그래픽을
                구현했습니다.{"\n"}
                Socket.io 를 사용하여 실시간 동기화를 구현했으며,
                {"\n"}
                Prisma와 Supabase를 통해 데이터를 관리했습니다.
              </div>
              <div className="flex items-center gap-2">
                <a href="https://github.com/hoptt/chicks" target="_blank">
                  <FaGithub className="text-gray-500" />
                </a>
                <div className="text-[#757575] max-w-fit">
                  <a href="https://chicksfly.com" target="_blank">
                    <IoEnterOutline className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[50%] rounded-2xl z-[1] shadow-lg ml-auto cursor-pointer">
        <div
          className="overflow-hidden rounded-2xl"
          onClick={() => {
            window.open("https://chicksfly.com");
          }}
        >
          <motion.div
            className="flex w-[1800px]"
            initial={{ x: 0 }}
            animate={{
              transition: { duration: 0.5 },
              x: -1 * activeSlide * 600,
            }}
          >
            <div className="relative w-[600px] aspect-[4/3] hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/picture1.webp"
                className="rounded-s-2xl object-cover"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="relative w-[600px] aspect-[4/3] hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/picture2.webp"
                className="object-right object-cover"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="relative w-[600px] aspect-[4/3] hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/picture3.webp"
                className="rounded-e-2xl object-cover"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center absolute bottom-[-35px] left-[-30px] w-[200px] gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.span
              key={i}
              className="bg-[#eaeaea] rounded-full block h-4 cursor-pointer"
              initial={{ opacity: 0, minWidth: "16px" }}
              animate={{
                opacity: 1,
                minWidth: activeSlide === i ? "70px" : "16px",
                backgroundColor: activeSlide === i ? "#97cfe8" : "#eaeaea",
              }}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ThirdPortfolio() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="relative h-[500px] mt-32">
      <div className="relative w-[50%] rounded-2xl z-[1] shadow-lg cursor-pointer">
        <div
          className="overflow-hidden rounded-2xl"
          onClick={() => {
            window.open("https://i-phone-15pro-clone.vercel.app/");
          }}
        >
          <motion.div
            className="flex w-[1800px] "
            initial={{ x: 0 }}
            animate={{
              transition: { duration: 0.5 },
              x: -1 * activeSlide * 600,
            }}
          >
            <div className="relative w-[600px] aspect-[4/3] hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/iphone1.webp"
                className="rounded-s-2xl object-cover"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="relative w-[600px] aspect-[4/3] hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/iphone2.webp"
                className="object-cover"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="relative w-[600px] aspect-[4/3] hover:scale-[102%] transition-transform duration-500">
              <Image
                alt="resortbnb"
                src="/assets/images/iphone3.webp"
                className="rounded-e-2xl object-cover"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center absolute bottom-[-35px] right-[-30px] w-[200px] gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.span
              key={i}
              className="bg-[#eaeaea] rounded-full block h-4 cursor-pointer"
              initial={{ opacity: 0, minWidth: "16px" }}
              animate={{
                opacity: 1,
                minWidth: activeSlide === i ? "70px" : "16px",
                backgroundColor: activeSlide === i ? "#6b7280" : "#eaeaea",
              }}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </div>

      <div className="w-[70%] top-0 right-0 mt-16 absolute">
        <div className="min-h-[550px] sm:min-h-[500px] lg:min-h-[500px] border shadow-lg rounded-2xl flex flex-col">
          <div className="ms-[30%] p-5 mt-2 flex flex-col flex-1">
            <p className="text-2xl font-bold text-gray-500 leading-tight">
              아이폰 PRO 클론코딩
            </p>
            <p className="text-2xl font-bold text-gray-500 mb-1">
              iPhone 15 Pro MAX
            </p>
            <div className="flex flex-col flex-1">
              <span className="text-gray-400 text-sm">
                React, Next.js, TypeScript, TailwindCSS, Three.js, gsap,
                Framer-motion...
              </span>
              <div className="p-2 rounded-full bg-[#f5f5f7]" />
              <div className="flex flex-1 flex-col mt-5 text-gray-500 whitespace-pre-wrap">
                <span className="text-gray-400 font-semibold text-lg mb-1">
                  iPhone 15 Pro Max 를 클론코딩한 프로젝트입니다.
                </span>
                {"\n"}
                iPhone Pro 15 사이트의 디자인적 요소와 인터랙티브한 요소들을
                배워보고자 클론 코딩을 진행하였습니다.
                {"\n"}
              </div>
              <div className="flex items-center justify-end gap-2">
                <div className="text-[#757575] max-w-fit">
                  <a
                    href="https://i-phone-15pro-clone.vercel.app/"
                    target="_blank"
                  >
                    <IoEnterOutline className="text-lg" />
                  </a>
                </div>
                <a
                  href="https://github.com/hoptt/iPhone-15pro-clone"
                  target="_blank"
                >
                  <FaGithub className="text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
