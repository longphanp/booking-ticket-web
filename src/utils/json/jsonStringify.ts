export const jsonStringify = (value: any, replacer?: any) => {
  try {
    return JSON.stringify(value, replacer);
  } catch (error) {
    return "";
  }
};
