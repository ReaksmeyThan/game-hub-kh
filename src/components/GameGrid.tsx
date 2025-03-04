import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeleton = Array.from({ length: data?.pages[0].results.length ?? 20 }, (_, index) => index + 1);

  const fectchedGameCount = data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;
  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding={5}>
      <InfiniteScroll
        dataLength={fectchedGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={isFetchingNextPage && <LoaderSkeleton />}
        scrollableTarget="scrollableDiv"
      >
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 5 }} spacing={3}>
          {isLoading &&
            skeleton.map((index) => (
              <GameCardContainer key={index}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {!isLoading &&
            data?.pages.map((page) => (
              <React.Fragment key={page.next}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

const LoaderSkeleton = () => (
  <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 5 }} spacing={3} marginTop={3}>
    {Array.from({ length: 6 }, (_, index) => (
      <GameCardContainer key={index}>
        <GameCardSkeleton />
      </GameCardContainer>
    ))}
  </SimpleGrid>
);

export default GameGrid;
