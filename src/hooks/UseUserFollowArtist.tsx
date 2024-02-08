import axios from "axios";
import { useEffect, useState } from "react";
import { Artis } from ".";
import { useParams } from "react-router-dom";
import LocalStorageHandle from "./LocalStorageHandle";

export function UseUserFollowArtist() {
  const [followArtist, setFollowArtist] = useState<Artis[]>([]);
  const getFollowArtist = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/following?type=artist`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setFollowArtist(response.data.artists.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFollowArtist();
  }, []);
  return {
    followArtist,
  };
}

export function UseFollowArtist() {
  const { artist_id } = useParams();
  const { getAccessToken } = LocalStorageHandle();

  const [isFollow, setIsFollow] = useState<boolean>();
  const getIsFollowArtist = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/me/following/contains?type=artist&ids=${artist_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      setIsFollow(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const putFollowArtist = async () => {
    try {
      await axios.put(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/me/following?type=artist&ids=${artist_id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowArtist = async () => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/me/following?type=artist&ids=${artist_id}`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIsFollowArtist();
  }, []);
  return {
    getIsFollowArtist,
    putFollowArtist,
    unfollowArtist,
    isFollow,
  };
}
