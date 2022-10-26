import React, { useState } from "react";
import { Card } from "./lib/shared/Card";
import Footer from "./lib/Footer";
import Header from "./lib/Header";
import Services from "./lib/sections/Services";

function App() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* <div className="flex flex-wrap justify-around gap-5">
          <Card img="src/source/1.jpg" />
          <Card img="src/source/2.jpg" />
          <Card img="src/source/3.jpg" />
          <Card img="src/source/4.jpg" />
        </div> */}
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
