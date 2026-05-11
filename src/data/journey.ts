import type { IconType } from "react-icons";
import {
  FaGraduationCap,
  FaBuilding,
  FaBriefcase,
  FaPersonRunning,
} from "react-icons/fa6";
import { GiBrodieHelmet } from "react-icons/gi";

export type JourneyPhase = {
  id: string;
  period: string;
  label: string;
  sublabel?: string;
  Icon: IconType;
  isCurrent?: boolean;
};

export const JOURNEY_DATA: JourneyPhase[] = [
  {
    id: "edu",
    period: "2018",
    label: "국비지원 하이브리드 웹/앱",
    sublabel: "FE / BE / App",
    Icon: FaGraduationCap,
  },
  {
    id: "army",
    period: "19.04 ~ 20.11",
    label: "육군 복무",
    Icon: GiBrodieHelmet,
  },
  {
    id: "mdrj",
    period: "21.12 ~ 24.01",
    label: "멋들어진",
    sublabel: "첫 직장",
    Icon: FaBuilding,
  },
  {
    id: "mp",
    period: "24.11 ~ 25.11",
    label: "마이크로프로텍트",
    sublabel: "두 번째 직장",
    Icon: FaBriefcase,
  },
  {
    id: "now",
    period: "~ ing",
    label: "현재",
    Icon: FaPersonRunning,
    isCurrent: true,
  },
];
