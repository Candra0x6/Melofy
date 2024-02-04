import axios from "axios";
import { useEffect, useState } from "react";
import { Artis, Track } from ".";

export function UseUserTopTrack() {
  const [topTrackUser, setTopTrackUser] = useState<Track[]>([]);
  const getUserTopTrack = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/top/tracks`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setTopTrackUser(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserTopTrack();
  }, []);
  return {
    topTrackUser,
  };
}
export function UseUserTopArtist() {
  const [topArtistUser, setTopArtistUser] = useState<Artis[]>([]);
  const getUserTopArtist = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/top/artists`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setTopArtistUser(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserTopArtist();
  }, []);
  return {
    topArtistUser,
  };
}
