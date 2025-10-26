
import type { Skill, SkillCategory } from "../types/types";
import { techSkills } from "./tech";

const framework: Skill[] = [
    {
        name: "Astro",
        icon: techSkills["astro"]
    },
    {
        name: "React",
        icon: techSkills["react"]
    },
    {
        name: "Tailwind CSS",
        icon: techSkills["tailwindcss"]
    }
];

const languages: Skill[] = [
    {
        name: "HTML5",
        icon: techSkills["html5"]
    },
    {
        name: "CSS3",
        icon:  techSkills["css3"]
    },
    {
        name: "JavaScript",
        icon: techSkills["javascript"]
    },
    {
        name: "TypeScript",
        icon:  techSkills["typescript"]
    }
];

const backend: Skill[] = [
    {
        name: "Node.js",
        icon: techSkills["nodejs"]
    },
    {
        name: "MongoDB",
        icon:   techSkills["mongodb"]
    },
    {
        name: "PostgreSQL",
        icon:  techSkills["postgresql"]
    }
];

export const SkillsCategories: SkillCategory[] = [
    {
        category: "Languages",
        skills: languages
    },
    {
        category: "Framework",
        skills: framework
    },
    {
        category: "Backend",
        skills: backend
    }
];