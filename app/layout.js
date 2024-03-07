import { Inter, Poppins, Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} subpixel-antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
