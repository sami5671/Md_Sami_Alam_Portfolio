import ProjectCard from "./ProjectCard";
import project1 from "../../assets/images/projectt1.png";
import project2 from "../../assets/images/project1.png";
import { Scrollbars } from "react-custom-scrollbars-2";
import robotImg from "../../assets/images/working2.gif";
import Container from "../../Container";

const Project = () => {
  const thumbStyle = {
    backgroundColor: "rgb(46, 125, 50)", // Specify your desired color here
    borderRadius: "3px",
  };

  const renderThumbVertical = ({ style, ...props }) => {
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Container>
      <div className="" id="project">
        <section className="lg:mt-10 mb-12">
          <h1 className="text-2xl px-2 lg:text-4xl mb-12 font-mono font-bold border-b-2 border-green-900  bg-gradient-to-tr from-green-500 to-lime-200 text-transparent bg-clip-text">
            Recent Projects
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div data-aos="fade-up" data-aos-duration="3000">
              <img src={robotImg} className="w-[300px] lg:w-[500px]" alt="" />
            </div>

            <div className="w-full" data-aos="fade-up" data-aos-duration="3000">
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
                    title="MERN Stack Website"
                    category="E-Commerce Business (Plants)"
                    subTitle="Plant World"
                    image={project2}
                    liveLink="https://planet-world-fc802.web.app/"
                    clientLink="https://github.com/sami5671/Planet-World-Client"
                    serverLink="https://github.com/sami5671/Plant-World-Server"
                  />
                  <ProjectCard
                    title="MERN Stack Website"
                    subTitle="Gadget Harbor"
                    category="Online Tech gadget platform"
                    image={project1}
                    liveLink="https://gadget-harbor.web.app/"
                    clientLink="https://github.com/sami5671/Gadget-Harbor-Client"
                    serverLink="https://github.com/sami5671/Gadget-Harbor-Server"
                  />
                </div>
              </Scrollbars>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Project;
