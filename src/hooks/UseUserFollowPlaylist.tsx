import axios from "axios";
import LocalStorageHandle from "./LocalStorageHandle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function UseUserFollowPlaylistItem() {
  const { getAccessToken, getUserID } = LocalStorageHandle();
  const { playlist_id } = useParams();
  const [isFollowPlaylist, setIsFollowPlaylist] = useState<boolean>();

  const addItemsPlaylist = async () => {
    try {
      await axios.put(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/playlists/${playlist_id}/followers`,
        null,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  const removeItemsPlaylist = async () => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/playlists/${playlist_id}/followers`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  const getIsFollowPlaylist = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/playlists/${playlist_id}/followers/contains?ids=${getUserID}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      setIsFollowPlaylist(fetch.data[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getIsFollowPlaylist();
  }, []);
  return {
    addItemsPlaylist,
    removeItemsPlaylist,
    getIsFollowPlaylist,
    isFollowPlaylist,
  };
}
