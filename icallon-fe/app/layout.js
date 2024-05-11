import { Fuzzy_Bubbles } from "next/font/google";
import "./globals.css";

const fuzzy_bubbles = Fuzzy_Bubbles({
  subsets: ["latin"],
  display: "swap",
  weight: '400',
  variable: "--fuzzy_bubbles",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fuzzy_bubbles.className}>{children}</body>
    </html>
  );
}
