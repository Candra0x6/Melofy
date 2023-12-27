import RecommendPlaylist from "../components/home-component/RecommendPlaylist";
import Slider from "../components/home-component/Slider";

function HomePage() {
  return (
    <div className="flex flex-col justify-center">
      <div className="container">
        <Slider />
      </div>
      <div className="container mx-2">
        <RecommendPlaylist />
      </div>
    </div>
  );
}

export default HomePage;
