"use client";
import React, { useState } from "react";
import loginToTMDB from "../../action/loginToTMDB";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (event : any) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      router.push(`/Category/${searchQuery.trim()}`);
    }
  };
  return (
    <div className="navbar absolute z-50 px-4 lg:px-10 xl:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <Link href={"/"}>
            <img
              className="w-14 lg:w-20 xl:w-28"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-end flex items-center gap-4">
       <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input input-bordered w-full md:w-auto h-10 bg-transparent"
          />
        </div>
        <label htmlFor="my_modal_7" className="text-sm font-semibold md:text-md cursor-pointer hover:text-slate-400">
          Login
        </label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box w-96">
            <h3 className="font-bold text-xl">Sign in</h3>
            <p className="text-slate-400">Sing in to your TMDB account</p>
            <form action={loginToTMDB}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </label>
              <button onClick={() => alert("Opps Under maintenance")} className="btn bg-red-500 hover:bg-red-600 text-white my-4 w-full">
                Login
              </button>
              <div className="divider text-xs my-0">or</div>
              <button className="btn btn-default text-white my-4 w-full">
                Login as Guest
              </button>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </div>
  );
}
