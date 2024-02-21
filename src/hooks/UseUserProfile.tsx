import axios from "axios";
import { useEffect, useState } from "react";
import LocalStorageHandle from "./LocalStorageHandle";
import { User } from ".";

function UseUserProfile() {
  const { getAccessToken } = LocalStorageHandle();
  const [UserProfile, setUserProfile] = useState<User>();

  const getUserProfile = async () => {
    try {
      const fetch = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      const userProfile = fetch.data;
      setUserProfile(userProfile);
      localStorage.setItem("user_id", userProfile.id);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  return {
    UserProfile,
  };
}

export default UseUserProfile;
