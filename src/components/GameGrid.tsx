import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = Array.from({ length: data?.results.length ?? 20 }, (_, index) => index + 1);

  console.log(" hello: ", skeleton);
  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 6 }} spacing={3} padding={"10px"}>
      {isLoading &&
        skeleton.map((index) => (
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {!isLoading &&
        data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
