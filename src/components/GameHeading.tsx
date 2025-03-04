import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreID);
  const platform = usePlatform(gameQuery.platformID);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""}${"  Games"}`;
  return (
    <Heading as={"h1"} color={"yellow.500"} fontSize={"5xl"} marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
