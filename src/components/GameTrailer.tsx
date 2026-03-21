import useTrailer from "@/hooks/useTrailer";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const first = data?.results[0];

  return first ? <video src={first?.data[480]} poster={first?.preview} controls autoPlay /> : null;
};
