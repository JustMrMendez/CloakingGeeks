import NavBar from "./NavBar";
import Hero from "./sections/Hero";

export default function Header() {
  return (
    <header className="flex w-full justify-center bg-gradient-to-b from-sky-50">
      <NavBar />
      <Hero />
    </header>
  );
}
