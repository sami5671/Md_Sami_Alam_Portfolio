import { useEffect, useState } from "react";
import Banner from "./Home/Banner/Banner";
import Navbar from "./Home/Navbar/Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Project from "./Home/Project/Project";
import Blog from "./Home/Blog/Blog";
import PuffLoader from "react-spinners/PuffLoader";
function App() {
  // ----------------------------------------------------------------

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // const [text] = useTypewriter({
  //   words: ["Let's Work & Grow together"],
  //   loop: true,
  //   typeSpeed: 100,
  //   deleteSpeed: 20,
  //   delaySpeed: 3000,
  // });

  // ----------------------------------------------------------------
  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black">
          <div className="flex flex-col items-center">
            <PuffLoader color="rgba(0, 200, 0)" />
            <div>
              <p className="text-3xl text-green-400 animate-pulse">
                Let's Work & Grow together
                <Cursor cursorBlinking="false" cursorStyle="...." />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl m-auto">
          <Navbar></Navbar>
          <Banner></Banner>
          <Project></Project>
          <Blog></Blog>
        </div>
      )}
    </>
  );
}

export default App;
