import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const lato = Lato({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} subpixel-antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
