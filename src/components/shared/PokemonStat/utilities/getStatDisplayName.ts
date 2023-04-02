import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';

export const getStatDisplayName = (statName: string) => {
  const statParts = statName.split('-');
  const [firstWord, secondWord] = statParts;

  if (firstWord.length === 2) {
    return firstWord.toUpperCase();
  }

  if (statParts.length === 2) {
    return `${capitalizeFirstLetter(firstWord)} ${secondWord}`;
  }

  return `${capitalizeFirstLetter(firstWord)}`;
};
