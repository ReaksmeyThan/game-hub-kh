import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreID);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformID);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""}${"  Games"}`;
  return (
    <Heading as={"h1"} color={"yellow.500"} fontSize={"5xl"} marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
