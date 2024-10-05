import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-center flex-col my-5 py-5 m-[5%]">
      <div className="xl:mx-12 lg:px-4 md:px-1 px-1.5">
        <h1 className="font-montserratB text-4xl md:text-5xl my-5">
          Introducing the Team
        </h1>
        <div className="flex md:mt-10 mt-20 justify-center">
          <Image
            src="/assets/home/team.png"
            width={500}
            height={500}
            alt="sosc-team"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
