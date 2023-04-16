import React from "react";
import { useUser } from "../../hooks/queries";
import Allocator from "../../components/Allocator/Allocator";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const AllocatorPage = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <Allocator allocator={user} />
    </div>
  );
};

export default AllocatorPage;

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session?.user?.role !== "allocator") {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};
