import CategoryPlaylist from "../components/home/components/CategoryPlaylist";
import HipHopPlaylist from "../components/home/components/HipHopPlaylist";
import NewReleases from "../components/home/components/NewReleases";
import PopularArtists from "../components/home/components/PopularArtists";
import RecomendedPlaylist from "../components/home/components/RecomendedPlaylist";
import Slider from "../components/home/components/Slider";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center mx-1 sticky overflow-hidden">
      <div className="container">
        <Slider />
      </div>
      <div className="overflow-hidden relative w-full flex flex-col gap-y-5 ">
        <RecomendedPlaylist />
        <NewReleases />
        <HipHopPlaylist />
        <PopularArtists />
        <CategoryPlaylist />
      </div>
    </div>
  );
}

export default HomePage;
