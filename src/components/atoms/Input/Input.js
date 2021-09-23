import styled, { css } from "styled-components";

const Input = styled.input`
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 500;
  background-color: grey;
  font-weight: 600;

  ${({ search }) => search && css`
  padding: 10px 20px 10px 40px;
  font-size: 500;
  `}
`;

export default Input;
