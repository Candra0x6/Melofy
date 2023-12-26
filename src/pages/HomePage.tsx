import Slider from "../components/home-component/Slider";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="container">
        <Slider />
      </div>
      <div className="container mx-2"></div>
    </div>
  );
}

export default HomePage;
