import { Inter, Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Edudoc - Get your notes for free",
  description: "Created by Aryan & Deepak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClerkProvider>
          <Navbar />
          {children}
        </ClerkProvider>
        <Footer />
      </body>
    </html>
  );
}
