import { useState, useEffect } from "react";

export default function Clock() {
  const [Clock, setClock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(Clock + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [Clock]);

  return (
    <section className="mx-auto h-36 w-36 bg-slate-300 p-8 shadow-md transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
      <h1 className="text-center align-middle text-7xl">{Clock}</h1>
    </section>
  );
}
