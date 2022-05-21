import * as React from "react"
import { MainContainer } from "../styles/main.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme.styled"
import { Main } from "./main/main"
import "../styles/global.scss"
// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Main>
        </Main>
      </MainContainer>
    </ThemeProvider>
  )
}

export default IndexPage
