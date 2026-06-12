import type { Transition } from "framer-motion";

export const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const pageTransitionConfig: Transition = {
  duration: 0.45,
  ease: [0.76, 0, 0.24, 1],
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerItem = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};
