import React from 'react';

import { Container } from './styles';

interface LegendProps {
  title: string;
  description?: string;
}

const Legend: React.FC<LegendProps> = ({ title, description }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </Container>
  );
};
export default Legend;
