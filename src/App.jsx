import { useEffect, useState } from "react";
import Banner from "./Home/Banner/Banner";
import Navbar from "./Home/Navbar/Navbar";
import { Cursor } from "react-simple-typewriter";
import Project from "./Home/Project/Project";
import Blog from "./Home/Blog/Blog";
import PuffLoader from "react-spinners/PuffLoader";
import { Helmet } from "react-helmet-async";
import Footer from "./Home/Footer/Footer";

function App() {
  // ----------------------------------------------------------------
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      <Helmet>
        <title>Md Sami Alam</title>
      </Helmet>
      {loading ? (
        <div className="fixed bg-slate-950 top-0 left-0 h-screen w-screen flex justify-center items-center">
          <div className="flex flex-col items-center">
            <PuffLoader color="rgba(0, 200, 0)" />
            <div>
              <p className="text-3xl text-green-800 animate-pulse">
                Let's Work & Grow together
                <Cursor cursorBlinking="false" cursorStyle="...." />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="max-w-screen-2xl m-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Project></Project>
            {/* <Blog></Blog> */}
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
