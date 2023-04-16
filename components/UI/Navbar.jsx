import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getUserData } from "../../utils/api";
import { useUser } from "../../hooks/queries";

import React, { useState } from "react";
import { Menu, Close } from "../../public/icons";

const Navbar = () => {
  const { data: session } = useSession();

  const signouthandler = () => {
    signOut();
    // signIn("credentials", { email: "", password: "" });
  };

  const { user, isLoading, isError, error } = useUser();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar justify-between bg-prim sticky top-0 z-10 px-6 text-xl">
      <Link href="/" className="text-xl font-bold text-white">
        DemandDeck
      </Link>
      {toggle ? (
        <button
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        >
          {Close}
        </button>
      ) : (
        <button
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        >
          {Menu}
        </button>
      )}
      <div className="w-1/3 hidden md:flex justify-between text-white">
        {session && (
          <Link
            href={`/auth/user/${session.user.id}`}
            className="hover:border-b-2 border-white"
          >
            {user?.name}
          </Link>
        )}
        <Link href="/demand" className="hover:border-b-2 border-white">
          Demands
        </Link>
        {session && session.user && session.user.role === "basic" && (
          <Link href="/demand/new" className="hover:border-b-2 border-white">
            Create
          </Link>
        )}
      </div>

      {!session && (
        <Link href="/auth" className="hidden md:block">
          <button className="btn w-40 rounded-full border-none bg-white text-black transition duration-300 ease-in-out  hover:text-prim hover:bg-white">
            Login
          </button>
        </Link>
      )}
      {!!session && (
        <button
          className="btn w-40 rounded-full border-none bg-white text-black transition duration-300 ease-in-out  hover:text-prim hover:bg-white"
          onClick={signouthandler}
        >
          Logout
        </button>
      )}

      <div
        className={`duration-300 flex flex-col items-start justify-around md:hidden w-full h-[200px] text-white fixed bg-black top-16 
       ${toggle ? "left-[0]" : "left-[-100%]"}  `}
      >
        <Link href="/">Home</Link>
        <Link href="/demand">Demands</Link>
        <Link href="/demand/new">Create</Link>
        <Link href="/auth">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
