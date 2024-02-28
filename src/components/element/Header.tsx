import { Image } from "@chakra-ui/react";
import HamburgerMenu from "../../assets/Icon/HamburgerMenu.svg";
import UserIcon from "../../assets/Icon/UserIcon.svg";
import MusicIcon from "../../assets/Icon/MusicIcon.svg";
import scrollHandle from "./type/scrollHandle";
import { useState } from "react";
import InputModal from "./InputModal";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
function Header() {
  const { visibleNav } = scrollHandle();
  const [visibleModalInput, setVisibleModalInput] = useState<boolean>(false);
  const [visibleSideBar, setVisibleSideBar] = useState<boolean>(false);
  return (
    <>
      <header
        className={`flex justify-center w-full font-poppins fixed top-0 z-40 rounded-full bg-transparent mt-2 transition-all duration-500 ${
          visibleNav ? "-translate-y-[10vh]" : "translate-y-0"
        }`}
      >
        <div className="container ">
          <div className="flex mx-2 backdrop-blur-md mt-1 h-[99%] brightness-125 p-3 border-[1px] bg-gradient-to-r from-[#abebff98] to-[#abebff98] border-black rounded-full">
            <nav className="flex justify-between items-center w-full">
              <div
                className="cursor-pointer"
                onClick={() => setVisibleSideBar(true)}
              >
                <Image src={HamburgerMenu} />
              </div>
              <button
                className="flex sticky justify-end items-center"
                onClick={() => setVisibleModalInput(true)}
              >
                <div className="border-2 border-[#1C1818] lg:w-[50rem] w-44 text-black text-sm bg-[#E9FAFF] rounded-full px-1 pl-3 py-1 text-left  ">
                  Search Music 😎
                </div>

                <Image src={MusicIcon} className="z-10 absolute mr-5" />
              </button>
              <Link to={`/user/profile`}>
                <div className=" cursor-pointer">
                  <Image src={UserIcon} />
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <Sidebar
        visibleSideBar={visibleSideBar}
        setVisibleSideBar={setVisibleSideBar}
      />
      <InputModal
        visibleModalSearch={visibleModalInput}
        setVisibleModalSearch={setVisibleModalInput}
      />
    </>
  );
}

export default Header;
