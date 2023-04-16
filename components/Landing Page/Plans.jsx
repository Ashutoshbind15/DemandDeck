import Image from "next/image";
import React, { useState } from "react";

export default function Plans() {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl h-[500px] my-4 hover:scale-105 duration-500">
          <div className="p-6">
            <p className="text-xl p-4">
              <strong>Problems in signing?</strong>
            </p>
            <div className="p-4">
              {showContent1 && (
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              )}
              <br></br>
              {!showContent1 && (
                <div className="h-[250px] w-full mb-8">
                  <Image
                    src="/images/auth.png"
                    className="h-full w-full object-contain"
                    width={200}
                    height={100}
                    alt="auth"
                  />
                </div>
              )}

              <button
                onClick={() => setShowContent1(!showContent1)}
                className="bg-pink hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                {showContent1 ? "Hide Content" : "Show Content"}
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[500px] my-4 hover:scale-105 duration-500">
          <div className="p-6">
            <p className="text-xl p-4">
              <strong>About us</strong>
            </p>
            <div className="p-4">
              {showContent2 && (
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              )}
              <br></br>
              {!showContent2 && (
                <div className="h-[250px] w-full mb-8">
                  <img
                    src="/images/about.jpg"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <button
                onClick={() => setShowContent2(!showContent2)}
                className="bg-pink hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                {showContent2 ? "Hide Content" : "Show Content"}
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[500px] my-4  hover:scale-105 duration-500">
          <div className="p-6">
            <p className="text-xl p-4">
              <strong>How do I check the progress of my proposal?</strong>
            </p>
            <div className="p-4">
              {showContent3 && (
                <div>
                  if Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                  minima quos nisi modi amet quae eveniet ullam, quaerat nemo
                  repellendus maxime hic sit fuga tempore eaque illo numquam eum
                  nihil!
                </div>
              )}
              <br></br>
              {!showContent3 && (
                <div className="h-[250px] w-full mb-8">
                  <Image
                    src="/images/experience.png"
                    className="h-full w-full object-contain"
                    width={200}
                    height={100}
                    alt="exp"
                  />
                </div>
              )}
              <button
                onClick={() => setShowContent3(!showContent3)}
                className="bg-pink hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                {showContent3 ? "Hide Content" : "Show Content"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
