import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import CatNew from '../pages/CatNew';


describe("<CatNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )
      screen.logTestingPlaygroundURL()

  })
  it("renders the cat new page", () => {
    const element =screen.getByRole('button', {name: /submit new cat/i})
    expect(element).toBeInTheDocument()
  })

})