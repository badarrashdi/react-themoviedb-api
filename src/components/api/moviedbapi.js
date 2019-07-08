import axios from 'axios';

const apiKey = 'd547ee30f07b5fa5f6c5a2f0f099e635'
export default axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`,
 
});