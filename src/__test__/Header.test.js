import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })

  it("renders with text", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    const headerText = screen.getByText(/cat tinder/i)
    expect(headerText).toBeInTheDocument()
  })
})


export default Header