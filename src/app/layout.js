import { Inter } from "next/font/google";
import "./globals.css";
import  Footer  from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeighbourHood",
  description: "NeighbourHood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
