"use client";

import { FiChevronDown } from "react-icons/fi";
import type { ExperienceData } from "@/data/experience";

type ExperienceCardProps = ExperienceData & {
  isOpen: boolean;
  onToggle: () => void;
};

export const ExperienceCard = ({
  companyName,
  role,
  description,
  duration,
  additionalInfo,
  team,
  partners,
  contributions,
  achievements,
  tools,
  isOpen,
  onToggle,
}: ExperienceCardProps) => {
  return (
    <div
      className={`group rounded-lg border transition-all duration-300 cursor-pointer
        ${isOpen
          ? "border-gray-700 bg-gray-800/50 border-l-2 border-l-amber-400/50"
          : "border-gray-800 bg-gray-800/20 border-l-2 border-l-amber-400/10 hover:border-gray-700 hover:bg-gray-800/40 hover:border-l-amber-400/30"
        }`}
      onClick={onToggle}
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {/* 헤더 - 항상 노출 */}
      <div className="flex items-start justify-between p-4 sm:p-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
            <div>
              <h2 className={`text-lg sm:text-xl font-bold mb-0.5 transition-colors duration-300 ${
                isOpen ? "text-gray-100" : "text-gray-400 group-hover:text-gray-200"
              }`}>
                {companyName}
              </h2>
              <p className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                isOpen ? "text-amber-400" : "text-amber-400/40 group-hover:text-amber-400/70"
              }`}>
                {role}
              </p>
              <p className={`text-sm mt-1.5 transition-colors duration-300 ${
                isOpen ? "text-gray-400" : "text-gray-600 group-hover:text-gray-500"
              }`}>
                {description}
              </p>
            </div>
            <div className="sm:text-right flex-shrink-0">
              <p className={`font-mono text-xs leading-relaxed transition-colors duration-300 ${
                isOpen ? "text-gray-500" : "text-gray-700 group-hover:text-gray-600"
              }`}>
                {duration}
              </p>
            </div>
          </div>
        </div>
        <div className={`ml-3 mt-0.5 flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}>
          <FiChevronDown
            size={18}
            className={`transition-colors duration-300 ${
              isOpen ? "text-amber-400/60" : "text-gray-700 group-hover:text-gray-500"
            }`}
          />
        </div>
      </div>

      {/* 확장 콘텐츠 */}
      <div
        className={`overflow-hidden transition-all ease-in-out ${
          isOpen ? "max-h-[3000px] opacity-100 duration-[900ms]" : "max-h-0 opacity-0 duration-300"
        }`}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="pt-4 space-y-5">

                {/* 협업 규모 */}
                {team && team.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-amber-400/60">{"["}</span>
                      <span className="font-mono text-xs text-amber-400/80 tracking-wider uppercase">TEAM</span>
                      <span className="font-mono text-xs text-amber-400/60">{"]"}</span>
                      <div className="flex-1 h-px bg-gray-800 ml-1" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {team.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded border border-gray-800 bg-gray-800/30 font-mono text-xs text-gray-500"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 주요 협력사 */}
                {partners && partners.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-amber-400/60">{"["}</span>
                      <span className="font-mono text-xs text-amber-400/80 tracking-wider uppercase">PARTNERS</span>
                      <span className="font-mono text-xs text-amber-400/60">{"]"}</span>
                      <div className="flex-1 h-px bg-gray-800 ml-1" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {partners.map((partner, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded border border-gray-800 bg-gray-800/30 font-mono text-xs text-gray-500"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 주요 기여 */}
                <div className="space-y-4">
                  {contributions.map((contribution, idx) => (
                    <div key={idx}>
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
                        {contribution.title}
                      </h4>
                      <ul className="space-y-1.5 pl-4">
                        {contribution.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-400 leading-relaxed flex items-start gap-2"
                            style={{ wordBreak: "keep-all" }}
                          >
                            <span className="mt-2 w-1 h-px bg-gray-600 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 트러블슈팅 */}
                {achievements && achievements.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-xs text-amber-400/60">{"["}</span>
                      <span className="font-mono text-xs text-amber-400/80 tracking-wider uppercase">TROUBLESHOOTING</span>
                      <span className="font-mono text-xs text-amber-400/60">{"]"}</span>
                      <div className="flex-1 h-px bg-gray-800 ml-1" />
                    </div>
                    <div className="space-y-4">
                      {achievements.map((achievement, idx) => (
                        <div key={idx}>
                          <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-200 mb-2">
                            <span className="text-amber-400/60">▸</span>
                            {achievement.title}
                          </p>
                          <ul className="space-y-2 pl-4">
                            {(
                              [
                                { label: "문제", text: achievement.problem },
                                { label: "분석", text: achievement.analyze },
                                { label: "코드", text: achievement.action },
                                { label: "결과", text: achievement.result },
                              ] as const
                            ).map(({ label, text }, i) => (
                              <li key={i} className="flex items-start gap-2" style={{ wordBreak: "keep-all" }}>
                                <span className="font-mono text-xs text-amber-400/70 flex-shrink-0 mt-0.5">
                                  [{label}]
                                </span>
                                <span className="text-sm text-gray-400 leading-relaxed">
                                  {text.split(/<br\s*\/?>/i).map((segment, si, arr) => (
                                    <span key={si}>
                                      {segment}
                                      {si < arr.length - 1 && <br />}
                                    </span>
                                  ))}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 추가 정보 */}
                {additionalInfo && (
                  <p
                    className="text-xs text-gray-600 leading-relaxed pt-1 border-t border-gray-800/50"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {additionalInfo}
                  </p>
                )}

                {/* 협업 툴 */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-amber-400/60">{"["}</span>
                    <span className="font-mono text-xs text-amber-400/80 tracking-wider uppercase">TOOLS</span>
                    <span className="font-mono text-xs text-amber-400/60">{"]"}</span>
                    <div className="flex-1 h-px bg-gray-800 ml-1" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, i) => (
                      <div
                        key={i}
                        className="group/tool flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-gray-800 bg-gray-800/30 hover:border-amber-400/30 hover:bg-gray-800/60 transition-all duration-200 cursor-default"
                        title={tool.description}
                      >
                        <span className="w-1 h-1 rounded-full bg-amber-400/40 group-hover/tool:bg-amber-400/80 transition-colors flex-shrink-0" />
                        <span className="text-xs font-mono text-gray-500 group-hover/tool:text-gray-300 transition-colors">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
