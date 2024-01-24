import { Inter } from "next/font/google";
import "./globals.css";
import ThemeState from "./context/themeState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theme Switcher",
  
};

export default function RootLayout({ children }) {
  return (
   <ThemeState>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ThemeState>
  );
}
