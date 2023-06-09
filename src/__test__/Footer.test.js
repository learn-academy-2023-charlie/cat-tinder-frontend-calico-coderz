import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  })
  it("renders with text", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
    const footerText = screen.getByText(/cat tinder footer/i)
    expect(footerText).toBeInTheDocument()
  })
})


export default Footer