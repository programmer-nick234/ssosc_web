import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
const About = () => {


  
  useGSAP(() => {

    const tl = gsap.timeline();
    tl.from(".about", {
      opacity: -1,
      duration: 1,
      x: -300,
    });
  });

  return (
    <div className=" flex justify-center items-center my-5 m-[5%] ">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="md:w-1/2">
          <h1 className="font-montserratB text-9xl md:text-5xl my-5 text-[#ff7b01]" >What we do ?</h1>
          <p className=" about font-montserratR text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis autem sed nostrum praesentium soluta doloribus facere vel, animi nobis neque odio repellat, vitae eum quis, consequuntur inventore expedita at!
            Expedita nostrum vero cupiditate. Perferendis nemo cupiditate nihil nobis provident esse necessitatibus tempore commodi sit atque minima ab modi ea vitae architecto facilis, dicta autem quod, libero assumenda laudantium quis!
            Libero quam iusto cum nulla facilis est nam adipisci dolores odio iste, velit laboriosam placeat quis maxime ratione. Praesentium, enim fugit sunt omnis velit pariatur voluptatem? Impedit eius molestias necessitatibus!
          </p>
        </div>
        <div className="md:pl-10 md:pr-0 px-20 md:py-0 py-20 flex items-center justify-center md:w-1/2">
          <Image
            className="lg:p-20 md:px-10 sm:p-10"
            width={1000}
            height={1000}
            src="/SSOSC3222.LOGO-WHITE.png"
            alt="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
