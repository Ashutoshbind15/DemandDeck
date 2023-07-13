import React from "react";
import DisplayCards from "../components/UI/DisplayCards";

const AboutPage = () => {
  return (
    <div className="flex flex-col px-12">
      <div className="font-bold font-mono text-center text-3xl mt-4 text-sec">
        Meet the minds and devs of the app
      </div>
      <div className="flex flex-col">
        <DisplayCards
          left={true}
          title={"Ashutosh Bind"}
          desc={
            "Ashutosh Bind, is a full stack web developer who loves hld,lld, security and scale. Pursuing his third year in computer science at NIT Patna. Having built multiple full stack apps in the first two years of college, he is now looking forward to dive deeper in the tech industry and is currently studying graphql and typescript. He looks forward to blogging and open-source as well"
          }
        />
        <DisplayCards
          left={false}
          title={"Shazeb Khan"}
          desc={`Introducing Shazeb Khan, a talented full stack web developer
                currently pursuing his third year at NIT Patna. Shazeb has
                demonstrated remarkable proficiency in web development, having
                already created an impressive website using Next.js and Node.
                Along with his love for coding, Shazeb has a deep-seated
                interest in exploring the latest technologies and staying
                abreast of the newest developments in the tech world. He is
                always eager to learn about new advancements in the industry and
                is constantly pushing himself to learn more.`}
        />

        <DisplayCards
          left={true}
          title={"Ashutosh Singh"}
          desc={`Meet Ashutosh Singh, a talented full stack web developer who has
                already made impressive strides in his career despite being only
                in his third year at NIT Patna. Ashutoshs proficiency in web
                development has allowed him to create a stunning website using
                Next.js and Node. However, his interests are not limited to just
                coding. He also has a strong penchant for reading and
                discovering the mysteries of Hindu mythology and paranormal
                activities. With his diverse skill set and insatiable curiosity,
                Ashutosh is undoubtedly a rising star in the tech world.`}
        />
        <DisplayCards
          left={false}
          title={"Faiz Khan"}
          desc={`Introducing Faiz Khan, a talented full stack web developer
                . Faiz has
                demonstrated remarkable proficiency in web development, having
                already created an impressive website using Next.js and Node.
                Along with his love for coding, Faiz has a deep-seated
                interest in exploring the latest technologies and staying
                abreast of the newest developments in the tech world. He is
                always eager to learn about new advancements in the industry and
                is constantly pushing himself to learn more.`}
        />
      </div>
    </div>
  );
};

export default AboutPage;
