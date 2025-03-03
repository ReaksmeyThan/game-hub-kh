import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import RatingGame from "./RatingGame";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} height={"100%"} />
      <RatingGame rating={game.rating} />
      <CardBody position={"absolute"} bottom={"0px"} width={"100%"} bgGradient="linear( transparent, gray.500)" paddingBottom={1}>
        <Heading fontSize={"2lg"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
