import axios from "axios";
import { useParams } from "react-router-dom";
import LocalStorageHandle from "./LocalStorageHandle";
import { useEffect, useState } from "react";

function UseUserFollowTrack() {
  const { track_id } = useParams();
  const { getAccessToken } = LocalStorageHandle();
  const [isSaveTrack, setIsSaveTrack] = useState<boolean>();
  9;

  const saveTrack = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/tracks?ids=${track_id}`,
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
  const removeTrack = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/tracks?ids=${track_id}`,
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
  const checkSavedTrack = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/me/tracks/contains?ids=${track_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setIsSaveTrack(fetch.data[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    checkSavedTrack();
  }, []);

  return {
    saveTrack,
    removeTrack,
    checkSavedTrack,
    isSaveTrack,
  };
}

export default UseUserFollowTrack;
