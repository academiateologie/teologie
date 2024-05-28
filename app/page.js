// "use client"
import React from "react"
import Header from "./components/header"
import About from "./components/about"
import Publications from "./components/publications"
import Gallery from "./components/gallery"
import Footer from "./components/footer"
import {posts} from "./db"
// import { gql } from "@apollo/client";
// import client from "../apollo-client";

// const GET_DATA = gql`
//   query GetData {
//     getPosts {
//       id
//       text_title
//       text_subtitle
//       slug_text
//       date_created
//       post_img
//       description_text
//       post_img_collection
//     }
//   }
// `;

export default async function Home() {
  //  const { data } = await client.query({
  //    query: GET_DATA,
  //  });

   
  //  const posts = data.getPosts
  // console.log("posts ", posts)
  // console.log("posts ", posts.id);
  
return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <About />
      <Publications posts={posts}/>
      <Gallery />
      <Footer />
    </main>
  );
}