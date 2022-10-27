import React, { useState } from "react";
import { Card } from "./lib/shared/Card";
import Footer from "./lib/Footer";
import Header from "./lib/Header";
import Services from "./lib/sections/Services";
import Clock from "./lib/sections/Clock";
import NavBar from "./lib/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="w-full">
        <Clock />
      </main>
      <Footer />
    </>
  );
}

export default App;
