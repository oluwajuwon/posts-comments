export const truncateString = (str: string, length: number) => {
  if (str) {
    return str.length > length ? str.substr(0, length - 1) + '...' : str;
  }
};
