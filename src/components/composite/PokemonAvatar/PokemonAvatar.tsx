import React from 'react';
import { Avatar } from 'src/components/shared/Avatar';

type TProps = {
  img: string;
};

const PokemonAvatar = ({ img }: TProps) => {
  return <Avatar img={img} />;
};

export default PokemonAvatar;
