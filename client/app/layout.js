import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edudoc - Get your notes for free",
  description: "Created by Aryan & Deepak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Navbar />
          {children}</ClerkProvider>
      </body>
    </html>
  );
}
