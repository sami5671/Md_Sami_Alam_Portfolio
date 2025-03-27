import { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar font-semibold shadow-xl">
        <div className="logo">
          {/* <img src={logo} className="w-[40px] h-[40px]" alt="" /> */}
        </div>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <Link spy={true} smooth={true} to="project">
            <li>
              <a href="#">Projects</a>
            </li>
          </Link>
          <li>
            <a href="#">Services</a>
          </li>
          <Link spy={true} smooth={true} to="blog">
            <li>
              <a href="#">Blog</a>
            </li>
          </Link>

          <Link spy={true} smooth={true} to="contact">
            <li>
              <a href="#">Contact</a>
            </li>
          </Link>
        </ul>
        <div className="toggle_btn" onClick={toggleMenu}>
          <span>{isOpen ? <IoMdCloseCircle /> : <AiOutlineMenu />}</span>
        </div>
      </div>

      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <Link spy={true} smooth={true} to="project">
            <li>
              <a href="#">Projects</a>
            </li>
          </Link>
          <li>
            <a href="#">Services</a>
          </li>
          <Link spy={true} smooth={true} to="blog">
            <li>
              <a href="#">Blog</a>
            </li>
          </Link>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
