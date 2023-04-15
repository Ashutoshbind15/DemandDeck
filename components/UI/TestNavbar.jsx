import { signIn, useSession } from "next-auth/react";
import React from "react";
import { signOut } from "next-auth/react";
import { useUser } from "../../hooks/queries";
import Link from "next/link";

const TestNav = () => {
  const { data: session } = useSession();
  const { user, isError, isLoading, error } = useUser();

  const signouthandler = () => {
    signOut();
  };

  console.log(user);

  return (
    <div className="bg-blue-600 text-white flex justify-between items-center">
      <div className="btn btn-ghost">DemandDeck</div>
      <div className="flex items-center justify-around">
        {session ? (
          <div onClick={() => signouthandler()}>Logout</div>
        ) : (
          <Link href={"/auth"}>Login</Link>
        )}

        <div> {session && (isLoading ? "Loading" : user?.name)}</div>
      </div>
    </div>
  );
};

export default TestNav;
