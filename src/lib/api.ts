import axios, { AxiosResponse, AxiosError } from 'axios';

export const getPodcastData = async (
  url: string,
  cors?: boolean
): Promise<AxiosResponse | AxiosError> => {
  const allowCors = import.meta.env.VITE_API_ALLOW_CORS_URL as string;
  const urlReady = cors ? allowCors.concat(url) : url;

  try {
    const res = await axios.get(urlReady);
    return res;
  } catch (error) {
    return error as AxiosError;
  }
};
