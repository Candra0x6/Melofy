import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/element/Header";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/authentication/Login";
import Cover from "./pages/authentication/Cover";
import Signup from "./pages/authentication/Signup";
import PlaylistDetail from "./pages/playlist/[playlist_id]/PlaylistDetail";
import TrackPlayer from "./pages/track/[track_id]/TrackPlayer";
import SearchPage from "./pages/search/SearchPage";
import ArtistDetails from "./pages/artist/[artist_id]/ArtistDetails";
import AlbumDetail from "./pages/album/[album_id]/AlbumDetail";

function App() {
  const ac = localStorage.getItem("access_token");

  const simpleauth = (): boolean => {
    return ac ? true : false;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={simpleauth() ? <HomePage /> : <Cover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/playlist/:playlist_id" element={<PlaylistDetail />} />
        <Route path="/track/:track_id" element={<TrackPlayer />} />
        <Route path="/artist/:artist_id" element={<ArtistDetails />} />
        <Route path="/album/:album_id" element={<AlbumDetail />} />
        <Route path="*" element={<Cover />} />
      </Routes>
    </Router>
  );
}

export default App;
