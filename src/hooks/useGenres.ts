import genres from "@/data/genres";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
