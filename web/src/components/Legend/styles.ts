import styled from 'styled-components';

export const Container = styled.legend`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
  }

  span {
    font-size: 14px;
    font-weight: normal;
    color: var(--text-color);
  }
`;
