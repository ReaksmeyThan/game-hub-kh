import Game from "@/entities/Game";
import getCroppedImageUrl from "@/services/image-url";
import { Box, Card, CardBody, Heading, HStack, Image, Popover, PopoverTrigger } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CriticScore from "./CriticScore";
import { GameDetailCard } from "./GameDetailCard";
import PlatformIconList from "./PlatformIconList";
import RatingGame from "./RatingGame";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Popover trigger="hover" placement="auto">
      <PopoverTrigger>
        <Box>
          <Card>
            <Image src={getCroppedImageUrl(game.background_image)} height={"100%"} />
            <RatingGame rating={game.rating} />
            <CardBody position={"absolute"} bottom={"0px"} width={"100%"} bgGradient="linear( transparent, gray.500)" paddingBottom={1}>
              <Heading fontSize={"2lg"}>
                <Link to={`/games/${game.slug}`}>{game.name}</Link>
              </Heading>
              <HStack justifyContent={"space-between"}>
                <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                <CriticScore score={game.metacritic} />
              </HStack>
            </CardBody>
          </Card>
        </Box>
      </PopoverTrigger>
      <GameDetailCard id={game.id} game={game} />
    </Popover>
  );
};

export default GameCard;
