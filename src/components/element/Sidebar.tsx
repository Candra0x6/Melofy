import { isSideBarActive } from "./type";
import Logo from "../../assets/Icon/Logo.svg";
import UseUserProfile from "../../hooks/UseUserProfile";
import AlbumIcon from "@mui/icons-material/Album";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";
function Sidebar({ visibleSideBar, setVisibleSideBar }: isSideBarActive) {
  const Section = [
    {
      id: 1,
      icon: <AlbumIcon sx={{ fontSize: 30 }} />,
      name: "Music",
    },
    {
      id: 2,
      path: "library",
      icon: <LibraryMusicIcon sx={{ fontSize: 30 }} />,
      name: "Library",
    },
    {
      id: 3,
      path: "follow",
      icon: <ContactsIcon sx={{ fontSize: 30 }} />,
      name: "Follow",
    },
  ];
  const { UserProfile } = UseUserProfile();
  const handleCloseNonClick = (inner: React.MouseEvent) => {
    const innerId = inner.target as HTMLElement;
    if (innerId.id === "sidebar") {
      setVisibleSideBar(false);
    }
  };
  return (
    <aside
      id="sidebar"
      className={`w-full h-full fixed inset-0 z-40 transition-all duration-500 ease-in-out lg:hidden ${
        visibleSideBar === true
          ? "flex flex-col translate-x-0"
          : "-translate-x-[100%]"
      }`}
      onClick={handleCloseNonClick}
    >
      <div
        className={`flex flex-col items-start backdrop-blur-md w-[80%] mt-1 rounded-r-3xl h-[99%] bg-gradient-to-r from-[#e9faff98] to-[#e9faff98] z-40 shadow-black shadow-2xl border-r-[1px] border-y-[1px] border-black`}
      >
        <div className="flex flex-col mt-10 ml-3 gap-y-5 w-[90%]">
          <Link to={`/`}>
            <div className="mb-2">
              <img src={Logo} />
            </div>
          </Link>
          <Link to={`/user/profile`}>
            <div className="flex items-center gap-x-4 pb-5 border-b-[1px] border-[#e4e4e4]">
              <div className="w-[80px] h-[80px] bg-white rounded-full">
                <img
                  src={
                    UserProfile &&
                    UserProfile.images &&
                    UserProfile.images[1] &&
                    UserProfile.images[1].url
                  }
                  alt=""
                  className="w-full h-full rounded-full p-1"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-[14px] text-[#838383] -mb-2">
                  Hello,
                </h1>
                <h1 className="font-semibold text-[25px] text-black">
                  {UserProfile && UserProfile.display_name}
                </h1>
              </div>
            </div>
          </Link>
          <div className="section flex flex-col gap-y-3">
            {Section.map((item) => (
              <Link
                to={`/user/${item.path}`}
                key={item.id}
                className="flex items-center gap-x-4 hover:bg-white p-2 rounded-full"
              >
                <div
                  key={item.id}
                  className="flex items-center gap-x-4 hover:bg-white p-2 rounded-full"
                >
                  {item.icon}
                  <h1 className="font-medium">{item.name}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
