import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Publications from "./components/publications";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import { h__posts } from "./db";


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Header />
      <About />
      <Publications home__posts={h__posts} />
      <Gallery />
      <Footer />
    </main>
  );
}
