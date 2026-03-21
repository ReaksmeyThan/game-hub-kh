import useTrailers from "@/hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const first = data?.results[0];

  return first ? <video src={first?.data[480]} poster={first?.preview} controls autoPlay><track kind="captions" /></video> : null;
};
