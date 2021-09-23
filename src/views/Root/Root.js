import React from "react";
import styled from "styled-components";
import Button from "components/Button/Button";
import GlobalStyle from "theme/GlobalStyle";

const MyButton = styled.button`
  color: red;
`;

const Root = () => (
  <div>
    <GlobalStyle/>
    <MyButton>XD</MyButton>
    <Button width="500px">Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
