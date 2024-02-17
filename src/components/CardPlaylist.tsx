import { IconButton } from "@chakra-ui/react";
import { Category, Playlists } from "../hooks";
import UseTruncateText from "../hooks/UseTruncateText";
import { MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface PlaylistComponent {
  title: string | undefined;
  data: Playlists[] | undefined;
}
function CardPlaylist({ title, data }: PlaylistComponent) {
  const { truncateText } = UseTruncateText();
  return (
    <div className="flex flex-col gap-y-5 mx-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {data &&
        data.map((track, id) => (
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
                    {truncateText(track.name, 20)}
                  </h1>
                  <h2 className="font-medium text-[#838383] text-[12px]">
                    {truncateText(track.description, 40 || "Description")}
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
  );
}

export default CardPlaylist;
