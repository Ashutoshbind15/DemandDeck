import React, { useState } from "react";
import AshutoshHuman from "../assets/images/AshutoshHuman.jpeg";
import AshutoshS from "../assets/images/AshutoshS.jpeg";
import Shazeb from "../assets/images/Shazeb.jpeg";
import Image from "next/image";
// import Dashboard from "./Dashboard";

export default function Plans() {
  // const [showContent1, setShowContent1] = useState(false);
  // const [showContent2, setShowContent2] = useState(false);
  // const [showContent3, setShowContent3] = useState(false);

  // const [sidebarSel, setSidebarSel] = useState("bus");

  // console.log(setSidebarSel);

  return (
    <div className="py-6 my-6 ml-3 pl-3">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl  h-[660px] my-4 hover:scale-105 duration-500">
          <div className="h-[350px]">
            <Image
              src={Shazeb}
              className="object-fill h-full w-full"
              alt={"profile"}
            />
            <div className="p-4">
              <div></div>
              <br></br>
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[660px] my-4 hover:scale-105 duration-500">
          <div className="h-[350px]">
            <Image
              src={AshutoshHuman}
              className="object-fill h-full w-full"
              alt={"profile"}
            />
            <div className="p-4">
              <div>
                Introducing Ashutosh Bind, a talented full stack web developer
                currently pursuing his second year at NIT Patna. Ashutosh has
                demonstrated remarkable proficiency in web development, having
                already created an impressive website using Next.js and Node.
                Along with his love for coding, Ashutosh has a deep-seated
                interest in exploring the latest technologies and staying
                abreast of the newest developments in the tech world. He is
                always eager to learn about new advancements in the industry and
                is constantly pushing himself to learn more.
              </div>

              <br></br>
            </div>
          </div>
        </div>
        <div className="shadow-xl h-[660px] my-4 hover:scale-105 duration-500">
          <div className="h-[350px]">
            <Image
              src={AshutoshS}
              className="object-fill h-full w-full"
              alt={"profile"}
            />
            <div className="p-4">
              <div></div>

              <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* /* <Dashboard /> */}
    </div>
  );
}
