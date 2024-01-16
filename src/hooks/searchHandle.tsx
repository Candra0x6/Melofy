import axios from "axios";
import { useState } from "react";
import { SearchResult } from ".";

function searchHandle() {
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const getSearchResult = async (q: string) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/search?q=${q}&type=track%2Calbum%2Cplaylist%2Cartist&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const result = response.data;
      setSearchResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  const valueFilter = (q: string) => {
    if (q !== "") {
      getSearchResult(q);
    } else {
    }
  };
  return {
    valueFilter,
    searchResult,
  };
}

export default searchHandle;
