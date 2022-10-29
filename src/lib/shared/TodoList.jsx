export default function TodoList() {
  return (
    <>
      <h1 className="text-center text-5xl font-black text-slate-900">
        To Geeka do
      </h1>
      <div className="group relative h-96 w-96 shadow transition-all duration-500 hover:shadow-2xl">
        <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-around gap-3 bg-slate-200 p-5 accent-slate-200 shadow-md transition-all duration-500 hover:z-50 hover:!-translate-y-2 hover:shadow-2xl group-hover:translate-x-10 group-hover:translate-y-2 group-hover:rotate-12">
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
        </div>
        <div className="gap3 absolute top-0 left-0 flex h-full w-full flex-col justify-around bg-slate-200 p-5 accent-slate-200 shadow-md transition-all duration-500 hover:z-50 hover:!-translate-y-2 hover:shadow-2xl group-hover:-translate-x-10 group-hover:-translate-y-2 group-hover:-rotate-12">
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
        </div>
        <div className="gap3 absolute top-0 left-0 flex h-full w-full flex-col justify-around bg-slate-200 p-5 accent-slate-200 shadow-md transition-all duration-500 hover:z-50 hover:shadow-2xl">
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 py-2 px-4 shadow-sm">
            <input type="checkbox" name="rounded" id="" />
            <input
              type="text"
              className="w-full bg-transparent p-2 text-slate-200"
            />
          </div>
        </div>
      </div>
    </>
  );
}
