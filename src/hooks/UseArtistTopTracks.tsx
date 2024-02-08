import { useEffect, useState } from "react";
import { Track } from ".";
import axios from "axios";
import { useParams } from "react-router-dom";
import LocalStorageHandle from "./LocalStorageHandle";

function UseArtistTopTracks() {
  const [artistTopTrack, setArtistTopTrack] = useState<Track[]>([]);
  const { getAccessToken } = LocalStorageHandle();
  const { artist_id } = useParams();
  const getTopTrack = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/artists/${artist_id}/top-tracks?market=US`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setArtistTopTrack(fetch.data.tracks);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTopTrack();
  }, []);
  return {
    artistTopTrack,
  };
}

export default UseArtistTopTracks;
