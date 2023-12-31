export const capitalizeEachWords = (string) => {
  const words = string?.split(" ");
  const word = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return word;
};
