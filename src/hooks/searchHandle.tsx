// src/components/SearchHandle.tsx
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult, setSearchQuery } from "../global/store/search";
import { RootState } from "../global/store";

function SearchHandle() {
  const dispatch = useDispatch();
  const { searchResult, searchQuery } = useSelector(
    (state: RootState) => state.search
  );

  const getSearchResult = async (q: string) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/search?q=${q}&type=track%2Calbum%2Cplaylist%2Cartist&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const result = response.data;
      dispatch(setSearchQuery(q));
      dispatch(setSearchResult(result));
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
    searchQuery,
  };
}

export default SearchHandle;
