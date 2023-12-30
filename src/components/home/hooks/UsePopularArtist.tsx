import axios from "axios";
import { useEffect, useState } from "react";
import { Artis } from "..";

function UsePopularArtist() {
  const [artist, setArtist] = useState<Artis[]>([]);
  const getAT = localStorage.getItem("access_token");
  0;

  const artistID: string[] = [
    "3TVXtAsR1Inumwj472S9r4",
    "06HL4z0CvFAxyc27GXpf02",
    "4q3ewBCX7sLwd24euuV69X",
  ];
  const getShowByIds = async (artistid: string) => {
    try {
      const fetch = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/artists/${artistid}`,
        {
          headers: {
            Authorization: `Bearer ${getAT}`,
          },
        }
      );
      const data = fetch.data;
      setArtist((prev) => {
        // Check if the playlist with the same id already exists
        if (prev.filter((item) => item.id === data.id).length > 0) {
          return prev;
        }
        return [...prev, data];
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    artistID.forEach((artistid: string) => {
      getShowByIds(artistid);
    });
  }, []);
  return {
    artist,
  };
}

export default UsePopularArtist;
