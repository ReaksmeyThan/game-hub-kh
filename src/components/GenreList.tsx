import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreID?: number;
}
const GenreList = ({ selectedGenreID, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3} color={"yellow.500"}>
        Genre
      </Heading>
      <List>
        {data?.results.map((g) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image alt={g.name} boxSize={"42px"} borderRadius={"8px"} objectFit={"cover"} src={getCroppedImageUrl(g.image_background)} />
              <Button
                fontSize={"lg"}
                variant={"link"}
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => {
                  onSelectedGenre(g);
                }}
                colorScheme={selectedGenreID === g.id ? "yellow" : "gray"}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
