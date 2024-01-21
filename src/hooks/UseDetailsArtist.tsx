import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artis } from ".";
import LocalStorageHandle from "./LocalStorageHandle";

function UseDetailsArtist() {
  const [artistDetail, setArtistDetail] = useState<Artis>();
  const { getAccessToken } = LocalStorageHandle();
  const { artist_id } = useParams();
  const getTrack = async () => {
    try {
      const fetch = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/artists/${artist_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setArtistDetail(fetch.data);
      console.log(fetch.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTrack();
  }, []);
  return {
    artistDetail,
  };
}

export default UseDetailsArtist;
