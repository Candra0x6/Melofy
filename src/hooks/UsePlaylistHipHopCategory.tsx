import axios from "axios";
import { useState } from "react";
import { Playlist } from ".";

function UsePlaylistHipHopCategory() {
  const getAT = localStorage.getItem("access_token");
  const [hipHopPlaylist, setHipHopPlaylist] = useState<Playlist[]>([]);
  const getPlaylistByHipHopCategory = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists?limit=10
        `,
        {
          headers: {
            Authorization: `Bearer ${getAT}`,
          },
        }
      );
      const hiphopData = fetch.data.playlists.items;
      setHipHopPlaylist(hiphopData);
    } catch (e) {}
  };

  return {
    getPlaylistByHipHopCategory,
    hipHopPlaylist,
  };
}

export default UsePlaylistHipHopCategory;
