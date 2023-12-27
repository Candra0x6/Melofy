import { Box, Button, FormControl, IconButton, Input } from "@chakra-ui/react";
import WestIcon from "@mui/icons-material/West";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const urlParam = new URLSearchParams(window.location.search);
  const getCode: string | null = urlParam.get("code") ?? "";
  localStorage.setItem("code", getCode);

  const codeAuth: string = localStorage.getItem("code") ?? "";
  const clientSecret = "4c8149cb463e42e18020b74151e64283";
  const clientId = "f79a68fe2a394b309c095317e1036c9e";
  const redirectUrl = "http://localhost:5173/login";

  const getUserAccessToken = async () => {
    try {
      const authHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;

      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          code: codeAuth,
          redirect_uri: redirectUrl,
        }),
        {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const AccessToken: string = response.data.access_token;
      const RefreshToken: string = response.data.refresh_token;
      localStorage.setItem("access_token", AccessToken);
      localStorage.setItem("refresh_token", RefreshToken);
      window.location.href = `/`;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center font-poppins">
      <div className="container mx-2">
        <div className="flex flex-col">
          <div className="mt-5">
            <Link to={`/welcome`}>
              <IconButton
                aria-label="Backk"
                bgColor="transparent"
                icon={<WestIcon fontSize="large" />}
              />
            </Link>
          </div>
          <div className="">
            <h1 className="font-semibold text-[35px] py-7">
              Ayy, <br /> Welcome <br /> Back
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
                  type="email"
                  textColor="#4E4E4E"
                  placeholder={`        Password`}
                />
                <LockIcon className="absolute left-4 text-[#4e4e4eb0]" />
              </Box>
              <Button
                variant="link"
                display="flex"
                className="text-normal"
                w="full"
                fontWeight="normal"
              >
                Forget Password?
              </Button>
              <Button
                w="full"
                bgColor="#373739"
                border="2px"
                borderColor="#424E52"
                marginTop="40px"
                textColor="white"
                rounded="full"
                fontWeight="normal"
                onClick={getUserAccessToken}
              >
                Login
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
