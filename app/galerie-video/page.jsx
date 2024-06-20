import React from 'react'
import Header from "../components/header-about"
import Footer from "../components/footer"
// import VideosMain from "../components/videos-main"

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        {/* <VideosMain/> */}
        <Footer />
    </main>
  )
}

export default Page;
