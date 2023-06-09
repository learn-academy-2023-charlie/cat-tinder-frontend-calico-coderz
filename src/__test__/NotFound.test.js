import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    )

  })
  it("renders with text", () => {
    const div = document.createElement("div")
    render (
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    )
    const notFoundText = screen.getByText(/this is the 404 page/i)
    expect(notFoundText).toBeInTheDocument()
  })
})


export default NotFound