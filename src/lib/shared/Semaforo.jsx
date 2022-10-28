export default function Semaforo() {
  return (
    <>
      <div className="flex h-fit w-fit flex-col justify-around gap-5 rounded bg-slate-600 p-7">
        <div className="hover:bg-red border-2-border-red h-20 w-20 rounded-full bg-slate-900 shadow-sm hover:bg-red-500 hover:shadow-2xl"></div>
        <div className="hover:bg-red border-2-border-red h-20 w-20 rounded-full bg-slate-900 shadow-sm hover:bg-yellow-500 hover:shadow-2xl"></div>
        <div className="hover:bg-red border-2-border-red h-20 w-20 rounded-full bg-slate-900 shadow-sm hover:bg-green-500 hover:shadow-2xl"></div>
      </div>
    </>
  );
}
