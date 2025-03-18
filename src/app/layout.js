import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationMenu from "../../components/NavigationMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FRIO Blog Example",
  description: "A simple blog example app in Next.js & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <NavigationMenu />
        <main className="mainPage">{children}</main>
      </body>
    </html>
  );
}
