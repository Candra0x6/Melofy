import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IosShareIcon from "@mui/icons-material/IosShare";
import { MoreVert } from "@mui/icons-material";

interface LibraryInteract {
  addItems: () => Promise<void>;
  removeItems: () => Promise<void>;
  isFollow: boolean | undefined;
  getIsFollow: () => Promise<void>;
}

export function ButtonInteract({
  addItems,
  isFollow,
  getIsFollow,
  removeItems,
}: LibraryInteract) {
  return (
    <div className="absolute top-0 right-0 p-2 z-10">
      <Menu>
        <MenuButton
          backgroundColor="#E9FAFF"
          rounded={20}
          border="0px"
          as={IconButton}
          aria-label="Options"
          icon={<MoreVert />}
          variant="outline"
          zIndex={200}
        />
        <MenuList
          zIndex={1000}
          border="1px"
          borderColor="black"
          backgroundColor="#E9FAFF"
        >
          <MenuItem
            backgroundColor="transparent"
            fontSize="13px"
            icon={<LibraryAddIcon />}
            onClick={async () => {
              isFollow === false && (await addItems());
              isFollow === true && (await removeItems());
              getIsFollow();
            }}
          >
            {isFollow === true
              ? "Remove from Your Library"
              : " Add to Your Library"}{" "}
          </MenuItem>
          <MenuItem
            display="flex"
            alignItems="center"
            fontSize="13px"
            backgroundColor="transparent"
            icon={<IosShareIcon />}
          >
            Copy Link{" "}
          </MenuItem>
          <MenuItem
            fontSize="13px"
            backgroundColor="transparent"
            icon={<PlayCircleIcon />}
          >
            Open Closed Tab
          </MenuItem>
        </MenuList>
      </Menu>{" "}
    </div>
  );
}
