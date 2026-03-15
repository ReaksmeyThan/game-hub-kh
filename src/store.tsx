import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;

  setSearchText: (search: string) => void;
  setGenreID: (genreID: number) => void;
  setPlatformID: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSearchText: (search) => set(() => ({ gameQuery: { search } })),
  setGenreID: (genreID) => set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
  setPlatformID: (platformID) => set((store) => ({ gameQuery: { ...store.gameQuery, platformID } })),
  setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
