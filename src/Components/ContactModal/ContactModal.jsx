import { ImSpinner9 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

const ContactModal = ({ sendEmail, form, loading }) => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm  bg-red-600 btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section className="py-2">
            <div className="flex lg:justify-center mb-6">
              <h1 className="text-2xl animate-pulse lg:text-3xl font-semibold bg-gradient-to-tr from-cyan-900 to-blue-300 text-transparent bg-clip-text">
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
                  className="py-2 px-4 border-2 border-cyan-600  rounded-md"
                  type="text"
                  placeholder="Your name"
                  name="user_name"
                  id=""
                  required
                />
                <input
                  className="py-2 px-4 border-2 border-cyan-600  rounded-md"
                  type="email"
                  placeholder="your@gmail.com"
                  name="user_email"
                  id=""
                  required
                />
              </div>
              <textarea
                className="lg:w-[450px] mt-4 py-2 px-4 border-2 border-cyan-600 rounded-md text-black"
                placeholder="Write something here............."
                name="message"
                id=""
                cols="20"
                rows="10"
                required
              ></textarea>
              <button
                className="rounded-md hover:bg-gradient-to-tr from-green-300 to-blue-900 bg-cyan-700 text-xl text-white font-semibold py-1"
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
