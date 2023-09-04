import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { Photo } from '../types';

export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

interface ApiResponse {
  data?: Photo[];
  error?: any;
}
export const getAllPhotos = async (): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}photos?limit=10`,
    );
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};
