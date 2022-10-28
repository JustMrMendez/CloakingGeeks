import React, { useState } from "react";
import Footer from "./lib/Footer";
import Clock from "./lib/shared/Clock";
import NavBar from "./lib/NavBar";
import Semaforo from "./lib/shared/StreetLight";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <main className="mx-auto my-auto">
        <Clock />
        {/* <Semaforo /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
