import { Inter } from "next/font/google";
import "./globals.scss";
import Favicon from "./favicon.ico";
// import { ApolloProvider } from "@apollo/client";
// import {client } from "../apollo-client"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Academia de Teologie Ortodoxă din Moldova",
  description: "Academia de teologie ortodoxă din Moldova",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    // <ApolloProvider client={client}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    // </ApolloProvider>
  );
}

