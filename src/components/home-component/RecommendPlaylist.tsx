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
import tes from "../../assets/music1.jpeg";
export default function RecommendPlaylist() {
  return (
    <>
      <Flex display="inline-block" w="full" pt="4rem">
        <Flex justifyContent="space-between" alignItems="center">
          <h1 className="font-medium font-krona text-[12px] text-center">
            <span className=" before:absolute before:inset-2 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
              <span className="relative text-black ">Recommended Playlist</span>
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
        <Flex overflow="scroll" w="full">
          <Grid row="auto" gap={4} display="flex">
            <Box display="flex" flexDirection="column" justifyContent="start">
              <Image src={tes} rounded="10px" maxW="8rem" maxH="8rem" />
              <Heading fontWeight="semibold" fontSize="14px">
                Sun Yellow Hearht
              </Heading>
              <Text fontSize="12px">Fox Oranic</Text>
            </Box>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
