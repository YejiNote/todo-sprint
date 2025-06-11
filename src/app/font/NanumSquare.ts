import localFont from "next/font/local";

export const nanaumSquare= localFont({
  src: [
    {
      path: "./fonts/NanumSquareR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NanumSquareB.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});