import axios from "axios";
import { useState } from "react";
import { Albums } from ".";

function UseNewAlbums() {
  const getAT = localStorage.getItem("access_token");
  const [newAlbums, setNewAlbums] = useState<Albums[]>([]);
  const getNewReleaseAlbum = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/browse/new-releases?limit=10`,
        {
          headers: {
            Authorization: `Bearer ${getAT}`,
          },
        }
      );

      const data = fetch.data.albums.items;
      setNewAlbums(data);
    } catch (e) {}
  };

  const getPlaylistByCategory = async () => {
    try {
      const fetch = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me`,
        {
          headers: {
            Authorization: `Bearer ${getAT}`,
          },
        }
      );
      console.log(fetch);
    } catch (e) {}
  };
  return {
    newAlbums,
    getNewReleaseAlbum,
    getPlaylistByCategory,
  };
}

export default UseNewAlbums;
