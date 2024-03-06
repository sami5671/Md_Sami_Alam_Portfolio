import "./Banner.css";
import js from "";

const Banner = () => {
  return (
    <div>
      <div className="lol">
        <div className="js">
          <img src={js} width="50px" height="50px" alt="" />
        </div>
        <div className="mongodb">
          <img src="images/mongodb.png" width="50px" height="50px" alt="" />
        </div>
        <div className="express">
          <img src="images/express.png" width="50px" height="50px" alt="" />
        </div>
        <div className="react">
          <img src="images/react.png" width="50px" height="50px" alt="" />
        </div>
        <div className="nodejs">
          <img src="images/node.jpg" width="50px" height="50px" alt="" />
        </div>
        <div className="profile">
          <img src="images/profile2.png" width="250px" height="250px" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
