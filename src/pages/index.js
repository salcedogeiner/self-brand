import * as React from "react"
import { MainContainer } from "../styles/main.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme.styled"
import MainPage from "./main/main"
import "../styles/global.scss"
// markup
const IndexPage = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <MainPage>
          </MainPage>
        </MainContainer>
      </ThemeProvider>
    </main>
  )
}

export default IndexPage
