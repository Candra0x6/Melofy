import { Link } from "react-router-dom";
import { Albums } from "../hooks";
import UseTruncateText from "../hooks/UseTruncateText";

interface CardAlbumProps {
  data: Albums[];
  title: string;
}
function CardAlbums({ data, title }: CardAlbumProps) {
  const { truncateText } = UseTruncateText();
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex gap-x-3 mt-5 overflow-x-auto">
        {data &&
          data.map((album, id: number) => (
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
                      {truncateText(album && album.name, 20) || "Title"}
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
  );
}

export default CardAlbums;
