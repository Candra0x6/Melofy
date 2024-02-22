import UseAlbumDetail from "../../../hooks/UseAlbumDetail";
import UseAlbumTracks from "../../../hooks/UseAlbumTracks";
import { Link } from "react-router-dom";
import ConvertMiliSecond from "../../../hooks/ConvertMiliSecond";
import ButtonBack from "../../../components/ButtonBack";
import { ButtonInteract } from "../../../components/ButtonInteract";
import UseUserFollowAlbum from "../../../hooks/UseUserFollowAlbum";

function AlbumDetail() {
  const { albumDetail } = UseAlbumDetail();
  const { albumTracks } = UseAlbumTracks();
  const { checkSavedAlbum, isSaveAlbum, removeAlbum, saveAlbum } =
    UseUserFollowAlbum();
  const { convertMiliseconds } = ConvertMiliSecond();
  return (
    <div className="flex justify-center overflow-hidden relative">
      <div className="container">
        <div className="flex flex-col mx-2">
          <div className="flex w-full">
            <ButtonBack />
            <ButtonInteract
              addItems={saveAlbum}
              getIsFollow={checkSavedAlbum}
              isFollow={isSaveAlbum}
              removeItems={removeAlbum}
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
              <div className="w-[20px] h-[20px] rounded-full bg-white absolute"></div>
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
