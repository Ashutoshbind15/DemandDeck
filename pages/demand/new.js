import React from "react";
import CreatePage from "../../components/Demand/CreatePage";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const CreateDemand = () => {
  return (
    <div>
      <CreatePage />
    </div>
  );
};

export default CreateDemand;

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session?.user?.role !== "basic") {
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
