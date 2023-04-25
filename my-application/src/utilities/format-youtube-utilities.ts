export const getVideoID = (url: string): string | undefined => {
  const queryString = url.split("?")[1];
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("v") ?? undefined;
  }
  return undefined;
};
