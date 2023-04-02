import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export const getDisplayName = (rawName: string) => {
  const nameParts = rawName.split('-');

  return nameParts.map((n) => capitalizeFirstLetter(n)).join(' ');
};
