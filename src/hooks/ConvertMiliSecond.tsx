function ConvertMiliSecond() {
  const convertMiliseconds = (value: number) => {
    const min = Math.floor((value / 1000 / 60) << 0);
    const sec = Math.floor((value / 1000) % 60);
    return `${min}:${sec}`;
  };
  return {
    convertMiliseconds,
  };
}

export default ConvertMiliSecond;
