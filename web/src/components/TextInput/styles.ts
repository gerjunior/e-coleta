import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input[type='text'],
  input[type='email'],
  input[type='number'] {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  input::placeholder {
    color: #a0a0b2;
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  :disabled {
    cursor: not-allowed;
  }

  & + div {
    margin-left: 24px;
  }
`;
