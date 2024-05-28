import React from 'react'
import Header from "../components/header-about"
import Organizational from "../components/organizational/page";
import Footer from "../components/footer"
import PhotosMain from "../components/photos-main"

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <PhotosMain/>
        <Footer />
    </main>
  )
}

export default Page;
