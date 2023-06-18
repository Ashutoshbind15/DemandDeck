import React from "react";
import { usePolls } from "../../hooks/queries";
import DemandsPageComponent from "../../components/DemandsPage";
import { useSession } from "next-auth/react";
import UnAuth from "../../components/UI/UnAuth";

const DemandsPage = () => {
  const { data: session } = useSession();
  const { demands, isError, isLoading, error } = usePolls();
  // console.log(demands);

  if (session) {
    return (
      <div>
        <DemandsPageComponent demands={demands} />
      </div>
    );
  } else {
    return <UnAuth text={"SignIn or Login to continue"} />;
  }
};

export default DemandsPage;
