import React from 'react'
import Header from "../components/header-about"
import Footer from "../components/footer"
import PostsMain from "../components/posts-main"

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <PostsMain/>
        <Footer />
    </main>
  )
}

export default Page;
