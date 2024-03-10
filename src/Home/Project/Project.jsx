import ProjectCard from "./ProjectCard";
import project1 from "../../assets/images/projectt1.png";
import project2 from "../../assets/images/project1.png";
import project3 from "../../assets/images/project2.png";
import { Scrollbars } from "react-custom-scrollbars-2";
import robotImg from "../../assets/images/working2.gif";

const Project = () => {
  const thumbStyle = {
    backgroundColor: "pink", // Specify your desired color here
    borderRadius: "3px",
  };

  const renderThumbVertical = ({ style, ...props }) => {
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <div>
      <section className="lg:mt-10 mb-12 lg:px-12">
        <h1 className="text-2xl px-2 lg:text-4xl mb-12 font-mono font-bold border-b-2  bg-gradient-to-tr from-pink-500 to-lime-700 text-transparent bg-clip-text ">
          Recent Projects
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div>
            <img src={robotImg} className="w-[300px] lg:w-[500px]" alt="" />
          </div>

          <div className="w-full">
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={400}
              style={{ width: "95%", height: 400 }}
              renderThumbVertical={renderThumbVertical}
              thumbMinSize={30} // Set minimum thumb size
            >
              <div className="px-6">
                <ProjectCard
                  subTitle="Gadget Harbor"
                  title="MERN Stack Website"
                  category="Online Tech gadget platform"
                  image={project1}
                  liveLink="https://gadget-harbor.web.app/"
                  clientLink="https://github.com/sami5671/Gadget-Harbor-Client"
                  serverLink="https://github.com/sami5671/Gadget-Harbor-Server"
                />
                <ProjectCard
                  title="Business Card Design"
                  category="Design"
                  image={project2}
                />
                <ProjectCard
                  title="Infinity Logo"
                  category="Logo"
                  image={project3}
                />
                <ProjectCard
                  title="Mobile Application"
                  category="Shopping"
                  image={project2}
                />
              </div>
            </Scrollbars>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
