import { createPortal } from 'react-dom';

type TProps = {
  children: JSX.Element;
  wrapperId?: string;
};

export function ReactPortal({ children, wrapperId = 'modal' }: TProps) {
  const element = document.getElementById(wrapperId)!;

  return createPortal(children, element);
}
