import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { Comment } from '../types';
import { BASE_URL } from './photos';

interface ApiResponse {
  data?: Comment[];
  error?: any;
}

export const getPostComments = async (postId: number): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}comments?postId=${postId}`,
      );
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};
