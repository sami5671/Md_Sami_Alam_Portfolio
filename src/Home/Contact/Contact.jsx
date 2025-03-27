import { useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const [loading, setLoading] = useState(false);
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
      <section
        className="min-h-screen flex items-center justify-center text-white px-4"
        id="contact"
      >
        <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
            Contact With Me
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-6 flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="user_name"
                id=""
                required
                className="py-2 px-4 rounded-lg bg-gray-700 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@gmail.com"
                name="user_email"
                id=""
                required
                className="py-2 px-4 rounded-lg bg-gray-700 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id=""
                cols="20"
                rows="10"
                required
                placeholder="Write something here............."
                className="py-2 px-4 rounded-lg bg-gray-700 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
              ></textarea>
            </div>
            <button
              className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-600 text-lg font-semibold text-white hover:scale-105 transform transition-all duration-200 shadow-md"
              type="submit"
            >
              {loading ? (
                <span className="flex items-center justify-center ">
                  <ImSpinner9 className="animate-spin" />
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Send
                  <IoIosSend />
                </span>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
