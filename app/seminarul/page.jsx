import React from "react";
import Header from "../components/header-about";
import Footer from "../components/second-footer";
import Content from "../components/seminariu-main";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}

export default Page;
