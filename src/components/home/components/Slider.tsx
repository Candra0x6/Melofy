import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ArrowSlide, AxiosErrorResponse, Playlist } from "../../../hooks";
import { Link } from "react-router-dom";

function SliderSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [album, setAlbum] = useState<Playlist[]>([]);
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
      const token = getToken.data.access_token;
      localStorage.setItem("access_token", token);
    } catch (e) {
      console.log(e);
    }
  };

  const getTopPlaylist = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/browse/featured-playlists`,
        {
          headers: {
            Authorization: `Bearer ${getAT}`,
          },
        }
      );
      const playlistData = response.data.playlists.items;
      setAlbum(playlistData);
      console.log(playlistData);
    } catch (e) {
      const axiosError = e as AxiosErrorResponse;
      if (
        axiosError.response &&
        axiosError.response.data &&
        axiosError.response.data.error &&
        axiosError.response.data.error.status === 401
      ) {
        await getNewToken();
      }
    }
  };

  useEffect(() => {
    getTopPlaylist();
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
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    centerPadding: "80px",
    centerMode: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (currentSlide: number, nextSlide: number) =>
      setSelectedImageIndex(nextSlide),
  };
  return (
    <div className="flex flex-col pt-10">
      <div className="flex w-full justify-center">
        <h1 className="font-bold font-krona text-xl text-center">
          <span className=" before:absolute before:inset-3.5 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">Now Hits</span>
          </span>
        </h1>
      </div>
      <Slider key={album.length} {...SliderSetting} className="mt-10">
        {album.length > 0 &&
          album &&
          album.map((val, key) => (
            <Link key={key} to={`/playlists/${val.id}`}>
              <div
                key={key}
                className={`duration-500 transition-transform rounded-lg ${
                  key === selectedImageIndex
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-90 blur-[2px] brightness-[0.5]"
                }`}
              >
                <img
                  src={val.images[0].url}
                  className=" rounded-[1.7rem] "
                  alt={`MusicALbum ${key}`}
                />
              </div>
            </Link>
          ))}
      </Slider>
      <div className="slider"></div>
    </div>
  );
}

export default SliderSection;
