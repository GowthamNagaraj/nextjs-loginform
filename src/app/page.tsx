export default function Home() {
  return (
    <div className="container bg-slate-50 w-full h-full">
      <div className="flex items-center justify-center border w-full h-lvh">
        <div className="w-80 h-96 shadow-sm shadow-slate-200 border border-slate-200 rounded-3xl flex flex-col items-center justify-evenly">
          <div className="font-bold text-4xl">
            <h1 className="text-black" >LOGIN</h1>
          </div>
          <div className="text-center flex flex-col gap-4">
            <input type="text" name="username" id="username" placeholder="Username" className="border w-72 h-10 pl-2 text-xl border-slate-300 text-slate-800" />
            <input type="text" name="password" id="password" placeholder="Password" className="border w-72 h-10 pl-2 text-xl border-slate-300 text-slate-800"/>
          </div>
            <div className="flex justify-end w-72">
              <button className="border w-28 h-12 text-xl cursor-pointer hover:text-slate-50 hover:bg-black active:bg-gray-500 rounded-md">Login</button>
            </div>
        </div>
      </div>
    </div>
  );
}
