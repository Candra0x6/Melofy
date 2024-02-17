import { useEffect } from "react";
import UsePlaylistHipHopCategory from "../../../hooks/UsePlaylistHipHopCategory";
import DiscoverCardPlaylist from "../../DiscoverCardPlaylist";

function HipHopPlaylist() {
  const { getPlaylistByHipHopCategory, hipHopPlaylist } =
    UsePlaylistHipHopCategory();
  useEffect(() => {
    getPlaylistByHipHopCategory();
  }, []);
  console.log(hipHopPlaylist);
  return (
    <DiscoverCardPlaylist data={hipHopPlaylist} title="Hip Hop Playlist" />
  );
}

export default HipHopPlaylist;
