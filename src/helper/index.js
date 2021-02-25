export const sanitizeUrl = (url) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
};
