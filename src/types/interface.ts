export interface PokemonDetailsProps {
  url: string;
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Type {
  type: {
    name: string;
  };
}

export interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface PokemonDetailsType {
  sprites: {
    front_default: string;
  };
  name: string;
  order: number;
  base_experience: number;
  abilities: Ability[];
  types: Type[];
  stats: Stat[];
}

export interface PokemonListType {
  name: string;
  url: string;
}

export interface PokemonListProps {
  searchTerm: string;
}
