import Game from "@/entities/Game";
import useGame from "@/hooks/useGame";
import useTrailers from "@/hooks/useTrailers";
import getCroppedImageUrl from "@/services/image-url";
import { Box, Heading, HStack, Image, PopoverContent, Spinner } from "@chakra-ui/react";

import { ExpandableText } from "./ExpandableText";

interface Props {
  id: number;
  game: Game;
}

export const GameDetailCard = ({ id, game }: Props) => {
  const { data, error, isLoading } = useTrailers(id);
  const first = data?.results[0];

  const { data: gameData } = useGame(game.slug);

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <PopoverContent maxW="600px" w="auto" h="auto" borderRadius="lg" overflow="hidden" bg="gray.800" color="white" boxShadow="xl" p={0}>
      {/* video  */}
      <Box position="relative" w="100%" h="400px" bg="black">
        <video
          width="auto"
          height="400px"
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          poster={getCroppedImageUrl(game.background_image)}
        >
          <source src={first?.data[480]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Free to Play badge (optional) */}
        {!game.is_free && (
          <Box position="absolute" top="12px" right="16px" bg="blue.500" px={3} py={1} borderRadius="md" fontWeight="bold" fontSize="sm">
            Free To Play
          </Box>
        )}
      </Box>
      {/* Thumbnail and title overlay */}
      <Box
        position="absolute"
        left="16px"
        top="350px"
        bg="gray.500"
        borderRadius="md"
        boxShadow="lg"
        display="flex"
        alignItems="center"
        p={2}
        zIndex={2}
        width="320px"
      >
        <Image src={getCroppedImageUrl(game.background_image)} boxSize="80px" borderRadius="md" mr={3} border="2px solid white" objectFit="cover" />
        <Box>
          <Heading size="md" color="white" mb={1}>
            {game.name}
          </Heading>
          {/* You can add more info here if needed */}
        </Box>
      </Box>
      <Box pt={100} pb={4} px={5}>
        <HStack spacing={2} mb={2} flexWrap="wrap">
          {game.parent_platforms.map((p: { platform: { id: number; name: string } }) => (
            <Box key={p.platform.id} bg="gray.700" px={2} py={0.5} borderRadius="md" fontSize="xs">
              {p.platform.name}
            </Box>
          ))}
        </HStack>
        <Box mb={1} color="green.300" fontWeight="bold" fontSize="sm">
          {/* Example: Very Positive 17,131 User Reviews */}
          {game.rating || "Very Positive"} {game.reviews_count && `${game.reviews_count.toLocaleString()} User Reviews`}
        </Box>
        {/* Release Date */}
        <Box color="gray.400" fontSize="sm">
          📅 {game.released || "Unknown Release Date"}
        </Box>
        {/* Description (optional) */}
        <Box mt={3} color="gray.300" fontSize="sm" noOfLines={3}>
          <ExpandableText>{`${gameData?.description_raw}`}</ExpandableText>
        </Box>
      </Box>
    </PopoverContent>
  );
};
