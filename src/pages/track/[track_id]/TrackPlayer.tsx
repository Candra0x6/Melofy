import {
  Box,
  IconButton,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import UseTrackDetail from "../../../hooks/UseTrackDetail";
import { useEffect, useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { GraphicEq, Shuffle, VolumeDown, VolumeUp } from "@mui/icons-material";
import WestIcon from "@mui/icons-material/West";
import axios from "axios";
import LocalStorageHandle from "../../../hooks/LocalStorageHandle";
import ConvertMiliSecond from "../../../hooks/ConvertMiliSecond";

function TrackPlayer() {
  const { getAccessToken } = LocalStorageHandle();
  const { trackDetail } = UseTrackDetail();
  const { convertMiliseconds } = ConvertMiliSecond();
  const [timeTrack, setTimeTrack] = useState(0);
  const [playerState, setPlayerState] = useState([]);
  const handleChange = (value: number) => setTimeTrack(value);

  const getPlaybackState = async () => {
    try {
      const fetch = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/player/devices
        `,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      setPlayerState(fetch.data.devices[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const startPlayback = async () => {
    try {
      const play = await axios.put(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/me/player/play
        `,
        {
          context_uri: [`spotify:${trackDetail?.type}:${trackDetail?.id}`],
        },
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      console.log(play);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPlaybackState();
  }, []);
  return (
    <div className="flex justify-center bg-[#F7FCFE] overflow-hidden relative h-[100vh]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="flex w-full justify-start mt-2 ml-2">
              <IconButton
                onClick={() => window.history.back()}
                aria-label="Backk"
                bgColor="transparent"
                icon={<WestIcon sx={{ fontSize: 28 }} />}
              />
            </div>
            <div className="musicImg pt-10 pb-20 flex justify-center items-center">
              {trackDetail &&
                trackDetail.album &&
                trackDetail.album.images &&
                trackDetail.album.images[0] && (
                  <>
                    <Image
                      src={trackDetail.album && trackDetail.album.images[0].url}
                      alt="Track Picture"
                      className=" rounded-full z-10 w-[323px]"
                    />
                    <Image
                      src={trackDetail.album && trackDetail.album.images[0].url}
                      alt="Track Picture"
                      className="absolute blur-[20px] brightness-125 mt-32 rounded-full w-[323px] h-[289px]"
                    />
                  </>
                )}
              <div className="absolute w-10 h-10 z-10 bg-[#F7FCFE] rounded-full"></div>
            </div>
            <div className="musicTitle flex flex-col text-center font-krona items-center text-black">
              <h1 className=" text-[15px]">
                {" "}
                {trackDetail && trackDetail?.name}
              </h1>
              <span className="text-[10px] text-[#838383]">
                {trackDetail?.artists && trackDetail?.artists[0].name}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[14rem] mx-auto items-center mt-24 gap-y-6">
            <div className="flex flex-col w-full  items-center">
              <Slider
                w="full"
                flex="1"
                focusThumbOnChange={false}
                value={timeTrack}
                onChange={handleChange}
              >
                <SliderTrack>
                  <SliderFilledTrack bgColor="#006585" />
                </SliderTrack>
              </Slider>
              <div className="flex justify-between w-full text-[10px] font-poppins font-normal mt-1 text-[#838383]">
                <h1>00:00</h1>
                <h1>
                  {trackDetail && convertMiliseconds(trackDetail.duration_ms)}{" "}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-x-1 mt-5">
              <IconButton
                colorScheme="transparent"
                bgColor="transparent"
                aria-label="Repeat"
                icon={
                  <RepeatIcon
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
              <IconButton
                colorScheme="transparent"
                bgColor="transparent"
                aria-label="SkipPrevious"
                icon={
                  <SkipPreviousIcon
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
              <IconButton
                bgColor="transparent"
                colorScheme="transparent"
                aria-label="SkipRewind"
                icon={
                  <FastRewindIcon
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
              <IconButton
                colorScheme="transparent"
                bgColor="#346473 "
                aria-label="Play"
                onClick={startPlayback}
                icon={
                  <PlayArrowIcon
                    sx={{ fontSize: 30 }}
                    className="text-white hover:text-[#21424c]"
                  />
                }
              />
              <IconButton
                colorScheme="transparent"
                bgColor="transparent"
                aria-label="Fast"
                icon={
                  <FastForwardIcon
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
              <IconButton
                colorScheme="transparent"
                bgColor="transparent"
                aria-label="SkipNext"
                icon={
                  <SkipNextIcon
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
              <IconButton
                colorScheme="transparent"
                bgColor="transparent"
                aria-label="SkipNextAuto"
                icon={
                  <Shuffle
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
            </div>
            <div className="flex w-full">
              <IconButton
                colorScheme="transparent"
                bgColor="transparent"
                aria-label="Volume Down"
                icon={
                  <VolumeDown
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
              <Slider
                w="full"
                flex="1"
                focusThumbOnChange={false}
                value={timeTrack}
                onChange={handleChange}
              >
                <SliderTrack>
                  <SliderFilledTrack bgColor="#006585" />
                </SliderTrack>
                <SliderThumb boxSize={6} w="15px" h="15px" bgColor="#346473">
                  <Box
                    color="tomato"
                    textColor="white"
                    as={GraphicEq}
                    w="full"
                    h="full"
                  />
                </SliderThumb>
              </Slider>
              <IconButton
                colorScheme="transparent"
                bgColor="transparent"
                aria-label="Volume Up"
                icon={
                  <VolumeUp
                    sx={{ fontSize: 30 }}
                    className="text-[#346473] hover:text-[#21424c]"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackPlayer;
