import { Link } from "react-router-dom";
import UseArtistTopTracks from "../../../hooks/UseArtistTopTracks";
import UseDetailsArtist from "../../../hooks/UseDetailsArtist";
import UseTruncateText from "../../../hooks/UseTruncateText";
import { IconButton } from "@chakra-ui/react";
import { West } from "@mui/icons-material";
import UseArtistAlbums from "../../../hooks/UseArtistAlbums";
import UseReleatedArtists from "../../../hooks/UseReleatedArtists";
import CardTrack from "../../../components/CardTrack";
import CardArtist from "../../../components/CardArtist";

function ArtistDetails() {
  const { artistDetail } = UseDetailsArtist();
  const { artistTopTrack } = UseArtistTopTracks();
  const { truncateText } = UseTruncateText();
  const { artistAlbums } = UseArtistAlbums();
  const { releatedArtists } = UseReleatedArtists();
  return (
    <div className="flex flex-col items-center bg-[#F7FCFE] overflow-hidden">
      <div className="container">
        <div className="flex flex-col h-[300px] w-full relative">
          <div className="flex w-full justify-start ml-2 ">
            <IconButton
              position="absolute"
              top="2"
              onClick={() => window.history.back()}
              aria-label="Backk"
              bgColor="#F7FCFE"
              zIndex="10"
              rounded="full"
              icon={<West sx={{ fontSize: 28 }} />}
            />
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
          <CardTrack data={artistTopTrack} title={"Popular Track"} />
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">Albums</h1>
            <div className="flex gap-x-3 mt-5 overflow-x-auto">
              {artistAlbums &&
                artistAlbums.map((album, id: number) => (
                  <Link className="z-10" to={`/album/${album.id}`} key={id}>
                    <div className="flex flex-col justify-between z-10 items-center w-full">
                      <div className="flex flex-col items-center">
                        <div className="h-[100px] w-[100px] relative aspect-square flex justify-center items-center">
                          <img
                            src={
                              album &&
                              album.images &&
                              album.images[0] &&
                              album.images[0].url
                            }
                            className={`w-full h-full rounded-full
                                }`}
                            alt={`album${id}`}
                          />
                          <div className="absolute w-[20px] h-[20px] bg-[#F7FCFE] rounded-full"></div>
                        </div>
                      </div>
                      <div className="albuming-wider text-center overflow-hidden">
                        <div className="flex">
                          <h1 className="font-semibold text-[14px] text-black">
                            {truncateText(album && album.name) || "Title"}
                          </h1>
                        </div>
                        <h2 className="font-medium text-[#838383] text-[10px]">
                          {album && album.artists && album.artists[0].name}
                        </h2>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <CardArtist data={releatedArtists} title={"Releated Artists"} />
        </div>
      </div>
    </div>
  );
}

export default ArtistDetails;
