import React, { useState } from "react";
import AshutoshHuman from "../assets/images/AshutoshHuman.jpeg";
import AshutoshS from "../assets/images/AshutoshS.jpeg";
import Shazeb from "../assets/images/Shazeb.jpeg";
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
            <img src={Shazeb} className="object-fill h-full w-full" />
            <div className="p-4">
              <div>
                Introducing Shazeb Khan, a talented full stack web developer
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
            <img src={AshutoshHuman} className="object-fill h-full w-full" />
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
        <div className="shadow-xl h-[660px] my-4  hover:scale-105 duration-500">
          <div className="h-[350px]">
            <img src={AshutoshS} className="object-fill h-full w-full" />
            <div className="p-4">
              <div>
                Meet Ashutosh Singh, a talented full stack web developer who has
                already made impressive strides in his career despite being only
                in his second year at NIT Patna. Ashutosh's proficiency in web
                development has allowed him to create a stunning website using
                Next.js and Node. However, his interests are not limited to just
                coding. He also has a strong penchant for reading and
                discovering the mysteries of Hindu mythology and paranormal
                activities. With his diverse skill set and insatiable curiosity,
                Ashutosh is undoubtedly a rising star in the tech world.
              </div>

              <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* /* <Dashboard /> */}
    </div>
  );
}
