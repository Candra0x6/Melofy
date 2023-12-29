import axios from "axios";
import { useEffect, useState } from "react";

interface RecomendedPlaylistState {
  id: string;
  description: string;
  images: {
    url: string;
  }[];
  name: string;
}

function UseRecommendedPlaylist() {
  const getAT = localStorage.getItem("access_token");

  const [recommendedPlaylistData, setRecommendedPlaylistData] = useState<
    RecomendedPlaylistState[]
  >([]);
  const playlistsID: string[] = [
    "37i9dQZEVXbNG2KDcFcKOF",
    "37i9dQZEVXbIZK8aUquyx8",
    "37i9dQZEVXbMDoHDwVN2tF",
    "37i9dQZEVXbLiRSasKsNU9",
    "37i9dQZEVXbKpV6RVDTWcZ",
  ];
  const getShowByIds = async (playlistID: string) => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/playlists/${playlistID}?fields=name,description,images(url),id`,
        {
          headers: {
            Authorization: `Bearer ${getAT}`,
          },
        }
      );
      const result = fetch.data;

      setRecommendedPlaylistData((prev) => {
        // Check if the playlist with the same id already exists
        if (prev.filter((item) => item.id === result.id).length > 0) {
          return prev;
        }
        return [...prev, result];
      });
    } catch (e) {
      console.error(e);
    }
  };
  console.log(localStorage);
  useEffect(() => {
    // Looping by arrays of playlistsID
    playlistsID.forEach((playlistID: string) => {
      getShowByIds(playlistID);
    });
  }, []);
  return {
    recommendedPlaylistData,
  };
}

export default UseRecommendedPlaylist;
