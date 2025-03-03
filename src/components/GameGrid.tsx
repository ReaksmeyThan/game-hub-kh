import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeleton = Array.from({ length: data?.pages[0].results.length ?? 20 }, (_, index) => index + 1);

  console.log(" hello: ", skeleton);
  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding={"10px"}>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 6 }} spacing={3}>
        {isLoading &&
          skeleton.map((index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {!isLoading &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={5}
          onClick={() => {
            fetchNextPage();
          }}
        >
          {isFetchingNextPage ? "Loading ..." : "Load more"}{" "}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
