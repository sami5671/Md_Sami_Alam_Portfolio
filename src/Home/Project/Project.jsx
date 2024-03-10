import ProjectCard from "./ProjectCard";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
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
      <section className="mt-10 mb-12 lg:px-12">
        <h1 className="text-2xl lg:text-4xl mb-12 font-mono font-bold border-b-2 border-pink-300">
          Recent Projects
        </h1>
        <div className="flex flex-col lg:flex-row gap-12">
          <div>
            <img src={robotImg} className="w-[300px] lg:w-[600px]" alt="" />
          </div>

          <div className="w-full ">
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={400}
              style={{ width: "95%", height: 300 }}
              renderThumbVertical={renderThumbVertical}
              thumbMinSize={30} // Set minimum thumb size
            >
              <div className="px-6">
                <ProjectCard
                  title="Blog Website"
                  category="Website"
                  image={project1}
                />
                <ProjectCard
                  title="Business Card Design"
                  category="Design"
                  image={project2}
                />
                <ProjectCard
                  title="Infinity Logo"
                  category="Logo"
                  image={project1}
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
