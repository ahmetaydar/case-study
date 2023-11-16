import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/UserContext";

const inter = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Trendify Sign Up",
  description: "Ahmet AYDAR Case Study",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <html lang="en" className={`${inter.variable}`}>
        <body className="bg-primarypurple1  bg-hero">
          {children}
          <ToastContainer />
        </body>
      </html>
    </UserProvider>
  );
}
