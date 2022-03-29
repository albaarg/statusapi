import axios from "axios";

export function call(endpoint) {
 return axios.get(endpoint);
}