import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
    client_id: "w0W1iDhQU6pJEqIKsgaiN1XMkhILDbyZJWmzzb4oJMY",
    orientation: "landscape",
    per_page: 15,
};

export interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

interface ResponseData {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const getPhotos = async (query: string, page: number): Promise<ResponseData> => {
    const {data} = await axios.get<ResponseData>(`search/photos?query=${query}&page=${page}`);
    return data;
}