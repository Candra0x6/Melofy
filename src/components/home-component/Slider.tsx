import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import music1 from "../../assets/music1.jpeg";
import music2 from "../../assets/music2.jpeg";
import music3 from "../../assets/music3.jpeg";
import music4 from "../../assets/music4.jpeg";
import axios from "axios";

interface ArrowSlide {
  onClick: () => void;
}
function SliderSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [album, setAlbum] = useState<[]>([]);
  const Image = [music1, music2, music3, music4];
  const getAT = localStorage.getItem("access_token");
  const RefreshToken = localStorage.getItem("refresh_token");
  const getNewToken = async () => {
    try {
      const getToken = await axios.post(
        `${import.meta.env.VITE_REACT_APP_TOKEN_BASE_URL}`,
        {
          grant_type: "refresh_token",
          refresh_token: RefreshToken,
          client_id: import.meta.env.VITE_REACT_APP_CLIENT_ID,
          client_secret: import.meta.env.VITE_REACT_APP_CLIENT_SECRET,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(getToken);
      const token = getToken.data.access_token;
      localStorage.setItem("access_token", token);
      console.log(getToken);
    } catch (e) {
      console.log(e);
    }
  };

  const getAlbumMusix = async () => {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/featured-playlists",
        {
          headers: {
            Authorization: `Bearer ${getAT}`,
          },
        }
      );
      const playlistData = response.data.playlists.items;
      setAlbum(playlistData);
    } catch (e) {
      console.log(e);
    }
    // Panggil fungsi
  };

  console.log(album);
  useEffect(() => {
    getAlbumMusix();
  }, []);
  const NextArrow: React.FC<ArrowSlide> = ({ onClick }) => {
    return (
      <Box
        position="absolute"
        zIndex="10"
        right="0"
        h="full"
        top="0"
        display="flex"
        alignItems="center"
      >
        <IconButton
          aria-label="NextSlide"
          colorScheme="transparant"
          icon={
            <ArrowForwardIosIcon
              fontSize="large"
              className="text-[#e9faff83]"
            />
          }
          onClick={onClick}
        />
      </Box>
    );
  };
  const PrevArrow: React.FC<ArrowSlide> = ({ onClick }) => {
    return (
      <Box
        zIndex="10"
        position="absolute"
        h="full"
        left="0"
        display="flex"
        alignItems="center"
      >
        <IconButton
          aria-label="BackSlide"
          colorScheme="transparant"
          icon={
            <ArrowBackIosIcon className="text-[#e9faff83]" fontSize="large" />
          }
          onClick={onClick}
        />
      </Box>
    );
  };
  const SliderSetting = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (currentSlide: number, nextSlide: number) =>
      setSelectedImageIndex(nextSlide),
  };
  return (
    <div className="flex flex-col pt-5">
      <div className="flex w-full justify-center">
        <h1 className="font-bold font-krona text-xl text-center">
          <span className=" before:absolute before:inset-3.5 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">Now Trending</span>
          </span>
        </h1>
      </div>
      <Slider {...SliderSetting} className="mt-10">
        {album.map((val, key) => (
          <div
            className={`duration-500 transition-transform rounded-lg ${
              key === selectedImageIndex
                ? "scale-105 opacity-100"
                : "scale-90 opacity-90 blur-[2px] brightness-[0.5]"
            }`}
          >
            <img
              src={val.images[0].url}
              className=" rounded-[1.7rem]"
              alt={`MusicALbum ${key}`}
            />
          </div>
        ))}
      </Slider>
      <div className="slider"></div>
    </div>
  );
}

export default SliderSection;
