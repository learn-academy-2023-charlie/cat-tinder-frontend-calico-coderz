import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatEdit from '../pages/CatEdit'


describe("<CatEdit />", () => {
  screen.logTestingPlaygroundURL()
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatEdit />
      </BrowserRouter>
    )

    })
    it("renders the cat edit page", () => {
      const element =screen.getByRole('button', {name: /submit updated cat/i})
      expect(element).toBeInTheDocument()
    })
  
  })