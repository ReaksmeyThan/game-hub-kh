import useScreenShots from "@/hooks/useScreenShots";

import { Img, SimpleGrid } from "@chakra-ui/react";

interface Props {
  id: number;
}

export const GameScreenShot = ({ id }: Props) => {
    const { data, error, isLoading } = useScreenShots({ id });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mt={4}>
            {data?.results.map((result) => (
                <Img key={result.id} src={result.image} alt="Game Screenshot" borderRadius={10} boxShadow="md" />
            ))}
        </SimpleGrid>
    );
};
