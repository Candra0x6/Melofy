import { Image } from "@chakra-ui/react";
import HamburgerMenu from "../../assets/Icon/HamburgerMenu.svg";
import UserIcon from "../../assets/Icon/UserIcon.svg";
import MusicIcon from "../../assets/Icon/MusicIcon.svg";
import scrollHandle from "./type/scrollHandle";
import { useState } from "react";
import InputModal from "./InputModal";
function Header() {
  const { visibleNav } = scrollHandle();
  const [visibleModalInput, setVisibleModalInput] = useState<boolean>(false);

  return (
    <>
      <header
        className={`flex justify-center w-full font-poppins fixed top-0 z-40 rounded-full mt-2 transition-all duration-500 ${
          visibleNav ? "-translate-y-[10vh]" : "translate-y-0"
        }`}
      >
        <div className="container mx-2 backdrop-blur-lg brightness-125 p-3 border-[1px] border-gray-600 rounded-full w-[95%]">
          <div className="flex">
            <nav className="flex justify-between items-center w-full">
              <div className="">
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

              <div className="">
                <Image src={UserIcon} />
              </div>
            </nav>
          </div>
        </div>
      </header>
      <InputModal
        visibleModalSearch={visibleModalInput}
        setVisibleModalSearch={setVisibleModalInput}
      />
    </>
  );
}

export default Header;
