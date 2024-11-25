import axios from "axios";

const url = "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api";

export function getBooks() {
  return axios.get(`${url}/books`, {
    headers: {
      Authorization: "Bearer 12118907",
    },
  });
}

export default { getBooks };
