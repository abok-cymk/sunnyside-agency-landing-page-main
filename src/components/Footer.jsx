import { FaFacebookSquare, FaInstagramSquare, FaPinterest, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-16">
      <div>
          <h1 className="text-text-graphic font-barlow font-fraunces-900 tracking-tight text-3xl/7 my-2 lg:my-6">sunnyside</h1>
          <ul className="flex items-center gap-10 font-barlow font-barlow-600 text-sm/6 mt-3 lg:mt-8">
            <li><a href="#about" className="text-text-graphic hover:text-white">About</a></li>
            <li><a href="#services" className="text-text-graphic hover:text-white">Services</a></li>
            <li><a href="#projects" className="text-text-graphic hover:text-white">Projects</a></li>
          </ul>
      </div>
      <div className="flex items-center lg:gap-12 gap-6 justify-center">
        <a href="#">
            <FaFacebookSquare className="hover:text-white text-text-graphic" size={24}/>
        </a>
        <a href="#">
            <FaInstagramSquare size={24} className="hover:text-white text-text-graphic"/>
        </a>
        <a href="#">
            <FaTwitter className="hover:text-white text-text-graphic" size={24}/>
        </a>
        <a href="#">
            <FaPinterest className="hover:text-white text-text-graphic" size={24}/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
