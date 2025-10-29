import type { SvgComponent } from "astro/types";

export type HeaderProps={
    title:string;
    url:string;
    icon:SvgComponent;
}[];

export type Project={
    title: string;
    description: string;
    image:string;
    linkGit: string;
    linkDemo: string;
    tech:SvgComponent[];
}

export type Skill={
    name: string;
    icon:SvgComponent;
}

export type SkillCategory={
    category: string;
    skills: Skill[];
}