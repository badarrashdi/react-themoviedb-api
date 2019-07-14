import axios from 'axios';

const apiKey = 'API_KEY'
export default axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`,
 
});