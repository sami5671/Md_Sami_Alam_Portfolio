// react icons
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import js from "../../assets/images/js.png";
import { FaLinkedin } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub, FaNode } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

// react hot toast & sweet alert
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

// react component
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import profile from "../../assets/images/profile2.png";
import ResumePDF from "../../assets/images/Md_Sami_Alam.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ContactModal from "../../Components/ContactModal/ContactModal";
import ResumeButton from "../../Components/ResumeButton/ResumeButton";

// css
import "./Banner.css";

const Banner = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, []);
  // ------------------------Resume Download----------------------------------------
  const handleDownload = () => {
    Swal.fire({
      title: "Are you sure you want to Download?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = ResumePDF;
        link.download = "MD_SAMI_ALAM.pdf";
        link.click();

        Swal.fire({
          title: "Downloaded",
          text: "Your resume has been downloaded successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Download cancelled",
          color: "lime",
          icon: "info",
        });
      }
    });
  };
  //  ----------------------------------------------------------------
  // ------------------------------React TypeWriter----------------------------------
  const [text] = useTypewriter({
    words: ["Web Developer", "MERN Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  // ----------------------------Email js for sending Email------------------------------------
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_krbu6f9",
        "template_bjttpzi",
        form.current,
        "cBaUoRkJgclAkWIap"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully Send the Email. OK!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // ----------------------------------------------------------------
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {/* for small devices  */}
      <div className="block lg:hidden flex justify-center mt-4">
        <img src={profile} className="rounded-full w-[200px]" alt="" />
      </div>
      {/* for small devices  */}
      <div className="flex justify-center lg:justify-start text-white">
        {/* left */}
        <div className="mt-12 lg:mt-44 lg:ml-24">
          <h1 className="text-2xl lg:text-5xl lg:leading-snug font-semibold font-serif">
            Hi, There.... <br />I Am Md Sami Alam
          </h1>
          <p className="mt-4 text-[18px] lg:text-3xl font-semibold text-cyan-300">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>

          {/* social links */}
          <div className="flex mt-2 lg:mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href="https://github.com/sami5671"
                  className="text-white rounded-full glow p-2"
                >
                  <FaGithub className="text-[28px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sami5671/"
                  className="text-white  rounded-full glow p-2"
                >
                  <FaLinkedin className="text-[28px]" />
                </a>
                <a
                  href="https://www.instagram.com/samialam5671/"
                  className="text-white  rounded-full glow p-2"
                >
                  <FaInstagramSquare className="text-[28px]" />
                </a>
                <a
                  href="https://www.facebook.com/samialam5559"
                  className="text-white  rounded-full glow p-2"
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
              <ResumeButton handleDownload={handleDownload} />
            </div>
            <div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="bg-black px-2 py-1 rounded-md transition duration-300 ease-in-out hover:bg-cyan-600 text-white font-semibold"
              >
                <span className="flex gap-1 items-center text-[16px]">
                  Contact Me <MdOutlineMarkEmailRead />
                </span>
              </button>
            </div>
            {/*for modal  */}
            <ContactModal form={form} sendEmail={sendEmail} loading={loading} />
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
              <SiExpress className="h-[40px] w-[40px] text-white" />
            </div>
            <div className="react">
              <RiReactjsFill className="h-[40px] w-[40px] text-cyan-300 animate-spin" />
            </div>
            <div className="nodejs">
              <FaNode className="h-[60px] w-[60px] text-green-400" />
            </div>
            <div className="firebase">
              <SiFirebase className="h-[40px] w-[40px] text-amber-500" />
            </div>
            <div className="nextJs">
              <TbBrandNextjs className="h-[40px] w-[40px] text-white" />
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
