import axios from "axios";
import LocalStorageHandle from "./LocalStorageHandle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UseUserFollowAlbum() {
  const { getAccessToken } = LocalStorageHandle();
  const { album_id } = useParams();
  const [isSaveAlbum, setIsSaveAlbum] = useState<boolean>();
  const saveAlbum = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/albums?ids=${album_id}`,
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
  const removeAlbum = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/albums?ids=${album_id}`,
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

  const checkSavedAlbum = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/me/albums/contains?ids=${album_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      setIsSaveAlbum(fetch.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkSavedAlbum();
  }, []);
  return {
    saveAlbum,
    removeAlbum,
    checkSavedAlbum,
    isSaveAlbum,
  };
}

export default UseUserFollowAlbum;
