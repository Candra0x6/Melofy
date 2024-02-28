import axios from "axios";
import { FromData, INITIAL_DATA } from "../init";
import LocalStorageHandle from "../hooks/LocalStorageHandle";
import { FormEvent, useState } from "react";
import { useToast } from "@chakra-ui/react";

interface PropsModalActive {
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function UseUserCreatePlaylist({ setVisibleModal }: PropsModalActive) {
  const [data, setData] = useState(INITIAL_DATA);
  const { getAccessToken, getUserID } = LocalStorageHandle();
  const toast = useToast();
  //   Fetch data from api
  const UserCreatePlaylist = async () => {
    try {
      const fetch = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BASE_URL
        }/users/${getUserID}/playlists`,
        {
          name: data.name,
          description: data.description,
          public: data.public,
        },
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      axios.put(
        `https://api.spotify.com/v1/playlists/${fetch.data.id}/images`,
        data.imageBase64,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
            "Content-Type": "image/jpeg",
          },
        }
      );
      toast({
        title: "Playlist created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setVisibleModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  //   func  for submit
  const CreatePlaylistMethod = async (e: FormEvent) => {
    e.preventDefault();
    UserCreatePlaylist();
  };

  //   validation image input
  const UpdateFields = (fields: Partial<FromData>) => {
    if (fields.image?.size) {
      if (!fields.image.type.startsWith("image/")) {
        alert("must be image");
      } else if (fields.image.size > 250000) {
        alert("must be less than 250kb");
      } else {
        setData({ ...data, ...fields });
      }
    }

    // update field imagebase64
    if (fields.image) {
      const reader = new FileReader();
      setData({ ...data, previewUrl: URL.createObjectURL(fields.image) });
      reader.onload = () => {
        const base64String = reader.result as string;
        const parts = base64String.split(",");
        setData((prevData) => ({ ...prevData, imageBase64: parts[1] }));
      };

      reader.readAsDataURL(fields.image);
    }

    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };
  return {
    data,
    UpdateFields,
    CreatePlaylistMethod,
  };
}

export default UseUserCreatePlaylist;
