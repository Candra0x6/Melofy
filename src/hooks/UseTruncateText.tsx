function UseTruncateText() {
  const truncateText = (text: string) => {
    const maxWords = 30;
    if (text) {
      {
        if (text.length > maxWords) {
          return text.slice(0, maxWords) + "...";
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
