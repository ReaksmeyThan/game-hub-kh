import ApiClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  meteoritic: number;
  rating: number;
  parent_platforms: { platform: Platform }[];
  description?: string;
  trailer_url?: string;
  tags?: string[];
  reviews_count?: number;
  is_free?: boolean;
}
const apiClient = new ApiClient<Game>("/games");

const useGames = () => {

  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
   staleTime: ms("24h"), // 24 hours
  });
}
  

export default useGames;
