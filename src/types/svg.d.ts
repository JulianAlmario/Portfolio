declare module '*.svg' {
    import type { SvgComponent } from "astro/types";
    const content: SvgComponent;
    export default content;
}

declare module '*.jpg' {
    const src: string;
    export default { src };
}

declare module '*.jpeg' {
    const src: string;
    export default { src };
}

declare module '*.png' {
    const src: string;
    export default { src };
}