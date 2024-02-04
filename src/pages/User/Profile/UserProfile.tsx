import ButtonBack from "../../../components/ButtonBack";
import CardArtist from "../../../components/CardArtist";
import CardTrack from "../../../components/CardTrack";
import UseUserProfile from "../../../hooks/UseUserProfile";
import {
  UseUserTopArtist,
  UseUserTopTrack,
} from "../../../hooks/UseUserTopItems";

function UserProfile() {
  const { UserProfile } = UseUserProfile();
  const { topTrackUser } = UseUserTopTrack();
  const { topArtistUser } = UseUserTopArtist();
  return (
    <div className="flex flex-col">
      <div className="container">
        <div className="flex flex-col mx-2">
          <div className="flex w-full items-center mt-4">
            <ButtonBack />
            <div className="text-center w-full font-semibold tracking-widest">
              <h1 className="text-center">Profile</h1>
            </div>
          </div>
          <div className="flex flex-col mt-6 items-center gap-y-1">
            <div className="rounded-full w-[110px] h-[110px]">
              <img
                src={
                  UserProfile &&
                  UserProfile.images &&
                  UserProfile.images[1] &&
                  UserProfile.images[1].url
                }
                alt="Profile"
                className="rounded-full w-full h-full bg-cover"
              />
            </div>
            <div className="flex flex-col items-center font-semibold  text-[#838383] ">
              <h1 className=" text-xl text-black tracking-wider">
                {UserProfile && UserProfile.display_name}
              </h1>
              <h1 className="text-[12px] tracking-wider">
                {UserProfile && UserProfile.email}
              </h1>
            </div>
            <div className="flex mt-5">
              <button type="button" className="bg-[#E9FAFF] rounded-full">
                <h1 className="py-1 px-6 text-[#346473] font-semibold text-sm ">
                  Edit
                </h1>
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-y-10">
            <CardTrack
              data={topTrackUser}
              title={`Top ${UserProfile && UserProfile.display_name}'s Tracks`}
            />
            <CardArtist
              data={topArtistUser}
              title={`Top ${UserProfile && UserProfile.display_name}'s Artists`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
