export interface iProps{
    findPokemon?: (data: string) => void,
    pokemons?: iPokemon[]
    pokemon?: iPokemonFound
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
  name: string;
  height: number;
  weight: number;
  sprites: string;
  stats: Array<status>;
  types: Array<type>
}

export interface iStyledProps {
  fontSize: number | undefined
}
