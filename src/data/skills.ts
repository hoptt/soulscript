export type SkillCategory = "Markup/Style" | "Framework" | "Language" | "Library" | "Tool" | "AI";

export interface SkillItem {
  name: string;
  icon?: string;
  category: SkillCategory;
}

export const SKILLS_DATA: SkillItem[] = [
  // Markup/Style
  { name: "HTML5", icon: "/assets/images/html.webp", category: "Markup/Style" },
  { name: "CSS3", icon: "/assets/images/css3.webp", category: "Markup/Style" },
  { name: "SCSS", icon: "/assets/images/scss.webp", category: "Markup/Style" },

  // Framework
  { name: "Next.js", icon: "/assets/images/icon2.webp", category: "Framework" },

  // Language
  {
    name: "JavaScript",
    icon: "/assets/images/icon3.webp",
    category: "Language",
  },
  {
    name: "TypeScript",
    icon: "/assets/images/icon4.webp",
    category: "Language",
  },

  // Library
  { name: "React", icon: "/assets/images/icon1.webp", category: "Library" },
  { name: "React Query", category: "Library" },
  { name: "TailwindCSS", category: "Library" },
  { name: "Zustand", category: "Library" },
  { name: "Recoil", category: "Library" },
  { name: "Nx monorepo", category: "Library" },
  { name: "i18n", category: "Library" },
  
  // Tool
  { name: "Slack", category: "Tool" },
  { name: "Notion", category: "Tool" },
  { name: "Figma", category: "Tool" },
  { name: "Jira", category: "Tool" },
  { name: "Git", category: "Tool" },
  { name: "Storybook", category: "Tool" },

  // AI
  { name: "Claude", category: "AI" },
  { name: "Cursor", category: "AI" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  "Markup/Style",
  "Language",
  "Library",
  "Framework",
  "Tool",
  "AI"
];
