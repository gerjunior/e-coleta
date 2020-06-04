import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  id,
  label,
  children,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={id} {...rest}>
        {children}
      </select>
    </Container>
  );
};

export default SelectInput;
