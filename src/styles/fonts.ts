import { Inter, Noto_Sans_SC } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
});

export const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400", "500", "700"],
});
