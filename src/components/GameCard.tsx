import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import { Card, CardBody, Heading, HStack, Image, Popover, PopoverTrigger, PopoverContent, Box } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
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
              <Heading fontSize={"2lg"}>{game.name}</Heading>
              <HStack justifyContent={"space-between"}>
                <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
                <CriticScore score={game.metacritic} />
              </HStack>
            </CardBody>
          </Card>
        </Box>
      </PopoverTrigger>
      {/* <PopoverContent>
        <PopoverBody>
          <Heading size="md" mb={2}>{game.name}</Heading>
    
          <Box mb={2}>
            <video width="100%" autoPlay muted loop>
              <source src={game.trailer_url || "https://www.w3schools.com/html/mov_bbb.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box>
 
            <p>{game.description || "No description available."}</p>
          </Box>
        </PopoverBody>
      </PopoverContent>
      */}

      <PopoverContent maxW="500px" borderRadius="lg" overflow="hidden" bg="gray.800" color="white" boxShadow="xl" p={0}>
        <Box position="relative" w="100%" h="220px" bg="black">
          <video
            width="100%"
            height="220"
            autoPlay
            muted
            loop
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            poster={getCroppedImageUrl(game.background_image)}
          >
            <source src={game.trailer_url || "https://www.w3schools.com/html/mov_bbb.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Free to Play badge (optional) */}
          {game.is_free && (
            <Box position="absolute" top="12px" right="16px" bg="blue.500" px={3} py={1} borderRadius="md" fontWeight="bold" fontSize="sm">
              Free To Play
            </Box>
          )}
        </Box>
        {/* Thumbnail and title overlay */}
        <Box
          position="absolute"
          left="16px"
          top="200px"
          bg="gray.500"
          borderRadius="md"
          boxShadow="lg"
          display="flex"
          alignItems="center"
          p={2}
          zIndex={2}
          width="320px"
        >
          <Image
            src={getCroppedImageUrl(game.background_image)}
            boxSize="80px"
            borderRadius="md"
            mr={3}
            border="2px solid white"
            objectFit="cover"
          />
          <Box>
            <Heading size="md" color="white" mb={1}>{game.name}</Heading>
            {/* You can add more info here if needed */}
          </Box>
        </Box>
        <Box pt={100} pb={4} px={5}>

          {/* Tags */}
          {/* <HStack spacing={2} mb={2} flexWrap="wrap">
            {game.tags?.slice(0, 6).map((tag: any) => (
              <Box key={tag.id} bg="gray.700" px={2} py={0.5} borderRadius="md" fontSize="xs">
                {tag.name}
              </Box>
            ))}
          </HStack> */}
          {/* Reviews */}
          <HStack spacing={2} mb={2} flexWrap="wrap">
            {game.parent_platforms.map((platform) => (
              <Box key={platform.platform.id} bg="gray.700" px={2} py={0.5} borderRadius="md" fontSize="xs">
                {platform.platform.name}
              </Box>
            ))}
          </HStack>
          <Box mb={1} color="green.300" fontWeight="bold" fontSize="sm">
            {/* Example: Very Positive 17,131 User Reviews */}
            {game.rating || "Very Positive"} {game.reviews_count && `${game.reviews_count.toLocaleString()} User Reviews`}
          </Box>
          {/* Release Date */}
          <Box color="gray.400" fontSize="sm">
            <span role="img" aria-label="calendar"></span> {game.released || "Unknown Release Date"}
          </Box>
          {/* Description (optional) */}
          <Box mt={3} color="gray.300" fontSize="sm" noOfLines={3}>
            {game.description || " that disables the Windows key to prevent interruptions while gami."}
          </Box>
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default GameCard;