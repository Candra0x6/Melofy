import HipHopPlaylist from "../components/home/components/HipHopPlaylist";
import NewReleases from "../components/home/components/NewReleases";
import RecomendedPlaylist from "../components/home/components/RecomendedPlaylist";
import Slider from "../components/home/components/Slider";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center mx-1 sticky overflow-hidden">
      <div className="container">
        <Slider />
      </div>
      <div className="overflow-hidden relative w-full">
        <RecomendedPlaylist />
        <NewReleases />
        <HipHopPlaylist />
      </div>
    </div>
  );
}

export default HomePage;
