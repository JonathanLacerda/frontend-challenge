import axios from "axios";

const api = async (route, param) => {
  const URL_LOCATION = `https://swapi.dev/api/${route}${(param ? param : '')}`;
  const { data } = await axios.get(URL_LOCATION)
  return data
};

export default api
