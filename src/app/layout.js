import { Inter } from "next/font/google";
import "./globals.css";
import  Footer  from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Uiprovider from "@/utils/UIProvider";
import { RecoilProvider } from "@/utils/RecoilProvider";
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
      <RecoilProvider>
      <Uiprovider>
      {children}
      </Uiprovider>
      </RecoilProvider>
      <Footer/>
      </body>
    </html>
  );
}
