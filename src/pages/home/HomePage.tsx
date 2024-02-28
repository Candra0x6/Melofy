import CategoryPlaylist from "../../components/home/components/CategoryPlaylist";
import HipHopPlaylist from "../../components/home/components/HipHopPlaylist";
import NewReleases from "../../components/home/components/NewReleases";
import PopularArtists from "../../components/home/components/PopularArtists";
import RecomendedPlaylist from "../../components/home/components/RecomendedPlaylist";
import Slider from "../../components/home/components/Slider";

function HomePage() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center sticky overflow-hidden bg-[#F7FCFE]">
        <div className="container">
          <Slider />
          <div className="overflow-hidden relative w-full flex flex-col gap-y-5">
            <RecomendedPlaylist />
            <NewReleases />
            <HipHopPlaylist />
            <PopularArtists />
            <CategoryPlaylist />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
