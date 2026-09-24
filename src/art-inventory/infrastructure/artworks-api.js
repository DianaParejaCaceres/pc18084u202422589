import axios from "axios";
import { errorInterceptor } from "@/shared/infrastructure/error.interceptor.js";

const artApiUrl = import.meta.env.VITE_ART_API_URL;
const impressionismPath = import.meta.env.VITE_ART_IMPRESSIONISM_PATH;
const modernPath = import.meta.env.VITE_ART_MODERN_PATH;

const http = axios.create({
    baseURL: artApiUrl,});
http.interceptors.response.use(errorInterceptor.onResponse, errorInterceptor.onError);
export class ArtworksApi {
    getImpressionismArtworks = () => http.get(impressionismPath);
    getModernArtworks = () => http.get(modernPath);
}