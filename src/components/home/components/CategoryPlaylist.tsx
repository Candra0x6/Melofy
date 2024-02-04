import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import UseCategory from "../../../hooks/UseCategory";

function CategoryPlaylist() {
  const { category } = UseCategory();

  return (
    <Flex display="inline-block">
      <Flex justifyContent="space-between" alignItems="center" pb="10px">
        <h1 className="font-medium font-krona text-[12px] text-center">
          <span className=" before:absolute before:inset-2 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">Category Playlist</span>
          </span>
        </h1>

        <button className="text-[10px] text-[#838383] flex items-center">
          See All
          <ArrowForwardIos sx={{ fontSize: "10px" }} />
        </button>
      </Flex>
      <Flex className="overflow-x-auto no-scrollbar">
        <SimpleGrid
          gridColumn="auto"
          row={1}
          minChildWidth="110px"
          maxW="400vh"
          spacingX={4}
        >
          {category &&
            category.length > 0 &&
            category.map((val, key) => (
              <Link
                to={`/category/${val.id}?category=${val.name.toLowerCase()}`}
                key={key}
              >
                <Box
                  key={key}
                  display="flex"
                  flexDirection="column"
                  justifyContent="end"
                  className="items-center"
                  position="relative"
                >
                  <Image
                    src={val.icons[0].url}
                    rounded="1rem "
                    w="full"
                    maxW="full"
                    maxH="70px"
                  />
                  <Heading
                    position="absolute"
                    fontWeight="semibold"
                    fontSize="10px"
                    textColor="white"
                    textAlign="center"
                    marginBottom="3px"
                  >
                    {val.name}
                  </Heading>
                </Box>
              </Link>
            ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default CategoryPlaylist;
