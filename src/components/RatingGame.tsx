import { HStack, Icon } from "@chakra-ui/react";
import { GiRoundStar } from "react-icons/gi";

interface Props {
  rating: number;
}
const RatingGame = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1).map((i) => (
    <span key={i}>{rating >= i ? <Icon as={GiRoundStar} /> : <Icon as={GiRoundStar} color={"gray"} />}</span>
  ));
  return (
    <HStack width={"auto"} position={"absolute"} top={"0px"} right={"0px"} color={"yellow"} padding={1}>
      {stars}
    </HStack>
  );
};

export default RatingGame;
