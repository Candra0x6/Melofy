// import axios from "axios";

// function UseTopPlaylist() {
// getTopPlaylist = async () => {
//     try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_REACT_APP_BASE_URL}/browse/featured-playlists`,
//           {
//             headers: {
//               Authorization: `Bearer ${getAT}`,
//             },
//           }
//         );
//         const playlistData = response.data.playlists.items;
//         setAlbum(playlistData);
//       } catch (e) {
//         const axiosError = e as AxiosErrorResponse;
//         if (
//           axiosError.response &&
//           axiosError.response.data &&
//           axiosError.response.data.error &&
//           axiosError.response.data.error.status === 401
//         ) {
//           await getNewToken();
//         }
//       }
// }
//   return {

//   }
// }

// export default UseTopPlaylist
