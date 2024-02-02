'use client'

import "./styles.css";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function RunCounter() {
  const [count, setCount] = useState(0);
  const [loadedCookies, setLoadedCookies] = useState(false);

  useEffect(() => {
    let cookieCount = parseInt(Cookies.get('run-count') || "0", 10);
    setCount(cookieCount)
    setLoadedCookies(true)
  }, [])

  const updateCount = (amount: number) => {
    setCount(prev => prev + amount);
    Cookies.set('run-count', (count+amount).toString(), { expires: 7 })
  }

  return (
    <div className="w-full flex flex-col items-center md:w-1/2">
      <p className="text-6xl text-center font-bold mt-8 text-white md:mt-20 lg:mt-26">You&apos;ve been on</p>
      <p className={`text-[12rem] font-black  bg-gradient-to-br from-[#ffffa8] to-[#ff3eaf] bg-clip-text text-transparent md:mt-8 ${loadedCookies != true && 'invisible'}`}>{count}</p>
      <p className="text-6xl font-bold text-white md:mt-4">{count == 1 ? 'run' : 'runs'}</p>
      <button 
        className="increase-button p-8 mt-16 md:mt-24 text-3xl bg-gradient-to-br from-green-400 to-green-600 rounded-lg  text-white font-semibold hover:bg-gradient-to-tl hover:from-green-500 hover:to-green-600"
        onClick={() => updateCount(1)}
      >
        I went on {count == 0 ? 'a' : 'another'} run!
      </button>
      {
        count > 0 &&
        <button 
          className=" decrease-button p-2 my-6 text-lg rounded-lg bg-gradient-to-br from-red-400 to-red-500 text-white font-semibold"
          onClick={() => updateCount(-1)}
        >
          I lied, remove a run :(
        </button>
      }
    </div>
  )
}