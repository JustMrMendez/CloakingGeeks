import React, { useState } from "react";
import Footer from "./lib/Footer";
import Clock from "./lib/shared/Clock";
import NavBar from "./lib/NavBar";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <main className="w-full">
        <Clock />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
