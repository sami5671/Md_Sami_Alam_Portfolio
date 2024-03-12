import { FaFileDownload } from "react-icons/fa";
import Swal from "sweetalert2";
import ResumePDF from "../../assets/images/MD_SAMI_ALAM.pdf";

const ResumeButton = () => {
  // ----------------------------------------------------------------
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
  return (
    <>
      <div>
        <button
          onClick={handleDownload}
          className=" bg-pink-500 text-white px-2 py-1 rounded-md transition duration-300 ease-in-out hover:bg-pink-300 hover:text-black font-semibold"
        >
          <span className="flex gap-1 items-center text-[16px]">
            Download Resume <FaFileDownload />
          </span>
        </button>
      </div>
    </>
  );
};

export default ResumeButton;
