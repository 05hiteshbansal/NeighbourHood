import { Inter } from "next/font/google";
import "./globals.css";
import  Footer  from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Uiprovider from "@/utils/UIProvider";
import { RecoilProvider } from "@/utils/RecoilProvider";
import Provider from "@/utils/sessionProvider";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeighbourHood",
  description: "NeighbourHood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ClerkProvider>
      <Provider>
      <Navbar/>
      <RecoilProvider>
      <Uiprovider>
      {children}
      </Uiprovider>
      </RecoilProvider>
      <Footer/>
      </Provider>
      </ClerkProvider>
      </body>
    </html>
  );
}
