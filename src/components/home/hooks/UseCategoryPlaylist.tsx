import axios from "axios";
import { useEffect, useState } from "react";

function UseCategoryPlaylist() {
  const [categoryPlaylist, setCategoryPlaylist] = useState([]);
  const getListCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/browse/categories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const categoryID = response.data.categories.items;
      setCategoryPlaylist(categoryID);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListCategory();
  }, []);
  return {
    categoryPlaylist,
  };
}

export default UseCategoryPlaylist;
