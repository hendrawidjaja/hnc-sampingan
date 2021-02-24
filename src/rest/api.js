import axios from "axios";

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesURL = `${baseURL}newstories.json`;
export const topStoriesURL = `${baseURL}topstories.json`;
export const bestStoriesURL = `${baseURL}beststories.json`;
export const storyURL = `${baseURL}item/`;
export const getStory = async (id) => {
  const result = await axios
    .get(`${storyURL + id}.json`)
    .then(({ data }) => data);
  return result;
};

export const getStoryIds = async () => await axios.get(newStoriesURL);
