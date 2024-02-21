import axios from "axios";
import { useEffect, useState } from "react";
import UseTruncateText from "../../hooks/UseTruncateText";
import { Link } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@chakra-ui/react";
import { SearchResult } from "../../hooks";
import ManGuitar from "../../assets/MusicIcon/manguitar.svg";
import West from "@mui/icons-material/West";
import VerifiedIcon from "@mui/icons-material/Verified";
function SearchPage() {
  const { truncateText } = UseTruncateText();
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const [activeTab, setActiveTab] = useState<
    "track" | "album" | "artist" | "playlist"
  >("track");
  const queryParams = new URLSearchParams(window.location.search);
  const querySearch = queryParams.get("query");
  const getSearchResult = async (q: string, type: string) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/search?q=${q}&type=${type}&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const result = response.data;

      setSearchResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    querySearch && getSearchResult(querySearch, activeTab);
  }, [activeTab, querySearch]);

  return (
    <div className="flex flex-col mx-2 bg-[#F7FCFE]">
      <div className="container">
        <div className="flex flex-col mt-2 overflow-hidden">
          <div className="flex justify-start">
            <IconButton
              aria-label="back"
              icon={<West sx={{ fontSize: 28 }} />}
              onClick={() => window.history.back()}
              bgColor="#F7FCFE"
              rounded="full"
            />
          </div>
          <div className="flex justify-center items-center">
            <img src={ManGuitar} alt="man with guitar" className="w-[180px]" />
            <div className="flex flex-col text-2xl text-[#346473]">
              <h1>Search of</h1>
              <h1 className="font-semibold">{querySearch}</h1>
            </div>
          </div>
          <div className="flex gap-x-3 overflow-x-auto mt-5">
            <button
              type="button"
              className={`flex py-1 px-4 bg-[#E9FAFF] border-2 border-[#1C1818] font-semibold rounded-full ${
                activeTab === "track" ? "bg-red" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("track")}
            >
              Tracks
            </button>
            <button
              type="button"
              className={`flex py-1 px-4 bg-[#E9FAFF] border-2 border-[#1C1818] font-semibold rounded-full ${
                activeTab === "album" ? "" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("album")}
            >
              Albums{" "}
            </button>
            <button
              type="button"
              className={`flex py-1 px-4 bg-[#E9FAFF] border-2 border-[#1C1818] font-semibold rounded-full ${
                activeTab === "artist" ? "" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("artist")}
            >
              Artists{" "}
            </button>
            <button
              type="button"
              className={`flex py-1 px-4 bg-[#E9FAFF] border-2 border-[#1C1818] font-semibold rounded-full ${
                activeTab === "playlist" ? "" : "bg-transparent"
              }`}
              onClick={() => setActiveTab("playlist")}
            >
              Playlists{" "}
            </button>
          </div>
          <div className="flex flex-col gap-y-3 mt-5">
            {searchResult &&
              searchResult !== undefined &&
              searchResult[activeTab + "s"] &&
              searchResult[activeTab + "s"].items &&
              searchResult[activeTab + "s"].items.map((track, id: number) => (
                <Link
                  className="z-10"
                  to={`/${activeTab}/${track.id}`}
                  key={id}
                >
                  <div className="flex justify-between z-10 items-center w-full">
                    <div className="flex gap-x-3 items-center">
                      <div className="flex">
                        <div className="h-[80px] w-[80px] aspect-square">
                          {searchResult && searchResult !== undefined && (
                            <img
                              src={
                                (track.album &&
                                  track.album.images &&
                                  track.album.images[0] &&
                                  track.album.images[0].url) ||
                                (track.images &&
                                  track.images[0] &&
                                  track.images[0].url) ||
                                (track.images &&
                                  track.images[1] &&
                                  track.images[1].url) ||
                                (track.images &&
                                  track.images[2] &&
                                  track.images[2].url) ||
                                ManGuitar
                              }
                              className={`w-full h-full ${
                                activeTab === "artist"
                                  ? "rounded-full"
                                  : "rounded-md"
                              }`}
                              alt={`Track${id}`}
                            />
                          )}
                        </div>
                      </div>

                      <div className="tracking-wider overflow-hidden">
                        <div className="flex">
                          <h1 className="font-semibold text-[15px] text-black">
                            {truncateText(track && track.name) || "Title"}
                          </h1>
                          {searchResult.artists &&
                          track.followers.total >= 100000 ? (
                            <VerifiedIcon
                              className="text-blue-500 ml-2"
                              fontSize="small"
                            />
                          ) : null}
                        </div>
                        <h2 className="font-medium text-[#838383] text-[12px]">
                          {(track.artists &&
                            track.artists[0] &&
                            track.artists[0].name) ||
                            (track.artists &&
                              track.artists[1] &&
                              track.artists[1].name) ||
                            (track.artists &&
                              track.artists[2] &&
                              track.artists[2].name) ||
                            (track.description &&
                              truncateText(track.description)) ||
                            (track.followers &&
                              track.followers.total &&
                              "Followers  " + track.followers.total) ||
                            "Descriptions"}
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
    </div>
  );
}

export default SearchPage;
