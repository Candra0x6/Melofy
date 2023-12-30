import { useState } from "react";
import { Link } from "react-router-dom";

function CoverButton() {
  const [changeButton, setChangeButton] = useState<number>(0);

  return (
    <div className="flex justify-center w-full font-poppins h-full">
      <div className="flex bg-[#ADCED9] w-full rounded-full items-center font-medium h-[45px] text-[15px] ">
        <Link to={`/login`} className="w-full h-full">
          <div className="w-full h-full">
            <button
              onClick={() => setChangeButton(0)}
              type="button"
              aria-label="Login"
              className={`text-center z-10 relative w-full h-full flex items-center justify-center rounded-full transition-all duration-500 ${
                changeButton === 0 ? " text-white" : " text-black "
              }`}
            >
              Login
              <div
                className={`text-center z-0 w-full h-full absolute  flex items-center justify-center rounded-full transition-all duration-500 ${
                  changeButton === 0
                    ? "bg-[#373739] -z-20 translate-x-0"
                    : "bg-transparent translate-x-36"
                }`}
              ></div>
            </button>
          </div>
        </Link>
        <Link to={`/signup`} className="w-full h-full">
          <div className="w-full h-full">
            <button
              onClick={() => setChangeButton(1)}
              type="button"
              className={`text-center overflow-y-hidden relative z-10 w-full h-full flex items-center justify-center rounded-full transition-all duration-500 ${
                changeButton === 1 ? " text-white" : " text-black "
              }`}
              aria-label="signup"
            >
              Sign Up
              <div
                className={`text-center z-0 w-full h-full absolute  flex items-center justify-center rounded-full transition-all duration-500 ${
                  changeButton === 1
                    ? "bg-[#373739] -z-20 translate-x-0"
                    : "bg-transparent -translate-x-36"
                }`}
              ></div>
            </button>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CoverButton;
