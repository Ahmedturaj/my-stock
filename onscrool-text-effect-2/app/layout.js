import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-press-start",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-press-start",
  subsets: ["latin"],
});

export const metadata = {
  title: "Typo Animation-2",
  description: "for reuse this ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
