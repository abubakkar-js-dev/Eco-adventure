import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
<div className="bg-base-200">
  <footer className="container footer text-base-content p-10">
    <nav>
      <h6 className="text-gray-600 text-base font-semibold mb-2">Explore</h6>
      <a className="link link-hover">Destinations</a>
      <a className="link link-hover">Travel Tips</a>
      <a className="link link-hover">Adventure Guides</a>
      <a className="link link-hover">Sustainability</a>
    </nav>
    <nav>
      <h6 className="text-gray-600 text-base font-semibold mb-2">About</h6>
      <a className="link link-hover">Our Story</a>
      <a className="link link-hover">Team</a>
      <a className="link link-hover">Contact Us</a>
      <a className="link link-hover">Privacy Policy</a>
    </nav>
    <nav>
      <h6 className="text-gray-600 text-base font-semibold mb-2">Stay Connected</h6>
      <div className="grid grid-flow-col gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
          <FaTwitter className="w-6 h-6 text-cyan-400"/>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
          <FaInstagram className="w-6 h-6 text-red-500"/>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
          <FaFacebook className="w-6 h-6 text-blue-500"/>
        </a>
      </div>
    </nav>

  </footer>
</div>

  );
};

export default Footer;
