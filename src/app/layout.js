import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sharda Home Estate",
  description: "Generated by Sharda Home Estate",
  icons: {
    icon: [
      {
        url: '/favicon.ico',  // Use .ico format which is more widely supported
        sizes: '16x16',
        type: 'image/x-icon'
      },
      {
        url: '/favicon.ico',  // SVG as fallback
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Contact />
      </body>
    </html>
  );
}
