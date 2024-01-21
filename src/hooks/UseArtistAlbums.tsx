import { useParams } from "react-router-dom";
import { Albums } from ".";
import LocalStorageHandle from "./LocalStorageHandle";
import axios from "axios";
import { useEffect, useState } from "react";

function UseArtistAlbums() {
  const [artistAlbums, setArtistAlbums] = useState<Albums[]>([]);
  const { getAccessToken } = LocalStorageHandle();
  const { artist_id } = useParams();
  const getTopTrack = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/artists/${artist_id}/albums?market=US`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setArtistAlbums(fetch.data.items);
      console.log(fetch.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTopTrack();
  }, []);
  return {
    artistAlbums,
  };
}

export default UseArtistAlbums;
