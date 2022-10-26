export function Card({ img }) {
  return (
    <>
      <div className="group flex max-h-96 max-w-[280px] flex-col items-center justify-between gap-3 overflow-hidden rounded-lg bg-slate-100 pb-4 text-center text-slate-900 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
        <a href="/" className="max-h-[200px] max-w-xs overflow-hidden">
          <img
            className="transition-transform duration-300 hover:rotate-1 hover:scale-[1.03]"
            src={img}
            alt=""
          />
        </a>
        <h1 className="bg-red line text-xl font-bold">Card Title</h1>
        <p className="px-4 text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          id, iste molestias excepturi aut et provident non voluptate. Error
          delectus architecto saepe consequatur!
        </p>
        <button className="rounded bg-slate-900 py-1 px-3 text-base text-white transition-all duration-300 hover:!-translate-y-[1px] hover:!scale-100 hover:bg-slate-800 group-hover:translate-y-[1px] group-hover:scale-105">
          Find Out More
        </button>
      </div>
    </>
  );
}
