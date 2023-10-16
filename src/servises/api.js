import axios from "../const/axiosBaseUrl";

export async function fetchDeals() {
  const response = await axios.get(`/deals`);
  return response;
}
