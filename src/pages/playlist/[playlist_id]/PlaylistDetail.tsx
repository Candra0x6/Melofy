import PlaylistIMG from "../../../assets/MusicIcon/music1.jpeg";
import { IconButton, Image } from "@chakra-ui/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UsePlaylistDetails from "../../../hooks/UsePlaylistDetails";
import WestIcon from "@mui/icons-material/West";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function PlaylistDetail() {
  const { playlistDetail, getPlaylistDetails } = UsePlaylistDetails();
  //   truncate text more than 3 words
  const truncateText = (text: string, maxWords: number) => {
    if (text) {
      const words = text.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return text;
    }
  };
  useEffect(() => {
    getPlaylistDetails();
  }, []);

  console.log(playlistDetail);
  return (
    <div className="flex flex-col items-center overflow-hidden relative bg-[#F7FCFE]">
      <div className="container">
        <div className="img flex z-0 flex-col mb-7 justify-end w-full sticky">
          <div className="flex w-full justify-start ml-2 ">
            <IconButton
              position="absolute"
              top="2"
              onClick={() => window.history.back()}
              aria-label="Backk"
              bgColor="#F7FCFE"
              rounded="full"
              icon={<WestIcon sx={{ fontSize: 28 }} />}
            />
          </div>

          {playlistDetail &&
            playlistDetail.images &&
            playlistDetail !== undefined && (
              <Image
                src={playlistDetail.images[0].url || PlaylistIMG}
                alt="Playlist Cover"
                w="full"
              />
            )}
          <div className="flex flex-col justify-start w-full absolute -bottom-3">
            <div className=" leading-8 tracking-widest font-poppins font-bold z-10 ml-2 w-[95%]">
              <h1 className=" text-[#11282D]  text-[30px]">
                {(playlistDetail &&
                  playlistDetail !== undefined &&
                  playlistDetail.name) ||
                  "Title"}
              </h1>
              <h1 className="  text-[#838383] font-normal text-[10px] leading-4 mt-2 ">
                {(playlistDetail &&
                  playlistDetail !== undefined &&
                  playlistDetail.description) ||
                  "Description"}
              </h1>
            </div>
            <div className="bg-[#F7FCFE] w-[50rem] h-[9.5rem] -z-0 absolute -left-10 blur-[20px]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mx-2 z-10 ">
          <div className="border-[#d1d1d16b] border-[1px] z-10"></div>
          {playlistDetail &&
            playlistDetail !== undefined &&
            playlistDetail.tracks &&
            playlistDetail.tracks.items &&
            playlistDetail?.tracks?.items?.map((track, id: number) => (
              <Link className="z-10" to={`/track/${track.track.id}`} key={id}>
                <div className="flex justify-between z-10 items-center w-full">
                  <div className="flex gap-x-3 items-center">
                    <div className="h-[60px] w-[60px] aspect-square">
                      {playlistDetail && playlistDetail !== undefined && (
                        <img
                          src={
                            (track.track && track.track.album.images[0].url) ||
                            PlaylistIMG
                          }
                          className=" w-full h-full rounded-md"
                          alt={`Track${id}`}
                        />
                      )}
                    </div>
                    <div className="tracking-wider">
                      <h1 className="font-semibold text-[15px] text-black">
                        {truncateText(track.track && track.track.name, 4)}
                      </h1>
                      <h2 className="font-medium text-[#838383] text-[12px]">
                        {truncateText(
                          track.track && track.track.artists[0]?.name,
                          3
                        )}
                      </h2>
                    </div>
                  </div>
                  <IconButton
                    aria-label="more icon"
                    bg="transparent"
                    icon={<MoreVertIcon sx={{ fontSize: "24px" }} />}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistDetail;
