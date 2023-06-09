import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    )
  })
  it("renders with text", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    )
    const homeText = screen.getByText(/this page is the home/i)
    expect(homeText).toBeInTheDocument()
  })
})


export default Home