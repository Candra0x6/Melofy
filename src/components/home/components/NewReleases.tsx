import { useEffect } from "react";
import UseNewAlbums from "../../../hooks/UseNewAlbums";
import DiscoverCardPlaylist from "../../DiscoverCardPlaylist";
export default function NewReleases() {
  const { getNewReleaseAlbum, newAlbums, getPlaylistByCategory } =
    UseNewAlbums();

  useEffect(() => {
    getPlaylistByCategory();
    getNewReleaseAlbum();
  }, []);

  return <DiscoverCardPlaylist data={newAlbums} title="New Albums" />;
}
