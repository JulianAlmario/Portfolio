
import type { Skill, SkillCategory } from "../types/types";
import astroIcon from "../assets/icons/astro-original.svg";
import css3Icon from "../assets/icons/css3-original.svg";
import html5Icon from "../assets/icons/html5-original.svg";
import javascriptIcon from "../assets/icons/javascript-original.svg";
import mongodbIcon from "../assets/icons/mongodb-original.svg";
import nodejsIcon from "../assets/icons/nodejs-icon-svgrepo-com.svg";
import postgresqlIcon from "../assets/icons/postgresql-original.svg";
import reactIcon from "../assets/icons/react-original.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss-original.svg";
import typescriptIcon from "../assets/icons/typescript-original.svg";

const framework: Skill[] = [
    {
        name: "Astro",
        icon: astroIcon
    },
    {
        name: "React",
        icon: reactIcon
    },
    {
        name: "Tailwind CSS",
        icon: tailwindcssIcon
    }
];

const languages: Skill[] = [
    {
        name: "HTML5",
        icon: html5Icon
    },
    {
        name: "CSS3",
        icon: css3Icon
    },
    {
        name: "JavaScript",
        icon: javascriptIcon
    },
    {
        name: "TypeScript",
        icon: typescriptIcon
    }
];

const backend: Skill[] = [
    {
        name: "Node.js",
        icon: nodejsIcon
    },
    {
        name: "MongoDB",
        icon: mongodbIcon
    },
    {
        name: "PostgreSQL",
        icon: postgresqlIcon
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