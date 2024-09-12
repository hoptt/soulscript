"use client";

import Image from "next/image";
import { FirstPortfolio, SecondPortfolio, ThirdPortfolio } from "./portfolio";
import { FaBuilding } from "react-icons/fa";

export default function MyInfo() {
  return (
    <section className="">
      <div className="max-w-screen-lg mx-auto p-10 my-10 lg:my-20">
        <div className="flex flex-1 gap-8">
          <div className="flex flex-col flex-1">
            <h1 className="text-2xl font-bold mb-3">서호준</h1>
            <nav>
              <ul>
                <li>Frontend Developer</li>
                <li className="flex items-center gap-2">
                  <FaBuilding /> 경력: 스타트업 2년
                </li>
              </ul>
            </nav>
            <div className="border border-1 w-full my-2" />
            <div>
              <h2 className="font-bold mb-1">기술 스택</h2>
              <ul className="flex flex-wrap gap-3">
                <li className="flex gap-2 bg-[#f5f5f7] text-gray-400 hover:text-gray-800 p-1">
                  <div className="w-[20px] relative">
                    <Image
                      alt="react"
                      src="/assets/images/icon1.webp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>React</span>
                </li>
                <li className="flex gap-2 bg-[#f5f5f7] text-gray-400 hover:text-gray-800 p-1">
                  <div className="w-[20px] relative">
                    <Image
                      alt="next"
                      src="/assets/images/icon2.webp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Next.js</span>
                </li>
                <li className="flex gap-2 bg-[#f5f5f7] text-gray-400 hover:text-gray-800 p-1">
                  <div className="w-[20px] relative">
                    <Image
                      alt="javascript"
                      src="/assets/images/icon3.webp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Javascript</span>
                </li>
                <li className="flex gap-2 bg-[#f5f5f7] text-gray-400 hover:text-gray-800 p-1">
                  <div className="w-[20px] relative">
                    <Image
                      alt="typescript"
                      src="/assets/images/icon4.webp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Typescript</span>
                </li>
                <li className="flex gap-2 bg-[#f5f5f7] text-gray-400 hover:text-gray-800 p-1">
                  <div className="w-[20px] relative">
                    <Image
                      alt="threejs"
                      src="/assets/images/icon5.webp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Three.js</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-gray-500 mt-5">
          <div className="ms-3">
            스타트업에서 프론트엔드 개발자로 일하며, 다양한 반응형 사용자
            인터페이스를 구현했습니다
            <ul className="list-disc mt-2">
              <li className="ms-4">
                🛠 <span className="font-semibold">B2B 솔루션</span>: 기업 간
                원활한 상호작용을 위한 매끄러운 경험을 제공했습니다.
              </li>
              <li className="ms-4">
                🛍 <span className="font-semibold">B2C 플랫폼</span>: 고객 중심의
                인터페이스를 디자인해 사용자 만족도를 높였습니다.
              </li>
              <li className="ms-4">
                🖥 <span className="font-semibold">어드민 대시보드</span>: 복잡한
                데이터 관리 작업을 쉽게 할 수 있도록 직관적인 어드민 페이지를
                구축했습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-10">
        <h2 className=" text-3xl font-bold mb-8  text-gray-400">
          개인 포트폴리오 한 눈에 보기
        </h2>
        <FirstPortfolio />
        <SecondPortfolio />
        <ThirdPortfolio />
      </div>
    </section>
  );
}
