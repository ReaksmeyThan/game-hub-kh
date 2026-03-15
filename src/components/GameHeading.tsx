import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const genre = useGenre(genreID);
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const platform = usePlatform(platformID);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""}${"  Games"}`;
  return (
    <Heading as={"h1"} color={"yellow.500"} fontSize={"5xl"} marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
