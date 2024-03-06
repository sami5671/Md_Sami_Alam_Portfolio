import "./Banner.css";
import js from "../../assets/images/js.png";
import mongodb from "../../assets/images/mongodb.png";
import express from "../../assets/images/express.png";
import react from "../../assets/images/react.png";
import nodejs from "../../assets/images/node.jpg";
import profile from "../../assets/images/profile2.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
      <div className="flex justify-center lg:justify-start">
        {/* left */}
        <div className="lg:mt-44 lg:ml-24">
          <h1 className="text-5xl leading-snug text-slate-700 font-semibold font-serif">
            Hi, There.... <br />I Am Md Sami Alam
          </h1>
          <p className="mt-4 text-3xl ">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
        </div>

        {/* right */}
        <div>
          <div className="lol h-[150px] w-[150px] lg:h-[400px] lg:w-[400px] lg:mr-32">
            <div className="js">
              <img src={js} width="50px" height="50px" alt="" />
            </div>
            <div className="mongodb">
              <img src={mongodb} width="50px" height="50px" alt="" />
            </div>
            <div className="express">
              <img src={express} width="50px" height="50px" alt="" />
            </div>
            <div className="react">
              <img src={react} width="50px" height="50px" alt="" />
            </div>
            <div className="nodejs">
              <img src={nodejs} width="50px" height="50px" alt="" />
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
