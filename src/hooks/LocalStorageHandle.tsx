function LocalStorageHandle() {
  const getAccessToken = localStorage.getItem("access_token");
  const getUserID = localStorage.getItem("user_id");

  const accessToken = (): string | null => localStorage.getItem("access_token");
  return {
    getAccessToken,
    getUserID,
    accessToken,
  };
}

export default LocalStorageHandle;
