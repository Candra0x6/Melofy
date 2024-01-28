import { IconButton } from "@chakra-ui/react";
import UseAlbumDetail from "../../../hooks/UseAlbumDetail";
import UseAlbumTracks from "../../../hooks/UseAlbumTracks";
import { West } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ConvertMiliSecond from "../../../hooks/ConvertMiliSecond";

function AlbumDetail() {
  const { albumDetail } = UseAlbumDetail();
  const { albumTracks } = UseAlbumTracks();
  const { convertMiliseconds } = ConvertMiliSecond();
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex flex-col mx-2">
          <div className="flex w-full justify-start ml-2 ">
            <IconButton
              position="absolute"
              top="2"
              onClick={() => window.history.back()}
              aria-label="Backk"
              bgColor="#F7FCFE"
              rounded="full"
              icon={<West sx={{ fontSize: 28 }} />}
            />
          </div>
          <div className="flex items-center mt-20">
            <div className="aspect-square w-[110px] h-[110px] rounded-full flex justify-center items-center">
              <img
                src={
                  (albumDetail &&
                    albumDetail.images[0] &&
                    albumDetail?.images[0].url) ||
                  (albumDetail &&
                    albumDetail.images[1] &&
                    albumDetail?.images[1].url) ||
                  (albumDetail &&
                    albumDetail.images[2] &&
                    albumDetail?.images[2].url)
                }
                alt="album"
                className="w-full h-full rounded-full"
              />
              <div className="w-[15px] h-[15px] rounded-full bg-white absolute"></div>
            </div>
            <div className="flex flex-col ml-2 w-full justify-between h-full">
              <div className="judul flex flex-col">
                <h1 className="text-[20px] font-semibold tracking-tight leading-tight">
                  {albumDetail && albumDetail?.name}
                </h1>
                <h1 className="text-[12px] font-normal text-[#838383] first-letter:uppercase">
                  {albumDetail && albumDetail.type} /{" "}
                  {albumDetail && albumDetail.release_date}
                </h1>
              </div>
              <div className="flex justify-between text-[12px] mt-5 font-normal text-[#838383] first-letter:uppercase">
                <h1>{albumDetail && albumDetail.total_tracks} Tracks</h1>
                <div className="flex">
                  {albumDetail &&
                    albumDetail?.artists[0] &&
                    albumDetail.artists.map((artist, index) => (
                      <h1 key={index} className="mr-1">
                        {artist.name}{" "}
                        {index < albumDetail.artists.length - 1 && ","}{" "}
                      </h1>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col flex mt-10 gap-y-3">
            <h1 className="font-bold text-[18px]">Track List</h1>
            {albumTracks &&
              albumTracks.map((track, index) => (
                <Link
                  to={`/track/${track.id}`}
                  key={index}
                  className="flex flex-col"
                >
                  <div className="flex flex-col">
                    <div
                      className={` flex justify-between items-center pt-2 ${
                        index !== 0 && " border-t-[1px] border-[#e4e4e4]"
                      }`}
                    >
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-[14px]">
                          {track.name}
                        </h1>
                        <div className="flex">
                          {track.artists.map((artist, index) => (
                            <h1
                              key={index}
                              className="text-[12px] mr-1 text-[#838383]"
                            >
                              {artist.name}
                              {index < track.artists.length - 1 && ", "}
                            </h1>
                          ))}
                        </div>
                      </div>
                      <div className="text-[12px] text-[#838383]">
                        <h1>{convertMiliseconds(track.duration_ms)}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetail;
