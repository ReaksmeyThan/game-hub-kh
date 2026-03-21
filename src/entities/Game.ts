import { Platform } from "@/entities/Platform";


export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  released: string;
  meteoritic: number;
  rating: number;
  parent_platforms: { platform: Platform; }[];
  description?: string;
  trailer_url?: string;
  tags?: string[];
  reviews_count?: number;
  is_free?: boolean;
}
