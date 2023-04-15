import React from "react";
import { useBusiness } from "../../../hooks/queries";
import { useRouter } from "next/router";
import axios from "axios";

const BusinessPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { business, error, isError, isLoading } = useBusiness(id);
  const terminationHandler = async () => {};
  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <div className="mt-12">
        {JSON.stringify(business)}
        {/* <button className="btn btn-warning" onClick={terminationHandler}>
          Terminate!
        </button> */}
      </div>
    </div>
  );
};

export default BusinessPage;
