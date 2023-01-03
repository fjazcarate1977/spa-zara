import axios, { AxiosResponse, AxiosError } from 'axios';

export const getPodcastData = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    const res = await axios.get(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    );
    return res;
  } catch (error) {
    return error as AxiosError;
  }
};
