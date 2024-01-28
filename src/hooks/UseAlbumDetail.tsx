import axios from "axios";
import { useParams } from "react-router-dom";
import LocalStorageHandle from "./LocalStorageHandle";
import { useEffect, useState } from "react";
import { Albums } from ".";

function UseAlbumDetail() {
  const { getAccessToken } = LocalStorageHandle();

  const { album_id } = useParams();
  const [albumDetail, setAlbumDetail] = useState<Albums>();

  const getAlbum = async () => {
    try {
      const fetch = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/albums/${album_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      setAlbumDetail(fetch.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAlbum();
  }, []);
  return {
    albumDetail,
  };
}

export default UseAlbumDetail;
