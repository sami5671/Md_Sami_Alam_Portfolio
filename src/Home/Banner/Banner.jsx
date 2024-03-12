import "./Banner.css";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import profile from "../../assets/images/profile2.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaNode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import ResumeButton from "../../Components/ResumeButton/ResumeButton";

const Banner = () => {
  // ----------------------------------------------------------------
  const [text] = useTypewriter({
    words: ["Web Developer", "MERN Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  // ----------------------------------------------------------------
  return (
    <>
      {/* for small devices  */}
      <div className="block lg:hidden flex justify-center mt-4">
        <img src={profile} className="rounded-full w-[200px]" alt="" />
      </div>
      {/* for small devices  */}

      <div className="flex justify-center lg:justify-start">
        {/* left */}
        <div className="mt-12 lg:mt-44 lg:ml-24">
          <h1 className="text-2xl lg:text-5xl lg:leading-snug text-slate-700 font-semibold font-serif">
            Hi, There.... <br />I Am Md Sami Alam
          </h1>
          <p className="mt-4 text-[18px] lg:text-3xl text-pink-500">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>

          {/* social links */}
          <div className="flex mt-2 lg:mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href="https://github.com/sami5671"
                  className="text-slate-800 hover:text-pink-300 rounded-full glow p-2"
                >
                  <FaGithub className="text-[28px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sami5671/"
                  className="text-slate-800 hover:text-pink-300 rounded-full glow p-2"
                >
                  <FaLinkedin className="text-[28px]" />
                </a>
                <a
                  href="https://www.instagram.com/samialam5671/"
                  className="text-slate-800 hover:text-pink-300 rounded-full glow p-2"
                >
                  <FaInstagramSquare className="text-[28px]" />
                </a>
                <a
                  href="https://www.facebook.com/samialam5559"
                  className="text-slate-800 hover:text-pink-300 rounded-full glow p-2"
                >
                  <FaFacebook className="text-[28px]" />
                </a>
              </div>
            </div>
          </div>

          {/* social links */}
          {/* button resume and contact Me */}
          <div className="flex gap-6 mt-6 mb-24 lg:mb-44">
            <div>
              <ResumeButton></ResumeButton>
            </div>

            <div>
              <button className=" bg-pink-200 px-2 py-1 rounded-md transition duration-300 ease-in-out hover:bg-pink-400 hover:text-white font-semibold">
                <span className="flex gap-1 items-center text-[16px]">
                  Contact Me <MdOutlineMarkEmailRead />
                </span>
              </button>
            </div>
          </div>
          {/* button resume and contact Me */}
        </div>

        {/* right */}
        <div>
          <div className="lol hidden lg:block h-[150px] w-[150px] lg:h-[400px] lg:w-[400px] lg:mr-32">
            <div className="js">
              <img src={js} width="50px" height="50px" alt="" />
            </div>
            <div className="mongodb">
              <SiMongodb className="h-[40px] w-[40px] text-green-500" />
            </div>
            <div className="express">
              <SiExpress className="h-[40px] w-[40px] text-black" />
            </div>
            <div className="react">
              <img src={react} alt="" />
            </div>
            <div className="nodejs">
              <FaNode className="h-[60px] w-[60px] text-green-700" />
            </div>
            <div className="firebase">
              <SiFirebase className="h-[40px] w-[40px] text-amber-500" />
            </div>
            <div className="profile">
              <img src={profile} width="250px" height="250px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
