import axios from 'axios';

// const local = "http://localhost:5000/"
const prod = "https://backend.jaiwin.co.in/"

const api = axios.create({
  baseURL: prod,
});

const makeRequest = async (method, url, data = null, authenticate = true) => {
  try {
    const headers = {};
    const response = await api({
      method,
      url,
      data,
      headers,
    });

    return response.data.message;
  } catch (error) {

    return "Something Went Wrong, Please Try Again."
  }
};
export default makeRequest