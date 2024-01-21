import { useParams } from "react-router-dom";
import { Artis } from ".";
import LocalStorageHandle from "./LocalStorageHandle";
import axios from "axios";
import { useEffect, useState } from "react";

function UseReleatedArtists() {
  const [releatedArtists, setReleatedArtists] = useState<Artis[]>([]);
  const { getAccessToken } = LocalStorageHandle();
  const { artist_id } = useParams();
  const getReleatedArtists = async () => {
    try {
      const fetch = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/artists/${artist_id}/related-artists`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );

      setReleatedArtists(fetch.data.artists);
      console.log(fetch.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getReleatedArtists();
  }, []);
  return {
    releatedArtists,
  };
}

export default UseReleatedArtists;
