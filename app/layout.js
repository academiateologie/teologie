import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Academia de teologie ortodoxă din Moldova",
  description: "Academia de teologie ortodoxă din Moldova",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

