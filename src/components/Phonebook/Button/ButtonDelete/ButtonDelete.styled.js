import styled from '@emotion/styled';

const ButtonDeleteStyle = styled.button`
  margin-left: 10px;
  background-color: black;
  color: white;
  border-radius: 5%;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;

  &: hover {
    background-color: white;
    color: black;
  }
`;

export default ButtonDeleteStyle;
