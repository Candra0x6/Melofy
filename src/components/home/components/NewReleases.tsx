import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";
import UseNewAlbums from "../../../hooks/UseNewAlbums";
import { ArrowForwardIos } from "@mui/icons-material";
import axios from "axios";
export default function NewReleases() {
  const { getNewReleaseAlbum, newAlbums, getPlaylistByCategory } =
    UseNewAlbums();

  useEffect(() => {
    getPlaylistByCategory();
    getNewReleaseAlbum();
  }, []);
  return (
    <Flex display="inline-block" w="full">
      <Flex justifyContent="space-between" alignItems="center" pb="10px">
        <h1 className="font-medium font-krona text-[12px] text-center">
          <span className=" before:absolute before:inset-2 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">New Albums</span>
          </span>
        </h1>

        <button className="text-[10px] text-[#838383] flex items-center">
          See All
          <ArrowForwardIos sx={{ fontSize: "10px" }} />
        </button>
      </Flex>
      <Flex className="overflow-x-auto no-scrollbar">
        <Grid row="auto" gap={4} display="flex" w="full">
          {newAlbums.length > 0 &&
            newAlbums.map((val, key) => (
              <Box
                key={key}
                display="flex"
                flexDirection="column"
                justifyContent="start"
              >
                <Image
                  src={val.images[0].url}
                  rounded="10px"
                  maxW="8rem"
                  maxH="8rem"
                />
                <Heading fontWeight="semibold" fontSize="14px">
                  {val.name}
                </Heading>
                {val.artists.map((artist) => (
                  <Text key={artist.id} fontSize="10px">
                    {artist.name}
                  </Text>
                ))}
              </Box>
            ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
