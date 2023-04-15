import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getUserData } from "../../utils/api";
import { useUser } from "../../hooks/queries";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { data: session } = useSession();

  const signouthandler = () => {
    signOut();
    // signIn("credentials", { email: "", password: "" });
  };

  const { user, isLoading, isError, error } = useUser();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar justify-between bg-prim sticky top-0 z-10">
      <Link href="/" className="text-xl font-bold text-white">
        DemandDeck
      </Link>
      {toggle ? (
        <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        />
      )}
      <div className="w-1/3 hidden md:flex justify-between text-white">
        <Link href="/">Home</Link>
        <Link href="/demands">Demands</Link>
        <Link href="/create">Create</Link>
      </div>

      <Link href="/authentication" className="hidden md:block">
        <button className="btn w-40 rounded-full border-none bg-white text-black transition duration-300 ease-in-out hover:bg-black hover:text-white">
          Login
        </button>
      </Link>

      {/* Responsive Menu */}
      <div
        className={`duration-300 flex flex-col items-start justify-around md:hidden w-full h-[200px] text-white fixed bg-black top-16 
       ${toggle ? "left-[0]" : "left-[-100%]"}  `}
      >
        <Link href="/">Home</Link>
        <Link href="/demands">Demands</Link>
        <Link href="/create">Create</Link>
        <Link href="/authentication">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;


// import { signIn, useSession } from "next-auth/react";
// import React from "react";
// import { signOut } from "next-auth/react";

// const Navbar = () => {
//   const { data: session } = useSession();
//   console.log(session);

//   const signouthandler = () => {
//     // signOut();
//     signIn("credentials", { email: "", password: "" });
//   };

//   return (
//     <div className="bg-blue-600 text-white">
//       <div className="btn btn-ghost">Navbar</div>
//       <div onClick={() => signouthandler()}>Logout</div>
//     </div>
//   );
// };

// export default Navbar;
