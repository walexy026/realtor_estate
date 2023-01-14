import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "10212a606fmsh897dd7bddc49468p19b9bdjsn4b2297a44288",
      // "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
// console.log(process.env.NEXT_PUBLIC_RAPID_API_KEY);
