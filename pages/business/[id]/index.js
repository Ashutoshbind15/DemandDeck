import React from "react";
import { useBusiness } from "../../../hooks/queries";
import { useRouter } from "next/router";
import axios from "axios";
import Business from "../../../components/Business/Business";
import Resource from "../../../components/Resource/Resource";

const BusinessPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { business, error, isError, isLoading } = useBusiness(id);
  const terminationHandler = async () => {};
  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <div className="mt-12">
        {/* {JSON.stringify(business)} */}
        {/* <button className="btn btn-warning" onClick={terminationHandler}>
          Terminate!
        </button> */}
        <Business business={business} />
        <div className="flex justify-around w-full">
          <div className="w-1/3 bg-slate-700 text-white rounded-lg px-4 py-4">
            Requested
            {business?.resourcesRequested?.map((el) => (
              <div className="bg-pink-600 my-2 px-2 py-2 rounded-lg">
                <div>name: {el.resource.title}</div>
                <div>service: {el.resource.service}</div>
                <div>from : {el.from.name}</div>
              </div>
            ))}
          </div>

          <div className="w-1/3 bg-slate-700 text-white rounded-lg px-4 py-4">
            Possessed
            {business?.resources?.map((el) => (
              <div className="bg-pink-600 my-2 px-2 py-2 rounded-lg">
                <div>title: {el.resource.title}</div>
                <div>service: {el.resource.service}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
