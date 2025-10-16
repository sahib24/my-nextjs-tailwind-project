import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaGithub,
  FaHackerNews,
  FaTwitch,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="border-t border-gray-200 bg-cover bg-center"
      style={{ backgroundImage: "url('/footer.jpg')" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center pt-9">
          <Image
            src="/footer.png"
            alt="logo"
            width={600}
            height={600}
            className="w-35 h-17"
          />
        </div>

        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-0 justify-center text-center">
          <div className="lg:col-span-1">
            <h3 className="text-md text-white font-[700] uppercase mb-6">
              Product
            </h3>
            <ul className="space-y-2 font-[400]">
              <li>
                <h4 className="text-xs font-medium text-white hover:text-red-500 mb-2">
                  Landing Page
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-white hover:text-red-500"
                    >
                      Popup Builder
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-white hover:text-red-500"
                    >
                      Web-design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-white hover:text-red-500"
                    >
                      Content
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-white hover:text-red-500"
                    >
                      Integrations
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-md text-white font-[700] uppercase mb-6">
              Use Cases
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Web-designers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Marketers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Small Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Website Builder
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-md font-[700] text-white tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Themes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-md font-[700] text-white tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-red-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-md font-[700] text-white uppercase mb-4">
              Contact Us
            </h3>
            <address className="not-italic text-sm text-white">
              <p>Wisconsin Ave, Suite 700</p>
              <p>Chevy Chase, Maryland 20815</p>
              <p className="mt-2">support@figma.com</p>
            </address>
          </div>
        </div>

        <div className="bg-gray-300 text-black p-4 rounded-[8px] container mx-auto flex flex-col text-center">
          <p className="text-2xl mb-6 font-[700]">Follow us</p>
          <div className="flex flex-wrap justify-center items-center gap-x-17 gap-y-6">
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaGithub />
            </Link>
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaHackerNews />
            </Link>
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaTwitch />
            </Link>
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaTelegramPlane />
            </Link>
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-black text-xl hover:text-red-500">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center mt-4">
          <div>
            <p className="text-sm text-white">© 2021 All Rights Reserved</p>
          </div>
          <div className="space-x-10">
            <Link href="#" className="text-sm text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white">
              Terms of Use
            </Link>
            <Link href="#" className="text-sm text-white">
              Sales and Refunds
            </Link>
            <Link href="#" className="text-sm text-white">
              Legal
            </Link>
            <Link href="#" className="text-sm text-white">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
