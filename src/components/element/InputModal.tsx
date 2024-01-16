import { IconButton } from "@chakra-ui/react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import searchHandle from "../../hooks/searchHandle";
import { isModalActive } from "./type";
import { Link } from "react-router-dom";
function InputModal({
  visibleModalSearch,
  setVisibleModalSearch,
}: isModalActive) {
  const { searchResult, valueFilter } = searchHandle();
  const closeModal = (inner: React.MouseEvent) => {
    const innerId = inner.target as HTMLElement;
    if (innerId.id === "modalSearch") {
      console.log(inner);
      setVisibleModalSearch(false);
    }
  };

  console.log(searchResult);
  return (
    <div
      id="modalSearch"
      className={`fixed inset-0 h-full bg-white bg-opacity-50 transition-all duration-300  backdrop-blur-sm z-50 flex flex-col justify-center  ${
        visibleModalSearch
          ? "scale-100 opacity-100"
          : " scale-0 opacity-0 blur-3xl"
      }`}
      onClick={closeModal}
    >
      <div className="flex flex-col items-center justify-center gap-y-2">
        <div className="flex w-[310px] h-[30px]  justify-between border-2 border-[#1C1818] bg-[#E9FAFF] items-center text-black text-sm  rounded-full p-2 ">
          <SearchIcon />
          <input
            type="text"
            className="w-full bg-transparent focus:border-white active:border-0 focus:border-0"
            onChange={(e) => valueFilter(e.target.value)}
          />
          <IconButton
            aria-label="close-modal"
            icon={<CloseIcon />}
            bgColor="transparent"
            onClick={() => setVisibleModalSearch(false)}
          />
        </div>
        <div className="flex flex-col w-[310px] h-[376px] rounded-2xl bg-[#E9FAFF] border-2 border-[#1C1818] overflow-y-auto">
          {searchResult && searchResult.tracks && (
            <div className={`flex flex-col p-4 `}>
              <h1 className={`text-[#346473] font-semibold text-[16px] pt-2 `}>
                Track
              </h1>
              {searchResult &&
                searchResult.tracks &&
                searchResult.tracks.items.map((track, trackID) => (
                  <Link
                    key={trackID}
                    to={`track/${track.id}`}
                    onClick={() => setVisibleModalSearch(false)}
                  >
                    <h1 className="p-3 rounded-xl text-[#346473] hover:bg-[#C8E6EF] text-[14px]">
                      {track && track.name} - {track && track.artists[0].name}
                    </h1>
                  </Link>
                ))}
            </div>
          )}
          {searchResult && searchResult.artists && (
            <div className={`flex flex-col p-4 `}>
              <h1 className={`text-[#346473] font-semibold text-[16px] pt-2 `}>
                Artists
              </h1>
              {searchResult &&
                searchResult.artists &&
                searchResult.artists.items.map((artis, artisID) => (
                  <Link
                    key={artisID}
                    to={`/artists/${artis.id}`}
                    onClick={() => setVisibleModalSearch(false)}
                  >
                    <h1 className="p-3 rounded-xl text-[#346473] hover:bg-[#C8E6EF] text-[14px]">
                      {artis && artis.name}
                    </h1>
                  </Link>
                ))}
            </div>
          )}
          <div className={`flex flex-col p-4 `}>
            <h1 className={`text-[#346473] font-semibold text-[16px] pt-2 `}>
              Albums
            </h1>
            {searchResult &&
              searchResult.albums &&
              searchResult.albums.items.map((album, albumID) => (
                <Link
                  key={albumID}
                  to={`album ${album.id}`}
                  onClick={() => setVisibleModalSearch(false)}
                >
                  <h1 className="p-3 rounded-xl text-[#346473] hover:bg-[#C8E6EF] text-[14px]">
                    {album && album.name} - {album && album.artists[0].name}
                  </h1>
                </Link>
              ))}
          </div>
          <div className={`flex flex-col p-4 `}>
            <h1 className={`text-[#346473] font-semibold text-[16px] pt-2 `}>
              Playlists
            </h1>
            {searchResult &&
              searchResult.playlists &&
              searchResult.playlists.items.map((playlist, playlistID) => (
                <Link
                  key={playlistID}
                  to={`playlists/${playlist.id}`}
                  onClick={() => setVisibleModalSearch(false)}
                >
                  <h1 className="p-3 rounded-xl text-[#346473] hover:bg-[#C8E6EF] text-[14px]">
                    {playlist && playlist.name} -{" "}
                    {playlist && playlist.owner.display_name}
                  </h1>
                </Link>
              ))}
            <h1 className="text-[#346473] font-medium text-[12px] text-center py-2 pr-4 hover:bg-[#C8E6EF] rounded-full">
              See All Results
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
