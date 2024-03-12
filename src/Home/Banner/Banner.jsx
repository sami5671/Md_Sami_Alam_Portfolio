import "./Banner.css";
import emailjs from "@emailjs/browser";
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
import Swal from "sweetalert2";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Banner = () => {
  // ----------------------------------------------------------------
  const [text] = useTypewriter({
    words: ["Web Developer", "MERN Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  // ----------------------------Email js------------------------------------

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="bg-pink-200 px-2 py-1 rounded-md transition duration-300 ease-in-out hover:bg-pink-400 hover:text-white font-semibold"
              >
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

      {/*for modal  */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-pink-50">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <section className="py-2">
            <div className="flex lg:justify-center mb-6">
              <h1 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-tr from-pink-700 to-lime-500 text-transparent bg-clip-text">
                Contact With Me
              </h1>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-2 lg:w-1/2"
            >
              <div className="lg:flex gap-6">
                <input
                  className="mb-2 py-2 px-4 border-2 border-pink-300 rounded-2xl"
                  type="text"
                  placeholder="Your name"
                  name="user_name"
                  id=""
                />
                <input
                  className="py-2 px-4 border-2 border-pink-300 rounded-2xl"
                  type="email"
                  placeholder="@samialam5671.com"
                  name="user_email"
                  id=""
                />
              </div>
              <textarea
                className="lg:w-[450px] mt-4 py-2 px-4 border-2 border-pink-300 rounded-2xl"
                placeholder="Write something here............."
                name="message"
                id=""
                cols="20"
                rows="10"
              ></textarea>
              <button
                className="border-2 hover:bg-gradient-to-tr from-pink-300 to-red-400 bg-pink-500 text-xl text-white font-semibold py-1"
                type="submit"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default Banner;
