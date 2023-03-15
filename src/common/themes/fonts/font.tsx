import { Inter, Poppins, Merriweather } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const interFont = Inter({ subsets: ["latin"] });
const poppinsFont = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
const merriWeatherFont = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin",],
});

// Font files can be colocated inside of `pages`

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

export  {interFont,poppinsFont,merriWeatherFont};
