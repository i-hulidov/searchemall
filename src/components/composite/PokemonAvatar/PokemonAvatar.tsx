import React from 'react';
import { Avatar } from 'src/components/shared/Avatar';

type TProps = {
  img: string;
  name: string;
};

const PokemonAvatar = ({ img, name }: TProps) => {
  return <Avatar img={img} name={name} />;
};

export default PokemonAvatar;
