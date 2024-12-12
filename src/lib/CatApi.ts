import axios, { AxiosResponse } from 'axios';

const fetchCatData = async (): Promise<{ catImage: string; catFact: string } | null> => {
  try {
    
    // Cat fact API (ninja)

    const response: AxiosResponse = await axios.get(`https://catfact.ninja/facts/?page=${Math.floor(Math.random() * 34)}`);
    const catFact: string = response?.data?.data[Math.floor(Math.random() * 10)]?.fact;

    // Image API
    const catImageResponse: AxiosResponse = await axios.get(`https://api.thecatapi.com/v1/images/search`);
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