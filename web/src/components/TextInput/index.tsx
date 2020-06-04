import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  id,
  label,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={id} {...rest} />
    </Container>
  );
};

export default TextInput;
