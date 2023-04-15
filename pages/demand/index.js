import React from "react";
import { usePolls } from "../../hooks/queries";

const DemandsPage = () => {
  const { demands, isError, isLoading, error } = usePolls();
  console.log(demands);

  return <div>DemandsPage</div>;
};

export default DemandsPage;
