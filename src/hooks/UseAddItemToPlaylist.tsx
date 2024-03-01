import axios from "axios";
import LocalStorageHandle from "./LocalStorageHandle";

function UseAddItemToPlaylist() {
  const { getAccessToken } = LocalStorageHandle();
  const addTrack = async (uri: string, playlist_id: string | null) => {
    try {
      await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/playlists/${playlist_id}/tracks`,
        {
          uris: [uri],
          position: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return {
    addTrack,
  };
}

export default UseAddItemToPlaylist;
