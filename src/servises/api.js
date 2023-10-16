import axios from "axios";

const BASE_URL = "https://friday-13.vercel.app/api/deals";

export async function fetchDeals() {
  const response = await axios.get(BASE_URL);

  console.log("response: ", response);

  return response;
}
