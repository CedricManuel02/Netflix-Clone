import React from "react";
import loginToTMDB from "../../api/loginToTMDB";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar absolute z-50 px-4 lg:px-10 xl:px-20">
      <div className="navbar-start">
        <div className="dropdown">
        <Link href={"/"}>
          <img className="w-14 lg:w-20 xl:w-28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
        </Link>
      </div>
      </div>
      <div className="navbar-end">
        <label htmlFor="my_modal_7" className="text-sm font-semibold md:text-md cursor-pointer hover:text-slate-400">Login</label>
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
              <input type="text" name="username" placeholder="Enter your username" className="input input-bordered w-full" />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" />
            </label>
            <button className="btn btn-primary text-white my-4 w-full">Login</button>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
      </div>
    </div>
  );
}
