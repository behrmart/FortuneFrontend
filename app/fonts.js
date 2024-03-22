// app/fonts.ts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  variable: true,
  weight: "500",
});

export const fonts = {
  poppins,
};
