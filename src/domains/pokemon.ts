import { Nullable } from '@/globalTypes';

export interface Pokedex {
  count: number;
  next: Nullable<string>;
  previous: Nullable<string>;
  results: PokeApiBasicData[];
}

export interface PokeApiBasicData {
  name: string;
  url: string;
}

export interface PokemonData {
  abilities: {
    ability: PokeApiBasicData;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: PokeApiBasicData[];
  game_indices: { game_index: string; version: PokeApiBasicData }[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: PokeApiBasicData;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: PokeApiBasicData;
      version_group: PokeApiBasicData;
    }[];
  }[];
  name: string;
  order: number;
  species: PokeApiBasicData;
  sprites: {
    back_default: Nullable<string>;
    back_female: Nullable<string>;
    back_shiny: Nullable<string>;
    back_shiny_female: Nullable<string>;
    front_default: Nullable<string>;
    front_female: Nullable<string>;
    front_shiny: Nullable<string>;
    front_shiny_female: Nullable<string>;
    other: {
      dream_world: {
        front_default: Nullable<string>;
        front_female: Nullable<string>;
      };
      home: {
        front_default: Nullable<string>;
        front_female: Nullable<string>;
        front_shiny: Nullable<string>;
        front_shiny_female: Nullable<string>;
      };
    };
    versions: {
      [key: string]: {
        [key: string]: Nullable<string>;
      };
    };
  };
  stats: { base_stat: number; effort: number; stat: PokeApiBasicData }[];
  types: { slot: number; type: PokeApiBasicData }[];
  past_types: unknown;
  held_items: unknown;
}
