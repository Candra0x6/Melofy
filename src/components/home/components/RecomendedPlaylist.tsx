import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import UseRecommendedPlaylist from "../hooks/UseRecommendedPlaylist";

function RecomendedPlaylist() {
  const { recommendedPlaylistData } = UseRecommendedPlaylist();

  return (
    <Flex display="inline-block" w="full" pt="4rem">
      <Flex justifyContent="space-between" alignItems="center" pb="10px">
        <h1 className="font-medium font-krona text-[12px] text-center">
          <span className=" before:absolute before:inset-2 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">
              Recommendation Playlist
            </span>
          </span>
        </h1>

        <button className="text-[10px] text-[#838383] flex items-center">
          See All
          <ArrowForwardIos sx={{ fontSize: "10px" }} />
        </button>
      </Flex>
      <Flex className="overflow-x-auto no-scrollbar">
        <Grid row="auto" gap={4} display="flex" w="full">
          {recommendedPlaylistData.length > 0 &&
            recommendedPlaylistData.map((val, key) => (
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
                <Text fontSize="10px">{val.description}</Text>
              </Box>
            ))}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default RecomendedPlaylist;
