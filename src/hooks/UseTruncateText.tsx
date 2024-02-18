function UseTruncateText() {
  const truncateText = (text: string, varchar: number) => {
    if (text) {
      {
        if (text.length > varchar) {
          return text.slice(0, varchar) + "...";
        } else return text;
      }
      return text;
    }
  };
  return {
    truncateText,
  };
}

export default UseTruncateText;
