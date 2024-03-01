import axios from "axios";
import { useEffect, useState } from "react";
import LocalStorageHandle from "./LocalStorageHandle";
import { Playlists, Track } from ".";

function UseGetUserPlaylist() {
  const [playlistUser, setPlaylistUser] = useState<Playlists[]>([]);
  const { getAccessToken, getUserID } = LocalStorageHandle();
  const getUserPlaylist = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/users/${getUserID}/playlists`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      setPlaylistUser(fetch.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserPlaylist();
  }, []);
  return {
    playlistUser,
  };
}

export default UseGetUserPlaylist;
