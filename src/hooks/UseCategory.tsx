import axios from "axios";
import { useEffect, useState } from "react";
import { Category, CategoryList } from ".";
import { useParams } from "react-router-dom";

function UseCategory() {
  const [category, setCategory] = useState<CategoryList[]>([]);
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
      setCategory(categoryID);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListCategory();
  }, []);
  return {
    category,
  };
}

export default UseCategory;

export function UseCategoryPlaylist() {
  const { category_id } = useParams();
  const [categoryPlaylist, setCategoryPlaylist] = useState<Category>();
  const getPlaylistCategory = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/browse/categories/${category_id}/playlists`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setCategoryPlaylist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlaylistCategory();
  }, []);
  return {
    categoryPlaylist,
  };
}

export function UseCategoryByID() {
  const { category_id } = useParams();
  const [categoryDetail, setCategoryDetail] = useState<CategoryList>();
  const getPlaylistCategory = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/browse/categories/${category_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setCategoryDetail(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlaylistCategory();
  }, []);
  return {
    categoryDetail,
  };
}
