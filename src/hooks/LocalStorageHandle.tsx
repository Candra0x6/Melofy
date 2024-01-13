function LocalStorageHandle() {
  const getAccessToken = localStorage.getItem("access_token");
  return {
    getAccessToken,
  };
}

export default LocalStorageHandle;
