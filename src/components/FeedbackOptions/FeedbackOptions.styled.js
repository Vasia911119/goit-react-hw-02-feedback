import styled from 'styled-components';

export const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: green;
  background-color: rgb(126, 230, 117);
  border: none;
  outline: none;
  border-radius: 8px;
  width: 120px;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: white;
    background-color: rgb(63, 131, 54);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
