import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #e6e6e6;
  border: none;
  width: ${({ width }) => width || "220px"};
  height: 47px;
  font-family: "Montserrat";
  text-transform: uppercase;
  border-radius: 50px;
  font-weight: 600;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #ffd82b;
      width: 105px;
      height: 30px;
      font-size: 10px;
      font-weight: 400;
    `}
`;

export default Button;
