export const hashtags = (text) => {
  const array = text.split(' ');
  return array.filter((word) => {
    return word.startsWith('#');
  });
}