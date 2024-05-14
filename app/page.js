// "use server"
import Header from "./components/header"
import About from "./components/about"
import Publications from "./components/publications"
import Gallery from "./components/gallery"
import Footer from "./components/footer"

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <About />
      <Publications />
      <Gallery />
      <Footer />
    </main>
  );
}




