import { IconButton } from "@chakra-ui/react";
import { West } from "@mui/icons-material";

function ButtonBack() {
  return (
    <div className="flex justify-start">
      <IconButton
        top="2"
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
