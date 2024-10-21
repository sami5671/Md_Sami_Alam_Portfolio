import { GiLaptop } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa6";
// import { Carousel } from "react-responsive-carousel";

const ProjectCard = ({ item }) => {
  return (
    <>
      <div
        className="w-full py-2 flex flex-col-reverse lg:flex-row justify-center"
        data-aos=""
        data-aos-duration="300"
      >
        <div className="w-full px-2">
          <h3 className="text-2xl text-pink-500">{item?.title}</h3>
          <h2 className="text-xl mb-2 text-pink-900 font-semibold">
            {item?.subTitle}
          </h2>
          <p className="text-base text-slate-300 -mt-1">{item?.category}</p>
          <p>{item?.description}</p>
          <div className="mt-4 flex flex-col">
            <div className="mb-4">
              <h1 className="font-bold text-2xl mb-2 text-slate-200">
                Technology:{" "}
              </h1>
              <div className="flex flex-wrap gap-2 text-white font-bold">
                <span className="text-blue-500 text-3xl">
                  <FaReact />
                </span>
                <span className="text-white text-3xl">
                  <SiExpress />
                </span>
                <span className="text-green-500 text-3xl">
                  <SiMongodb />
                </span>
                <span className="text-green-800 text-3xl">
                  <FaNode />
                </span>
                <span className="text-blue-400 text-3xl">
                  <SiTailwindcss />
                </span>
                <span className="text-white text-3xl hidden lg:block">
                  <SiVercel />
                </span>
                <span className="text-amber-500 text-3xl hidden lg:block">
                  <SiFirebase />
                </span>
                <span className="text-red-500 text-3xl hidden lg:block">
                  <SiReactquery />
                </span>
                <span className="text-purple-600 text-3xl hidden lg:block">
                  <SiAxios />
                </span>
                <span className="text-cyan-400 text-3xl hidden lg:block">
                  <FaCcStripe />
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 block lg:hidden">
              <span className="text-black text-3xl ">
                <SiVercel />
              </span>
              <span className="text-amber-500 text-3xl ">
                <SiFirebase />
              </span>
              <span className="text-red-500 text-3xl">
                <SiReactquery />
              </span>
              <span className="text-purple-600 text-3xl">
                <SiAxios />
              </span>
            </div>
          </div>
          {/*  */}
          <div className="text-white mt-4 flex gap-1 lg:gap-4 mb-2">
            <a
              href={item?.liveLink}
              className="bg-slate-400 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
            >
              <span className="flex gap-2 items-center">
                <GiLaptop className="text-xl" />
                Live Site
              </span>
            </a>
            <a
              href={item?.clientLink}
              className="bg-green-700 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
            >
              <span className="flex gap-2 items-center">
                <FaGithub className="text-xl" />
                Client Site
              </span>
            </a>
            <a
              href={item?.serverLink}
              className="bg-orange-400 px-4 py-1 text-white font-bold hover:bg-white hover:text-black rounded-full"
            >
              <span className="flex gap-2 items-center">
                <FaGithub className="text-xl" />
                Server Site
              </span>
            </a>
          </div>
        </div>

        <div className="w-full h-full mb-3 lg:mb-24 overflow-hidden relative cursor-pointer group">
          <div className="">
            <img
              className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
              src={item?.image}
              alt="ImageOne"
            />
            <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-pink-600 via-green-600 to-green-200 opacity-20"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
