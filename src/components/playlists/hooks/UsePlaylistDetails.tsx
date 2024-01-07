import { useEffect, useState } from "react";
import { Playlist } from "../../home";
import { useParams } from "react-router-dom";
import axios from "axios";

function UsePlaylistDetails() {
  const [playlistDetail, setPlaylistDetail] = useState<Playlist>();
  const getAt = localStorage.getItem("access_token");
  const { playlist_id } = useParams();
  //   get playlist detail from api
  const getPlaylistDetails = async () => {
    try {
      const playlist = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/playlists/${playlist_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAt}`,
          },
        }
      );
      const result = playlist.data;
      setPlaylistDetail(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPlaylistDetails();
  }, []);
  return {
    playlistDetail,
  };
}

export default UsePlaylistDetails;
