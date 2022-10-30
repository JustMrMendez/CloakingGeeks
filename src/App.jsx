import React, { useState } from "react";
import Footer from "./lib/Footer";
import Clock from "./lib/shared/Clock";
import NavBar from "./lib/NavBar";
import TodoList from "./lib/shared/TodoList";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <main className="mx-auto my-auto">
        <TodoList />
      </main>
      <Footer />
    </>
  );
}

export default App;
