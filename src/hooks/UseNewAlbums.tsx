import axios from "axios";
import { useState } from "react";
import { Albums } from ".";
import LocalStorageHandle from "./LocalStorageHandle";

function UseNewAlbums() {
  const { getAccessToken } = LocalStorageHandle();
  const [newAlbums, setNewAlbums] = useState<Albums[]>([]);
  const getNewReleaseAlbum = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/browse/new-releases?limit=10`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
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
            Authorization: `Bearer ${getAccessToken}`,
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
