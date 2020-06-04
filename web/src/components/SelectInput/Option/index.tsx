import React from 'react';

interface OptionProps {
  value: string;
  description: string;
}

const Option: React.FC<OptionProps> = ({ value, description }) => {
  return (
    <>
      <option value={value}>{description}</option>
    </>
  );
};

export default Option;
