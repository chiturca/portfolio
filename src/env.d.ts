declare module '*.svg' {
  const src: string;
  export const ReactComponent: unknown;
  export default src;
}
declare module '*.pdf' {
  const src: string;
  export const ReactComponent: unknown;
  export default src;
}

declare module '*.mp4' {
  const src: string;
  export const ReactComponent: unknown;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
type CSSModuleClasses = { readonly [key: string]: string };

declare module '*.module.scss' {
  const classes: CSSModuleClasses;
  export default classes;
}
