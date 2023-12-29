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
import UseNewAlbums from "../hooks/UseNewAlbums";
export default function NewReleases() {
  const { getNewReleaseAlbum, newAlbums } = UseNewAlbums();
  // const getPlaylistByCategory = async () => {
  //   try {
  //     const fetch = await axios.get(
  //       `${import.meta.env.VITE_REACT_APP_BASE_URL}/browse/categories`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${getAT}`,
  //         },
  //       }
  //     );
  //     console.log(fetch);
  //   } catch (e) {}
  // };
  useEffect(() => {
    getNewReleaseAlbum();
  }, []);
  return (
    <Flex display="inline-block" w="full" pt="1rem">
      <Flex justifyContent="space-between" alignItems="center">
        <h1 className="font-medium font-krona text-[12px] text-center">
          <span className=" before:absolute before:inset-2 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">New Release Albums</span>
          </span>
        </h1>
        <Box>
          <Button
            textColor="#5B7C87"
            colorScheme="transparant"
            fontWeight="lighter"
            fontSize="10px"
          >
            See All
            <ArrowForwardIosIcon sx={{ fontSize: "10px" }} />
          </Button>
        </Box>
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
