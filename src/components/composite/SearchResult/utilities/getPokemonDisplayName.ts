import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';

export const getPokemonDisplayName = (rawName: string) => {
  const nameParts = rawName.split('-');

  return nameParts.map((n) => capitalizeFirstLetter(n)).join(' ');
};
