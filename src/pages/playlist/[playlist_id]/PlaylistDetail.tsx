import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Playlist } from "../../../components/home";
import PlaylistIMG from "../../../assets/music1.jpeg";
import { IconButton, Image } from "@chakra-ui/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UsePlaylistDetails from "../../../components/playlists/hooks/UsePlaylistDetails";
function PlaylistDetail() {
  const { playlistDetail } = UsePlaylistDetails();

  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");

    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="flex flex-col items-center overflow-hidden relative bg-[#F7FCFE]">
      <div className="container">
        <div className="img flex flex-col justify-end w-full sticky mb-20">
          {playlistDetail &&
            playlistDetail.images &&
            playlistDetail !== undefined && (
              <Image
                src={playlistDetail.images[0].url || PlaylistIMG}
                alt="Playlist Cover"
                w="full"
              />
            )}
          <div className=" absolute  leading-8 tracking-widest font-poppins font-bold -bottom-10 z-20 ml-2 pb-10 border-b-[1px] border-[#D1D1D1] w-[95%]">
            <h1 className=" text-[#11282D]  text-[30px] w-1/2">
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

          <div className="bg-[#F7FCFE] w-[50rem] z-10 h-32 absolute -bottom-10 -left-10 blur-[20px]"></div>
        </div>
        <div className="flex flex-col gap-y-5 mx-2">
          {playlistDetail &&
            playlistDetail !== undefined &&
            playlistDetail?.tracks.items.map((track, id: number) => (
              <div
                key={id}
                className="flex justify-between items-center w-full"
              >
                <div className="flex gap-x-3 items-center">
                  <div className="h-[60px] w-[60px] aspect-square">
                    {playlistDetail && playlistDetail !== undefined && (
                      <img
                        src={track.track.album.images[0].url}
                        className=" w-full h-full rounded-md"
                        alt={`Track${id}`}
                      />
                    )}
                  </div>
                  <div className="tracking-wider">
                    <h1 className="font-semibold text-[15px] text-black">
                      {truncateText(track.track.name, 4)}
                    </h1>
                    <h2 className="font-medium text-[#838383] text-[12px]">
                      {truncateText(track.track.artists[0]?.name, 3)}
                    </h2>
                  </div>
                </div>
                <IconButton
                  aria-label="more icon"
                  bg="transparent"
                  icon={<MoreVertIcon sx={{ fontSize: "24px" }} />}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistDetail;
