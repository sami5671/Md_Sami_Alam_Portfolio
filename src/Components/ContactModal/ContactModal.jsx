import { ImSpinner9 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

const ContactModal = ({ sendEmail, form, loading }) => {
  return (
    <>
      <dialog id="my_modal_3" className="modal p-4">
        <div className="modal-box bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-lg">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm  bg-red-600 btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section className="py-2">
            <div className="flex lg:justify-center mb-6">
              <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
                Contact With Me
              </h1>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-2 lg:w-1/2"
            >
              <div className="lg:flex gap-6 text-black">
                <input
                  className="py-2 px-4 mb-3 lg:mb-0 rounded-lg bg-gray-700 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
                  type="text"
                  placeholder="Your name"
                  name="user_name"
                  id=""
                  required
                />
                <input
                  className="py-2 px-4 rounded-lg bg-gray-700 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
                  type="email"
                  placeholder="your@gmail.com"
                  name="user_email"
                  id=""
                  required
                />
              </div>
              <textarea
                className="lg:w-[450px] mt-4 py-2 px-4 rounded-lg bg-gray-700 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
                placeholder="Write something here............."
                name="message"
                id=""
                cols="20"
                rows="5"
                required
              ></textarea>
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
          </section>
        </div>
      </dialog>
    </>
  );
};

export default ContactModal;
