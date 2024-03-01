import { Box, Button, FormControl, IconButton, Input } from "@chakra-ui/react";
import WestIcon from "@mui/icons-material/West";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function Signup() {
  const clientId = "f79a68fe2a394b309c095317e1036c9e";
  const redirectUrl = "http://localhost:5173/login";
  const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-email",
    "user-read-private",
    "user-library-modify",
    "user-library-read",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
    "user-follow-modify",
    "user-follow-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "ugc-image-upload",
  ];

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=code&show_dialog=true`;

  const getAuth = () => {
    window.location.href = authUrl;
  };

  return (
    <div className="flex justify-center font-poppins">
      <div className="container mx-2">
        <div className="flex flex-col">
          <div className="mt-5">
            <Link to={`/`}>
              <IconButton
                aria-label="Backk"
                bgColor="transparent"
                icon={<WestIcon fontSize="large" />}
              />
            </Link>
          </div>
          <div className="">
            <h1 className="font-semibold text-[35px] py-7">
              Let's, <br /> Become <br /> Homies
            </h1>
          </div>
          <div className="font-poppins">
            <FormControl fontFamily="">
              <Box display="flex" alignItems="center">
                <Input
                  border="2px"
                  borderColor="#AAC3CC"
                  bgColor="#E2F4FA"
                  className="bg-[#AAC3CC]"
                  rounded="full"
                  type="email"
                  textColor="#4E4E4E"
                  placeholder={`        Email`}
                />
                <MailOutlineIcon className="absolute left-4 text-[#4e4e4eb0]" />
              </Box>
              <Box display="flex" marginY="15px" alignItems="center">
                <Input
                  border="2px"
                  borderColor="#AAC3CC"
                  bgColor="#E2F4FA"
                  className="bg-[#AAC3CC]"
                  rounded="full"
                  type="password"
                  textColor="#4E4E4E"
                  placeholder={`        Password`}
                />
                <LockIcon className="absolute left-4 text-[#4e4e4eb0]" />
              </Box>
              <Box display="flex" marginY="15px" alignItems="center">
                <Input
                  border="2px"
                  borderColor="#AAC3CC"
                  bgColor="#E2F4FA"
                  className="bg-[#AAC3CC]"
                  rounded="full"
                  type="password"
                  textColor="#4E4E4E"
                  placeholder={`        Confirm Password`}
                />
                <LockIcon className="absolute left-4 text-[#4e4e4eb0]" />
              </Box>
              <Button
                w="full"
                bgColor="#373739"
                border="2px"
                borderColor="#424E52"
                marginTop="40px"
                textColor="white"
                rounded="full"
                fontWeight="normal"
                onClick={getAuth}
              >
                Sign Up
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
