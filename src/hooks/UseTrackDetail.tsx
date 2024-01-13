import axios from "axios";
import LocalStorageHandle from "./LocalStorageHandle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Track } from ".";

function UseTrackDetail() {
  const [trackDetail, setTrackDetail] = useState<Track>();
  const { getAccessToken } = LocalStorageHandle();
  const { track_id } = useParams();
  const getTrack = async () => {
    try {
      const fetch = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/tracks/${track_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setTrackDetail(fetch.data);
      console.log(fetch.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTrack();
  }, []);
  return {
    trackDetail,
  };
}

export default UseTrackDetail;
