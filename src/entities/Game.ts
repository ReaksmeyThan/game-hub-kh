import { Platform } from "@/entities/Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  released: string;
  metacritic: number;
  rating: number;
  parent_platforms: { platform: Platform; }[];
  description?: string;
  trailer_url?: string;
  tags?: string[];
  reviews_count?: number;
  is_free?: boolean;
}
