import { FaFileDownload } from "react-icons/fa";

const ResumeButton = ({ handleDownload }) => {
  return (
    <>
      <div>
        <button
          onClick={handleDownload}
          className=" bg-cyan-700 text-white px-2 py-1 rounded-md transition duration-300 ease-in-out hover:bg-cyan-600 hover:text-black font-semibold"
        >
          <span className="flex gap-1 items-center text-[16px]">
            Download Resume <FaFileDownload className="animate-bounce" />
          </span>
        </button>
      </div>
    </>
  );
};

export default ResumeButton;
