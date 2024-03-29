import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIos } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UsePopularArtist from "../../../hooks/UsePopularArtist";
import { Link } from "react-router-dom";
function PopularArtists() {
  const { artist } = UsePopularArtist();
  return (
    <Flex display="inline-block" w="full">
      <Flex justifyContent="space-between" alignItems="center" pb="10px">
        <h1 className="font-medium font-krona text-[12px] text-center">
          <span className=" before:absolute before:inset-2 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">Popular Artists</span>
          </span>
        </h1>

        <button className="text-[10px] text-[#838383] flex items-center">
          See All
          <ArrowForwardIos sx={{ fontSize: "10px" }} />
        </button>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        rowGap={3}
        className=" w-full"
        h="full"
      >
        {artist.length > 0 &&
          artist.map((artist, key) => (
            <Link
              key={key}
              to={`/${artist.type}/${artist.id}`}
              className="w-full"
            >
              <div className="flex w-full">
                <Box w="full" h="full" display="flex" columnGap={3}>
                  <Image
                    src={artist.images[0].url}
                    h="70px"
                    w="70px"
                    rounded="1.2rem "
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Text fontWeight="semibold" fontSize="14px">
                      {artist.name}
                    </Text>
                    <Text
                      fontWeight="medium"
                      textColor="#5C5C5C"
                      fontSize="10px"
                    >
                      {artist.type.charAt(0).toUpperCase() +
                        artist.type.slice(1)}
                    </Text>
                  </Box>
                </Box>
                <IconButton
                  bgColor="transparent"
                  aria-label="MoreDots"
                  icon={<MoreHorizIcon />}
                />
              </div>
            </Link>
          ))}
      </Flex>
    </Flex>
  );
}

export default PopularArtists;
