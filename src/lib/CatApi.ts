import axios, { AxiosResponse } from 'axios';

const fetchCatData = async (): Promise<{ catImage: string; catFact: string } | null> => {
  try {

    // Start fetching parallel to improve performance
    const [catFactResponse, catImageResponse] = await Promise.all([
      axios.get(`https://catfact.ninja/facts/?page=${Math.floor(Math.random() * 34)}`),
      axios.get(`https://api.thecatapi.com/v1/images/search`),
    ]);

    // facts
    const catFact: string = catFactResponse?.data?.data[Math.floor(Math.random() * 10)]?.fact;

    // Image API
    const catImageURL = catImageResponse?.data[0]?.url;

    return {
      catImage: catImageURL,
      catFact,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchCatData };