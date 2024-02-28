import { Link } from "react-router-dom";
import { Track } from "../hooks";
import UseTruncateText from "../hooks/UseTruncateText";
import UseAddItemToPlaylist from "../hooks/UseAddItemToPlaylist";
import TrackInteract from "./TrackInteract";

interface CardValue {
  data: Track[] | undefined;
  title: string;
}

function CardTrack({ data, title }: CardValue) {
  const { addTrack } = UseAddItemToPlaylist();
  const { truncateText } = UseTruncateText();
  return (
    <div className="flex flex-col z-10 mx-2">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex flex-col gap-y-3 mt-5">
        {data &&
          data.map((track, id: number) => (
            <div className="flex justify-between items-center w-full">
              <Link className="z-0" to={`/track/${track.id}`} key={id}>
                <div className="flex gap-x-3 items-center">
                  <div className="flex">
                    <div className="h-[60px] w-[60px] aspect-square">
                      <img
                        src={
                          track.album &&
                          track.album.images &&
                          track.album.images[0] &&
                          track.album.images[0].url
                        }
                        className={`w-full h-full rounded-md
                                }`}
                        alt={`Track${id}`}
                      />
                    </div>
                  </div>
                  <div className="tracking-wider overflow-hidden">
                    <div className="flex">
                      <h1 className="font-semibold text-[14px] text-black">
                        {truncateText(track && track.name, 30) || "Title"}
                      </h1>
                    </div>
                    <h2 className="font-medium text-[#838383] text-[10px]">
                      {track && track.artists && track.artists[0].name}
                    </h2>
                  </div>
                </div>
              </Link>
              <TrackInteract />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardTrack;
