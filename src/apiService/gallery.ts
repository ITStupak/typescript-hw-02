import axios from "axios";
import { ResponseData } from "../types";

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
    client_id: "w0W1iDhQU6pJEqIKsgaiN1XMkhILDbyZJWmzzb4oJMY",
    orientation: "landscape",
    per_page: 15,
};

export const getPhotos = async (query: string, page: number): Promise<ResponseData> => {
    const {data} = await axios.get<ResponseData>(`search/photos?query=${query}&page=${page}`);
    return data;
}