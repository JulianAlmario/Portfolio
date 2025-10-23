import type { SvgComponent } from "astro/types";

export type Project={
    title: string;
    description: string;
    image:string;
    linkGit: string;
    linkDemo: string;
}

export type Skill={
    name: string;
    icon:SvgComponent;
}

export type SkillCategory={
    category: string;
    skills: Skill[];
}