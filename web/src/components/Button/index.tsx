import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps {
  icon: React.ComponentType<IconBaseProps>;
  message: string;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, message }) => {
  return (
    <Container>
      <span>
        <Icon />
      </span>
      <strong>{message}</strong>
    </Container>
  );
};

export default Button;
