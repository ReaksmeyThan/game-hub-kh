import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow="hidden">
      <Image src={game.background_image} height={"100% "} />
      <CardBody
        position={"absolute"}
        bottom={"0px"}
        width={"100%"}
        bgGradient="linear( transparent, gray.500)"
        paddingBottom={1}
      >
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
