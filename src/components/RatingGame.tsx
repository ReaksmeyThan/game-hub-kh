import { HStack } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const RatingGame = ({ rating }: Props) => {
  const FullStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const EmptyStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const stars = Array.from({ length: 5 }, (_, index) => index + 1).map((i) => (rating >= i ? FullStarIcon() : EmptyStarIcon()));
  return (
    <HStack width={"100px"} position={"absolute"} top={"0px"} right={"0px"} color={"yellow"} padding={1}>
      {stars}
    </HStack>
  );
};

export default RatingGame;
