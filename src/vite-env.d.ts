/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

declare module "*&as=picture" {
  const out: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default out;
}

declare module "*&as=srcset" {
  const out: string;
  export default out;
}

/** vite-imagetools single-output imports (…&as=url) resolve to the built asset URL. */
declare module "*&as=url" {
  const out: string;
  export default out;
}
