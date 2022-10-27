import NavBar from "./NavBar";
import Clock from "./sections/Clock";

export default function Header() {
  return (
    <header className="flex w-full justify-center bg-gradient-to-b from-sky-50">
      <NavBar />
      <Clock />
    </header>
  );
}
