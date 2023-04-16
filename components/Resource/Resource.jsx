import axios from "axios";
import React from "react";

const Resource = ({ resource, bussId }) => {
  const requestHandler = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/api/resource/request",
      { itemId: resource.productId, allId: resource.sellerId, id: bussId }
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-around py-4 px-2 rounded-lg shadow-lg bg-gray-800 font-semibold text-white my-4 mx-8">
        <div className="">{resource.product}</div>
        <div>service: {resource.service}</div>
        <div>sold by: {resource.seller}</div>
        <div>Amount: {resource.amt}</div>

        <div className="my-2 flex justify-end items-center">
          <div className="btn btn-ghost" onClick={requestHandler}>
            Request
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
