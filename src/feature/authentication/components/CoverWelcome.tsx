import Logo from "../../../assets/MusicIcon/melofy.png";

function CoverWelcome() {
  return (
    <div className="flex flex-col items-center gap-y-2 font-poppins py-10">
      <div className="flex aspect-square w-1/2 h-1/2">
        <img src={Logo} alt="Melofy" className="w-full h-full" />
      </div>
      <div className="text-center">
        <h1 className="font-semibold text-[25px] mt-5">Sup, melofyibe</h1>
        <span className="font-semibold text-[20px]">Vibe to beasts</span>
      </div>
      <div className="font-normal text-[10px] text-center text-[#838383]">
        <p>
          Welcome to Melofy - Your dope music haven! Explore sick beats,{" "}
          discover fresh tunes, and ride the vibe wave. From trending hits to
          hidden gems, it's your ultimate melodic journey. 🎶✨
        </p>
      </div>
    </div>
  );
}

export default CoverWelcome;
