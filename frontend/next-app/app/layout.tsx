import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/nav/navBar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Nawy - Real Estate",
  description: "Nawy Real Estate app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <main className="flex-grow-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
