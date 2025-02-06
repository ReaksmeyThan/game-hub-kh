//import useData from "./useData";

import Genres from "@/data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");  // load data from api
const useGenres = () => ({ data: Genres, isLoading: false, error: null }); // fixed data local

export default useGenres;
