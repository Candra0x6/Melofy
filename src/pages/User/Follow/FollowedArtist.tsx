import { Groups2 } from "@mui/icons-material";
import UserPageTitle from "../../../components/UserPageTitle";
import { Link } from "react-router-dom";
import { UseUserFollowArtist } from "../../../hooks/UseUserFollowArtist";

function FollowedArtist() {
  const { followArtist } = UseUserFollowArtist();
  return (
    <div className="flex flex-col relative overflow-hidden">
      <div className="container mx-2">
        <div className="flex flex-col">
          <UserPageTitle title="Follow" />
          <div className="flex flex-col mt-20 gap-y-5">
            <h1 className="font-bold text-xl">
              Followed Artist{followArtist.length > 1 && "s"}
            </h1>
            {followArtist &&
              followArtist.length > 0 &&
              followArtist.map((artist, id) => (
                <Link
                  to={`/artist/${artist.id}`}
                  className="flex gap-x-5"
                  key={id}
                >
                  <div className="img h-[95px] w-[95px] aspect-square rounded-full">
                    <img
                      src={artist.images[0].url}
                      alt="Artist"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col w-full justify-center">
                    <div className="name font-semibold text-[15px]">
                      <h1>{artist.name}</h1>
                    </div>
                    <div className="genre font-medium text-[#838383] w-[90%] text-[12px]  first-letter:uppercase">
                      {artist.genres.map((genre, id) => (
                        <span key={id} className="">
                          {genre}
                          {id < artist.genres.length - 1 && ", "}
                        </span>
                      ))}
                    </div>
                    <div className="follower flex font-semibold text-[13px] items-center gap-x-2">
                      <Groups2 />
                      <h1>{artist.followers.total}</h1>
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

export default FollowedArtist;
