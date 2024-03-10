import { useEffect, useState } from "react";
import Banner from "./Home/Banner/Banner";
import Navbar from "./Home/Navbar/Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import loadingImg from "./assets/images/loadingf.gif";
import Project from "./Home/Project/Project";
function App() {
  // ----------------------------------------------------------------

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const [text] = useTypewriter({
    words: ["Loading"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  // ----------------------------------------------------------------
  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-white">
          <div className="flex flex-col items-center">
            <div>
              <img src={loadingImg} alt="" className="w-[300px] h-[250px]" />
            </div>
            <div>
              <p className="text-3xl text-blue-300">
                {text}
                <Cursor cursorBlinking="false" cursorStyle=".." />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl m-auto">
          <Navbar></Navbar>
          <Banner></Banner>
          <Project></Project>
        </div>
      )}
    </>
  );
}

export default App;
