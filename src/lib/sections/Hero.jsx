// hero section

import HeroSvg from "./HeroSvg";

export default function Hero() {
  return (
    <section className="flex h-[500px] max-w-5xl gap-10 pt-10">
      {/* hero section with searchbar on the left a title and an image on the right side */}
      <div className="flex w-full flex-col items-center justify-center gap-3 pt-10 md:w-1/2">
        <h1 className="text-center font-serif text-xl font-bold text-slate-800 md:text-5xl">
          Need a website? Just Call{" "}
          <div className="">
            <span className="text-red-500">
              Landing <span className="text-right text-blue-500">Geeks</span>
            </span>
          </div>
        </h1>
        <p className="text-center text-xl text-slate-900 md:text-2xl">
          Fastest Built marketing websites meant to convert
        </p>
        <div className="mt-5 flex w-full items-center justify-center">
          {/* ask user for name and phone or email to request quote */}
          <form className="flex w-full flex-col gap-3">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border-2 border-slate-900 p-2 focus:border-red-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone or Email"
                className="w-full rounded-md border-2 border-slate-900 p-2 focus:border-red-500 focus:outline-none"
              />
            </div>
            <button className="w-full rounded-md bg-red-500 p-2 font-bold text-white hover:bg-red-600 focus:outline-none">
              Request Quote
            </button>
          </form>
        </div>
      </div>
      <HeroSvg />
    </section>
  );
}
