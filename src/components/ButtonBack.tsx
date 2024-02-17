import { IconButton } from "@chakra-ui/react";
import { West } from "@mui/icons-material";

function ButtonBack() {
  return (
    <div className="flex justify-start p-2 absolute">
      <IconButton
        position="absolute"
        onClick={() => window.history.back()}
        aria-label="Backk"
        bgColor="#F7FCFE"
        zIndex="10"
        rounded="full"
        icon={<West sx={{ fontSize: 28 }} />}
      />
    </div>
  );
}

export default ButtonBack;
