"use client"

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    username:"",
    password:""
  })

  const [error, setError] = useState("")

  function handleLogin(e){
    e.preventDefault();
    if (form.username == "") {
      setError("Please enter your username")
    }
    else if (form.password == "") {
      setError("Please enter your password")
    }
    else {
      alert("Login Success");
      setError("");
      console.log(form);
      setForm({
        username:"",
        password:""
      })
    }
  }

  return (
    <div className="container bg-slate-50 w-full h-full">
      <div className="flex items-center justify-center border w-full h-lvh">
        <div className="w-80 h-96 shadow-sm shadow-slate-200 border border-slate-200 rounded-3xl flex flex-col items-center justify-evenly">
          <div className="font-bold text-4xl">
            <h1 className="text-black" >LOGIN</h1>
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" name="username" id="username" placeholder="Username" className="border w-72 h-10 pl-2 text-xl border-slate-300 text-slate-800" value={form.username} onChange={(e)=>setForm((prevState)=>({...prevState,username:e.target.value}))}/>
            <span className="text-red-700 text-xs -mt-1 ml-2">{error}</span>
            <input type="text" name="password" id="password" placeholder="Password" className="border w-72 h-10 pl-2 text-xl border-slate-300 text-slate-800" value={form.password} onChange={(e)=>setForm((prevState)=>({...prevState,password:e.target.value}))}/>
            <span className="text-red-700 text-xs -mt-1 ml-2">{error}</span>
          </div>
            <div className="flex justify-end w-72">
              <button className="border w-28 h-12 text-xl text-slate-950 cursor-pointer hover:text-slate-50 hover:bg-black active:bg-gray-500 rounded-md" onClick={(e)=>handleLogin(e)}>Login</button>
            </div>
        </div>
      </div>
    </div>
  );
}
