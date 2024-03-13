import { Inter, Merriweather, Tinos } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const textCards = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
})

export const slantedText = Tinos({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: "italic"
})