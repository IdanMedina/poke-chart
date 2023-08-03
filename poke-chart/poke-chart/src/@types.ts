export interface iProps{
    findPokemon: (data: string) => void,
    pokemons: iPokemon[]
  }
  
export interface iPokemon {
    name: string;
    url: string
}

type status = {
  base_stat:number;
  stat: {
    name: string;
  }
}

type type = {
  type: {
    name:string
  }
}

export interface iPokemonFound {
  id:number;
  height: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      }
    }
  };
  stats: Array<status>;
  types: Array<type>
}