function UseTruncateText() {
  const truncateText = (text: string, maxWords: number) => {
    if (text) {
      const words = text.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return text;
    }
  };
  return {
    truncateText,
  };
}

export default UseTruncateText;
