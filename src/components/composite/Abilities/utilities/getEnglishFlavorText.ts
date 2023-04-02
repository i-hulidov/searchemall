import { TPokemonAbilityDetails } from 'src/types/Pokemons';

export const getEnglishFlavorText = (abilitiesDetails: TPokemonAbilityDetails) => {
  const englishFlavorTexts = abilitiesDetails.flavor_text_entries.filter((entry) => entry.language.name === 'en');

  if (englishFlavorTexts.length) {
    return englishFlavorTexts[0].flavor_text;
  }
  return '';
};
