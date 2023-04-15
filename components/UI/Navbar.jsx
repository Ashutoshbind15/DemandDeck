import { signIn, useSession } from "next-auth/react";
import React from "react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const signouthandler = () => {
    signOut();
    // signIn("credentials", { email: "", password: "" });
  };

  return (
    <div className="bg-blue-600 text-white">
      <div className="btn btn-ghost">Navbar</div>
      <div onClick={() => signouthandler()}>Logout</div>
    </div>
  );
};

export default Navbar;
