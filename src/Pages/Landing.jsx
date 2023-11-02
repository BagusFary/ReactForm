import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import img from "../assets/image.png";
import Header from "./Header";
const Landing = () => {
  return (
    <>
    
    <Header/>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-200 lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          {" "}
          Welcome to <span className="text-blue-500"> My Frontend Portfolio</span>
        </h1>
        <p>
        Halo, saya Bagus Fary Ananta, seorang Web Developer. Saya memiliki passion dalam mengembangkan solusi teknologi yang efisien dan handal untuk mendukung aplikasi dan situs web. 
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href=""
                className="text-blue-700 hover:text-blue-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-blue-700 hover:text-blue-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-blue-700 hover:text-blue-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-blue-700 hover:text-blue-500 rounded-full glow p-2"
              >
                <FaFacebook className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={img} width={290} height={290} className="rounded-full" alt="" />
    </div>
    </>
  );
};

export default Landing;