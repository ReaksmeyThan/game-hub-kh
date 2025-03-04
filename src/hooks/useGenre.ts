import useGenres from "./useGenres";

function useGenre(id?: number) {
  const { data } = useGenres();
  return data?.results.find((g) => g.id === id);
}

export default useGenre;
