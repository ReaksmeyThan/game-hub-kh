import { ExpandableText } from "@/components/ExpandableText";
import { GameAttributes } from "@/components/GameAttributes";
import { GameScreenShot } from "@/components/GameScreenShot";
import { GameTrailer } from "@/components/GameTrailer";

import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) return <p>Error: {error?.message}</p>;

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} padding={5}>
      <GridItem colSpan={1}>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem colSpan={1}>
        <GameTrailer gameId={game.id} />
        <GameScreenShot id={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
