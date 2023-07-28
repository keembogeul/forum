import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Claim Page",
  description: "Receive Claim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href={"/claim"} className="logo">
            클레임 접수
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
