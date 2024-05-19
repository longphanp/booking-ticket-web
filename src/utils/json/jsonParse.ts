export const jsonParse = (text: string) => {
  try {
    return JSON.parse(text);
  } catch (error) {}
};
