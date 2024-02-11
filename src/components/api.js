import axios from "axios";

export const feach = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      client_id: "7O-sZhdzOl6nsN2tROhXit50lo1uGuCAGJhMEvRa-oE",
      per_page: 5,
      orientation: "squarish",
    },
  });
  return response.data;
};
