import type { SvgComponent } from "astro/types";
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


interface Tech{
    [name:string]:SvgComponent;
}

export const techSkills:Tech={
     "astro":astroIcon,
     "css3":css3Icon,
     "html5":html5Icon,
     "javascript":javascriptIcon,
     "mongodb":mongodbIcon,
     "nodejs":nodejsIcon,
     "postgresql":postgresqlIcon,
     "react":reactIcon,
     "tailwindcss":tailwindcssIcon,
     "typescript":typescriptIcon
}

