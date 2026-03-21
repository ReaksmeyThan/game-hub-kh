import { Screenshot } from "@/entities/Screenshot";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Props {
    id: number;

}

const useScreenShots = ({ id }: Props) => {
    const apiClient = new ApiClient<Screenshot>(`/games/${id}/screenshots`);

    return useQuery({

        queryKey: ["screenshots", id],
        queryFn: apiClient.getAll,
    });
}



export default useScreenShots;