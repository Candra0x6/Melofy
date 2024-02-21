import axios from "axios";
import { useEffect, useState } from "react";
import { Albums, Playlists, Track } from ".";
import LocalStorageHandle from "./LocalStorageHandle";

interface TrackSave {
  track: Track;
}

interface AlbumSave {
  album: Albums;
}

export function UseUserSavedTrack() {
  const { getAccessToken } = LocalStorageHandle();
  const [trackSaved, setTrackSaved] = useState<TrackSave[]>([]);
  const getTrackSave = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/tracks`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      const track = response.data.items;
      setTrackSaved(track);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrackSave();
  }, []);
  return {
    trackSaved,
  };
}
export function UseUserSavedPlaylist() {
  const { getAccessToken } = LocalStorageHandle();
  const [playlistSave, setPlaylistSave] = useState<Playlists[]>([]);
  const getPlaylistSave = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/playlists`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      const playlist = response.data.items;
      setPlaylistSave(playlist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlaylistSave();
  }, []);
  return {
    playlistSave,
  };
}

export function UseUserSavedAlbums() {
  const { getAccessToken } = LocalStorageHandle();
  const [savedAlbums, setSavedAlbums] = useState<AlbumSave[]>([]);
  const getAlbumSave = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/albums`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      const albums = response.data.items;
      setSavedAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlbumSave();
  }, []);
  return {
    savedAlbums,
  };
}
