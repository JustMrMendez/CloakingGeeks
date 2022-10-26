import { useState, useEffect } from "react";

export function LinkList({
  links = [
    { id: 1, name: "Home", url: "#home" },
    { id: 2, name: "About", url: "#about" },
    { id: 3, name: "Contact", url: "#contact" },
    { id: 4, name: "Blog", url: "#blog" },
  ],
}) {
  // get the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // set the scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  onload = () => {
    const bgBox = document.querySelector("#bgBox");
    bgBox.style.pointerEvents = "none";
    // read url for #id and set link to active
    const url = window.location.href;
    const name = url.split("#")[1];
    console.log(name);
    const link = document.querySelector(`a[href="#${name}"]`);

    link.classList.add("text-blue-500");
    bgBox.style.transform = `translateX(${link.parentElement.offsetLeft}px)`;
    bgBox.style.width = `${link.offsetWidth}px`;
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = e.target.href;
    e.target.classList.add("text-blue-500");
    bgBox.style.transform = `translateX(${e.target.parentElement.offsetLeft}px)`;
    bgBox.style.width = `${e.target.offsetWidth}px`;

    links.forEach((link) => {
      if (link.id != e.target.id) {
        document.getElementById(link.id).classList.remove("text-blue-500");
      }
    });
  };
  return (
    <ul className="group relative flex flex-wrap items-center justify-around gap-5 text-slate-600 hover:text-slate-900">
      <div
        id="bgBox"
        className="absolute left-0 top-[26px] h-[2px] rounded bg-blue-500 transition-all"
      ></div>
      {links.map((link) => (
        <li key={link.id} className="transition-transform">
          <a
            id={link.id}
            href={link.url}
            onClick={handleClick}
            className="py-1 px-2 text-lg font-bold transition-all hover:!opacity-100 group-hover:opacity-20"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
