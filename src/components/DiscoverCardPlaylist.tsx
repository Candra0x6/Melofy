import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Albums, Playlists } from "../hooks";
import UseTruncateText from "../hooks/UseTruncateText";

interface PropsData {
  data: Playlists[] | Albums[];
  title: string;
}
function DiscoverCardPlaylist({ data, title }: PropsData) {
  const { truncateText } = UseTruncateText();
  return (
    <Flex display="inline-block" w="full">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pb="10px"
        px="8px"
      >
        <h1 className="font-medium font-krona text-[12px] text-center">
          <span className=" before:absolute before:inset-2 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">{title}</span>
          </span>
        </h1>
        <button className="text-[10px] text-[#838383] flex items-center">
          See All
          <ArrowForwardIos sx={{ fontSize: "10px" }} />
        </button>
      </Flex>
      <Flex className="overflow-x-auto no-scrollbar pl-2    ">
        <Grid row="auto" gap={4} display="flex" w="full">
          {data.length > 0 &&
            data.map((val, key) => (
              <Link
                to={`/${val.type || "playlist"}/${
                  val.id
                }?playlist-name=${val.name.toLowerCase()}`}
                key={key}
              >
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
                  <span className="text-[10px] w-full">
                    {truncateText((val as Playlists).description, 40) ||
                      ((val as Albums).artists &&
                        (val as Albums).artists.map((artist, id: number) => (
                          <span key={id}>{artist.name} </span>
                        )))}
                  </span>
                </Box>
              </Link>
            ))}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default DiscoverCardPlaylist;
