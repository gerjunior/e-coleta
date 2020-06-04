import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--title-color);
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
      color: var(--primary-color);
    }
  }
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
  }

  &.field-check {
    flex-direction: row;
    align-items: center;
  }

  &.field-check input[type='checkbox'] {
    background: #f0f0f5;
  }

  &.field-check label {
    margin: 0 0 0 8px;
  }

  button {
    width: 260px;
    height: 56px;
    background: var(--primary-color);
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  button:hover {
    background: #2fb86e;
  }
`;

export const Fieldset = styled.fieldset`
  margin-top: 64px;
  min-inline-size: auto;
  border: 0;

  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;

  input + input {
    margin-left: 24px;
  }
`;

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    &.selected {
      background: #e1faec;
      border: 2px solid #34cb79;
    }

    span {
      flex: 1;
      margin-top: 12px;
      display: flex;
      align-items: center;
      color: var(--title-color);
    }
  }
`;
