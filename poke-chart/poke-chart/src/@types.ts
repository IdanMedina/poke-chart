
export interface iHomeContext {
  findPokemon?: (data: string) => void;
  pokemons?: iPokemon[];
  pokemon?: iPokemonFound;
  setPokemon?: React.Dispatch<React.SetStateAction<iPokemonFound | undefined>>
}

export interface iHomeProviderProps {
  children: React.ReactNode;
}

export interface iPokemon {
  name: string;
  url: string;
}

type status = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type type = {
  type: {
    name: string;
  };
};

export type  ability = {
  ability: {
    name: string
  }
}

export interface iPokemonFound {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: string;
  stats: Array<status>;
  types: Array<type>;
  abilities: Array<ability>
}

export interface iStyledProps {
  fontSize: number | undefined;
}
