import * as React from "react"
import { MainContainer } from "../styles/main.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme.styled"
// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <main>
          <title>Home Page</title>
          <h1>Hello World</h1>
        </main>
      </MainContainer>
    </ThemeProvider>
  )
}

export default IndexPage
