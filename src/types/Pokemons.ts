export type TPokemon = {
  name: string;
  url: string;
};

export type TPokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type TPokemonType = {
  type: {
    name: string;
  };
};

export type TPokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
  is_hidden: boolean;
};

type TAbilityFlavorTextEntry = {
  flavor_text: string;
  language: {
    name: string;
  };
};

export type TPokemonAbilityDetails = {
  name: string;
  flavor_text_entries: TAbilityFlavorTextEntry[];
};

export type THeldItem = {
  item: {
    name: string;
    url: string;
  };
};

export type TPokemonDetails = {
  name: string;
  order: number;
  base_experience: number;
  height: number;
  weight: number;
  held_items: THeldItem[];
  abilities: TPokemonAbility[];
  sprites: {
    front_default: string;
  };
  stats: TPokemonStat[];
  types: TPokemonType[];
};
