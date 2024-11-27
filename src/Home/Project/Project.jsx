import ProjectCard from "./ProjectCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import robotImg from "../../assets/images/working2.gif";
import Container from "../../Container";

const data = [
  {
    id: 2,
    title: "MERN Stack Website",
    subTitle: "Dream Car",
    category: "Online SaaS business Platform",
    image:
      "https://res.cloudinary.com/dgz0be5p3/image/upload/v1729436561/duww2aaorblj2y4wha5p.png",
    liveLink: "https://dream-car-68b89.web.app/",
    clientLink: "https://github.com/sami5671/Dream-Car-Client",
    serverLink: "https://github.com/sami5671/Dream-Car-Server",
  },
  {
    id: 1,

    title: "MERN Stack Website",
    category: "E-Commerce Business (Plants)",
    subTitle: "Plant World",
    image:
      "https://res.cloudinary.com/dgz0be5p3/image/upload/v1729436480/i9qenruzvey9clygxpne.png",
    liveLink: "https://planet-world-fc802.web.app/",
    clientLink: "https://github.com/sami5671/Planet-World-Client",
    serverLink: "https://github.com/sami5671/Plant-World-Server",
  },
  {
    id: 3,
    title: "MERN Stack Web Streaming",
    subTitle: "Tube Nest",
    category: "Social Media Platform",
    image:
      "https://res.cloudinary.com/dgz0be5p3/image/upload/v1729436557/nkjbkntxiiujae1hrbbz.png",
    liveLink: "https://tube-nest.web.app/",
    clientLink:
      "https://github.com/sami5671/Web-Engineering-Semester-Project-Client",
    serverLink:
      "https://github.com/sami5671/Web-Engineering-Semester-Project-Server",
  },
  {
    id: 4,
    title: "MERN Stack Website",
    subTitle: "Gadget Harbor",
    category: "E-commerce website",
    image:
      "https://res.cloudinary.com/dgz0be5p3/image/upload/v1729436560/ymtzbohivwf09wtxd98b.png",
    liveLink: "https://gadget-harbor.web.app/",
    clientLink: "https://github.com/sami5671/Gadget-Harbor-Client",
    serverLink: "https://github.com/sami5671/Gadget-Harbor-Server",
  },
];

const Project = () => {
  const thumbStyle = {
    backgroundColor: "white", // Specify your desired color here
    borderRadius: "3px",
  };

  const renderThumbVertical = ({ style, ...props }) => {
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Container>
      <div className="" id="project">
        <section className="lg:mt-24 mb-12">
          <h1 className="text-2xl px-2 lg:text-4xl mb-12 font-mono font-bold border-b-2 border-white  bg-gradient-to-tr from-cyan-300 to-lime-100 text-transparent bg-clip-text">
            Recent Projects
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div data-aos="fade-up" data-aos-duration="3000">
              <img src={robotImg} className="w-[300px] lg:w-[500px]" alt="" />
            </div>

            <div className="w-full" data-aos="fade-up" data-aos-duration="3000">
              <Scrollbars
                autoHide
                autoHideTimeout={4000}
                autoHideDuration={400}
                style={{ width: "95%", height: 900 }}
                renderThumbVertical={renderThumbVertical}
                thumbMinSize={30} // Set minimum thumb size
              >
                <div className="px-6">
                  {data?.map((item) => (
                    <ProjectCard key={item?.id} item={item} />
                  ))}
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
