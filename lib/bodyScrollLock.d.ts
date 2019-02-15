declare namespace "body-scroll-lock" {
  export interface BodyScrollOptions {
    reserveScrollBarGap?: boolean;
    allowTouchMove?: (el: any) => boolean;
  }

  export const disableBodyScroll: (targetElement: any, options?: BodyScrollOptions) => void;
  export const clearAllBodyScrollLocks: () => void;
  export const enableBodyScroll: (targetElement: any) => void;
}