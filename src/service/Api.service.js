import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: '50'

  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key':'39a1f67cc8msh6640b49555f0a6bp163c03jsn434dc0272f54'    ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const ApiService = {
  async fetching (url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data
  },
}