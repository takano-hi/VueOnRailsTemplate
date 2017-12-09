import axios from 'axios';

const setToken = (params) => {
  const tags = document.getElementsByTagName("meta");
  for (let i=0; i<tags.length; i++) {
    if (tags[i].name === "csrf-token") {
      params.authenticity_token = tags[i].content;
      break;
    }
  }
  return params;
}

export default {
  get: (path, params = {}) => {
    return axios.get(path, { params });
  },
  post: (path, params = {}) => {
    return axios.post(path, setToken(params));
  },
  put: (path, params = {}) => {
    return axios.put(path, setToken(params));
  },
  delete: (path, params = {}) => {
    return axios.delete(path, { params: setToken(params) });
  },
}