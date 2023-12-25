import { Image } from "@chakra-ui/react";
import HamburgerMenu from "../../assets/HamburgerMenu.svg";
import UserIcon from "../../assets/UserIcon.svg";
import MusicIcon from "../../assets/MusicIcon.svg";
function Header() {
  return (
    <header className="flex justify-center p-4 font-poppins">
      <div className="container mx-2">
        <div className="flex">
          <nav className="flex justify-between items-center w-full">
            <div className="">
              <Image src={HamburgerMenu} />
            </div>
            <div className="flex sticky justify-end items-center">
              <input
                type="text"
                className="border-2 border-[#1C1818] lg:w-[50rem] bg-[#E9FAFF] rounded-full"
              />
              <Image src={MusicIcon} className="z-10 absolute mr-5" />
            </div>
            <div className="">
              <Image src={UserIcon} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
