import axios from "axios";
import { API_KEY_PARAM, BASE_URL } from "../config";



export class TVShowAPI{
    

    static async fetchPopular(){
        const resp = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        return resp.data.results;
    }
    static async fetchRecommendations(tvShowId){
         const resp = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
         return resp.data.results;
    }
    static async fetchByTitle(title){
        const resp = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`)
        return resp.data.results;
   }
    
}