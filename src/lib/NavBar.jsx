import { useState } from "react";
import { LinkList } from "./shared/LinkList";
import { Logo } from "./shared/Logo";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <nav className="fixed flex w-full items-center justify-around bg-sky-50 p-2">
      {/* pass menuOpen dinamically to the Logo component */}
      <Logo menuOpen={menuOpen} />
      {/* company phone number and email */}
      <div className="hidden md:block">
        <LinkList />
      </div>
      <div className="">
        <p className="text-xs text-slate-900">
          <a href="tel:1234567890">+1 (123) 456-7890</a>
        </p>
        <p className="text-xs text-slate-900">
          <a href="mailto:info@landinggeeks.com">info@landinggeeks.com</a>
        </p>
      </div>
      <div className="group h-full rounded-md p-2 shadow-md transition-all duration-300 hover:bg-slate-300 hover:shadow-xl lg:hidden">
        <div
          className={`flex h-4 w-4 cursor-pointer flex-col items-center justify-around gap-1 transition-all duration-150 
            ${menuOpen ? "" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-1 w-full rounded-full bg-slate-900 transition-all duration-150 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-3/4 rounded-full bg-slate-900 transition-all duration-150 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-full rounded-full bg-slate-900 transition-all duration-150 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
}
