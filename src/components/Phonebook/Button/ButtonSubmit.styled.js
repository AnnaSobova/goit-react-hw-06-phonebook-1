import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  padding: 10px 15px;
  width: 30%;
  font-size: 16px;

  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 2%;
  cursor: pointer;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export default Button;
