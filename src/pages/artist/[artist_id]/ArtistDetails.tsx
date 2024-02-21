import UseArtistTopTracks from "../../../hooks/UseArtistTopTracks";
import UseDetailsArtist from "../../../hooks/UseDetailsArtist";
import UseArtistAlbums from "../../../hooks/UseArtistAlbums";
import UseReleatedArtists from "../../../hooks/UseReleatedArtists";
import CardTrack from "../../../components/CardTrack";
import CardArtist from "../../../components/CardArtist";
import { UseFollowArtist } from "../../../hooks/UseUserFollowArtist";
import CardAlbums from "../../../components/CardAlbums";
import ButtonBack from "../../../components/ButtonBack";

function ArtistDetails() {
  const { artistDetail } = UseDetailsArtist();
  const { artistTopTrack } = UseArtistTopTracks();
  const { artistAlbums } = UseArtistAlbums();
  const { releatedArtists } = UseReleatedArtists();
  const { putFollowArtist, isFollow, getIsFollowArtist, unfollowArtist } =
    UseFollowArtist();
  console.log(isFollow);
  return (
    <div className="flex flex-col items-center bg-[#F7FCFE] overflow-hidden">
      <div className="container">
        <div className="flex flex-col h-[300px] w-full relative">
          <div className="flex w-full ">
            <ButtonBack />
          </div>
          <div className="flex flex-col absolute h-full w-full justify-center items-center">
            <h1 className="text-gray-100 font-poppins font-semibold text-2xl w-full z-20 text-center">
              {artistDetail && artistDetail?.name}
            </h1>
            <h1 className="text-gray-100 font-poppins font-semibold text-sm w-full  z-20 text-center">
              {artistDetail && artistDetail?.type}
            </h1>
          </div>
          <div className="flex items-end w-full h-full absolute">
            <div className="bg-gradient-to-t from-[#F7FCFE] via-[#F7FCFE] to-transparent w-[50rem] -mb-8 -mr-5 -ml-4 h-[8rem] blur-md"></div>
          </div>
          <img
            src={
              artistDetail &&
              artistDetail.images[0] &&
              artistDetail?.images[0].url
            }
            alt="Artist"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col mx-2 gap-y-5">
          <div className=" z-10 flex justify-center -mt-20">
            <img
              src={
                artistDetail &&
                artistDetail.images[0] &&
                artistDetail?.images[0].url
              }
              alt="Profiile"
              className="w-[120px] h-[120px] rounded-full z-10"
            />
          </div>
          <div className="flex justify-center gap-x-12">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-black font-semibold text-[20px]">
                {artistDetail && artistDetail.popularity}
              </h1>
              <h1 className="font-medium text-[#838383] text-[12px]">
                Popularity
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-black font-semibold text-[20px]">
                {artistDetail &&
                  artistDetail.followers &&
                  artistDetail.followers.total}
              </h1>
              <h1 className="font-medium text-[#838383] text-[12px]">
                Followers
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-black font-semibold text-[20px] first-letter:uppercase">
                {artistDetail && artistDetail.type}
              </h1>

              <h1 className="font-medium text-[#838383] text-[12px]">
                Profession
              </h1>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              type="button"
              className="bg-[#B1DEEC] rounded-lg px-5 py-1 font-semibold"
              onClick={async () => {
                isFollow === false && (await putFollowArtist());
                isFollow === true && (await unfollowArtist());
                getIsFollowArtist();
              }}
            >
              <span className="">
                {isFollow === true ? "Following" : "Follow"}
              </span>
            </button>
          </div>
          <CardTrack data={artistTopTrack} title={"Popular Track"} />
          <CardAlbums data={artistAlbums} title="Albums" />
          <CardArtist data={releatedArtists} title={"Releated Artists"} />
        </div>
      </div>
    </div>
  );
}

export default ArtistDetails;
