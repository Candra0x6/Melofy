import { Link } from "react-router-dom";
import { Artis } from "../hooks";
import UseTruncateText from "../hooks/UseTruncateText";

interface CardArtistComponent {
  data: Artis[];
  title: string;
}
function CardArtist({ data, title }: CardArtistComponent) {
  const { truncateText } = UseTruncateText();
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex gap-x-3 mt-5 overflow-x-auto">
        {data &&
          data.map((artist, id: number) => (
            <Link
              onClick={window.location.reload}
              className="z-10"
              to={`/artist/${artist.id}`}
              key={id}
            >
              <div className="flex flex-col justify-between z-10 items-center w-full">
                <div className="flex flex-col items-center">
                  <div className="h-[90px] w-[90px] relative aspect-square flex justify-center items-center">
                    <img
                      src={
                        artist &&
                        artist.images &&
                        artist.images[0] &&
                        artist.images[0].url
                      }
                      className={`w-full h-full rounded-full
                                }`}
                      alt={`artist${id}`}
                    />
                  </div>
                </div>
                <div className="artisting-wider text-center overflow-hidden">
                  <div className="flex">
                    <h1 className="font-semibold text-[14px] text-black">
                      {truncateText(artist && artist.name) || "Title"}
                    </h1>
                  </div>
                  <h2 className="font-medium text-[#838383] text-[10px] first-letter:uppercase">
                    {artist && artist.type}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CardArtist;
