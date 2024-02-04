import { IconButton } from "@chakra-ui/react";
import {
  UseCategoryByID,
  UseCategoryPlaylist,
} from "../../../hooks/UseCategory";
import { MoreVert, West } from "@mui/icons-material";
import { Link } from "react-router-dom";
import UseTruncateText from "../../../hooks/UseTruncateText";

function CategoryDetail() {
  const { categoryPlaylist } = UseCategoryPlaylist();
  const { categoryDetail } = UseCategoryByID();
  const { truncateText } = UseTruncateText();

  return (
    <div className="flex justify-center overflow-hidden relative">
      <div className="container">
        <div className="flex flex-col h-[280px] w-full relative">
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
            <h1 className="text-gray-100 font-poppins font-semibold text-2xl w-full z-20 mb-20 text-center">
              {categoryPlaylist && categoryPlaylist.message}
            </h1>
          </div>
          <div className="flex items-end w-full h-full absolute">
            <div className="bg-gradient-to-t from-[#F7FCFE] via-[#f7fcfe] to-transparent w-[60rem] -mb-10 -mr-5 -ml-4 h-[10rem] blur-md z-10"></div>
          </div>
          <div className="h-full w-full">
            <div className="bg-black bg-opacity-40 backdrop-blur-[2px] w-full h-full absolute"></div>
            <img
              src={
                categoryDetail &&
                categoryDetail.icons[0] &&
                categoryDetail?.icons[0].url
              }
              alt="Artist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 mx-2 -mt-10">
          <h1>Playlist</h1>
          {categoryPlaylist &&
            categoryPlaylist.playlists &&
            categoryPlaylist.playlists.items &&
            categoryPlaylist.playlists.items.map((track, id) => (
              <Link className="z-10" to={`/${track.type}/${track.id}`} key={id}>
                <div className="flex justify-between z-10 items-center w-full">
                  <div className="flex gap-x-3 items-center">
                    <div className="h-[60px] w-[60px] aspect-square">
                      <img
                        src={track.images[0].url}
                        className=" w-full h-full rounded-md"
                        alt={`Track${id}`}
                      />
                    </div>
                    <div className="tracking-wider">
                      <h1 className="font-semibold text-[15px] text-black">
                        {truncateText(track.name)}
                      </h1>
                      <h2 className="font-medium text-[#838383] text-[12px]">
                        {truncateText(track.description || "Description")}
                      </h2>
                    </div>
                  </div>
                  <IconButton
                    aria-label="more icon"
                    bg="transparent"
                    icon={<MoreVert sx={{ fontSize: "24px" }} />}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
