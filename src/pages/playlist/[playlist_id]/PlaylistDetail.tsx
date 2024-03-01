import UsePlaylistDetails from "../../../hooks/UsePlaylistDetails";
import CardTrack from "../../../components/CardTrack";
import ButtonBack from "../../../components/ButtonBack";
import UseTruncateText from "../../../hooks/UseTruncateText";
import { Image } from "@chakra-ui/react";
import { ButtonInteract } from "../../../components/ButtonInteract";
import { UseUserFollowPlaylistItem } from "../../../hooks/UseUserFollowPlaylist";
import NonImage from "../../../assets/MusicIcon/NonImage.png";

function PlaylistDetail() {
  const { truncateText } = UseTruncateText();
  const {
    addItemsPlaylist,
    removeItemsPlaylist,
    isFollowPlaylist,
    getIsFollowPlaylist,
  } = UseUserFollowPlaylistItem();

  const { playlistDetail } = UsePlaylistDetails();

  return (
    <div className="flex flex-col items-center overflow-hidden relative bg-[#F7FCFE]">
      <div className="container">
        <div className="img flex flex-col mb-7 justify-end w-full sticky">
          <div className="flex w-full ">
            <ButtonBack />
            <ButtonInteract
              addItems={addItemsPlaylist}
              removeItems={removeItemsPlaylist}
              isFollow={isFollowPlaylist}
              getIsFollow={getIsFollowPlaylist}
            />
          </div>

          {playlistDetail &&
            playlistDetail.images &&
            playlistDetail !== undefined && (
              <Image
                maxH="400px"
                src={
                  playlistDetail.images !== null
                    ? playlistDetail.images[0].url
                    : NonImage
                }
                alt="Playlist Cover"
                w="full"
              />
            )}
          <div className="flex flex-col justify-start w-full absolute -bottom-3 ">
            <div className=" leading-8 tracking-widest font-poppins font-bold z-10 ml-2 w-[95%]">
              <h1 className=" text-[#11282D]  text-[30px]">
                {(playlistDetail &&
                  playlistDetail !== undefined &&
                  playlistDetail.name) ||
                  "Title"}
              </h1>
              <div className="flex w-full justify-between items-center border-b-[1px] border-[#83838383] pb-5">
                <h1 className="  text-[#838383] font-normal text-[10px] leading-4 mt-2  flex w-full justify-between items-center">
                  {(playlistDetail &&
                    playlistDetail !== undefined &&
                    truncateText(playlistDetail.description, 70)) ||
                    "Description"}
                </h1>
              </div>
            </div>
            <div className="bg-[#F7FCFE] w-[50rem] h-[20rem] z-0 absolute -left-10 blur-[20px] "></div>
          </div>
        </div>
        <CardTrack
          data={playlistDetail?.tracks.items?.map((item) => item.track)}
          title=""
        />
      </div>
    </div>
  );
}

export default PlaylistDetail;
