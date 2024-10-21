import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-24 lg:mt-72">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-cyan-500">
            Md Sami Alam
          </h2>
          <p className="text-gray-400">
            We bridges the gap between client and buyer, empowering personal and
            professional growth.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-3">
            <li>
              <a href="#" className="hover:text-cyan-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500">
                Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
          <ul className="text-gray-400 space-y-3">
            <li>Email: samialam5671@gmail.com</li>
            <li>Phone: +88 01648925559</li>
            <li>Location: A-54/4, Vatpara, Savar, Dhaka-1343</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Follow Me</h3>
          <div className="flex space-x-6">
            <div className="flex mt-2 lg:mt-8 gap-2">
              <a
                href="https://github.com/sami5671"
                className="text-white rounded-full glow p-2"
              >
                <FaGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/sami5671/"
                className="text-white  rounded-full glow p-2"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/samialam5671/"
                className="text-white  rounded-full glow p-2"
              >
                <FaInstagramSquare className="text-[28px]" />
              </a>
              <a
                href="https://www.facebook.com/samialam5559"
                className="text-white  rounded-full glow p-2"
              >
                <FaFacebook className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; 2024 MentiGO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
