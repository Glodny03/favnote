import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";

// CONTEXT API POZWALA NA PRZENOSZENIE DANYCH/FUNKCJI PO CALEJ APLIKACJI

const Root = () => (
  <div>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Roman</h1>
        <Button secondary width="500px">
          Close / Save
        </Button>
        <Input search />
        <ButtonIcon>Note</ButtonIcon>
        <Button>Remove</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
