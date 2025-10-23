declare module '*.svg' {
    import type { SvgComponent } from "astro/types";
    const content: SvgComponent;
    export default content;
}