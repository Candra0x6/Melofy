import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LocalStorageHandle from "./LocalStorageHandle";
import { Track } from ".";

function UseAlbumTracks() {
  const [albumTracks, setAlbumTracks] = useState<Track[]>();
  const { getAccessToken } = LocalStorageHandle();
  const { album_id } = useParams();

  const durationTrackConv = (ms: number) => {
    const totalSecond = ms / 1000;
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;
    return `${minutes}:${seconds.toFixed(0).padStart(2, "0")}`;
  };

  const getAlbumTracks = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/albums/${album_id}/tracks?market=US`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setAlbumTracks(fetch.data.items);
      console.log(fetch.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAlbumTracks();
  }, []);
  return {
    albumTracks,
    durationTrackConv,
  };
}

export default UseAlbumTracks;
