import platforms from "@/data/platforms";
import ApiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });

export default usePlatforms;
