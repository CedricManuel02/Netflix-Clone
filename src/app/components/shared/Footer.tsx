import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer items-center justify-start lg:justify-between py-12 px-4 lg:px-20 text-neutral-content bg-black">
      <aside className="items-center grid-flow-col">
        <img
          className="w-14 lg:w-24 xl:w-24"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <p>Copyright © {new Date().getFullYear()} - <Link className="font-semibold text-purple-500" href={"https://cedricmanuel.netlify.app"}>Cedric Manuel</Link></p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href={"https://github.com/CedricManuel02"}>
          <Github/>
        </Link>
        <Link href={"https://www.linkedin.com/in/cedric-manuel-763902293/"}>
         <Linkedin/>
        </Link>
        <Link href={"https://www.facebook.com/cedricmanuel19"}>
          <Facebook/>
        </Link>
      </nav>
    </footer>
  );
}
