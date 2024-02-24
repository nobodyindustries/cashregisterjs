import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CashRegister[JS]",
  description: "Sell, list and invoice!",
};

export default function RootLayout({ children }) {
  return (
    <html className="p-0" lang="en">
      <body className={`${inter.className} w-full p-8 flex flex-wrap`}>
      <div className="w-full">
        <div className="w-[200px] mb-4">
          <Logo />
        </div>
      </div>
      <div className="w-full">
        {children}
      </div>
      </body>
    </html>
  );
}
