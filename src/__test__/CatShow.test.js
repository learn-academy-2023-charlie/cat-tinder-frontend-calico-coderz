import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import CatShow from '../pages/CatShow';
import mockCats from '../mockCats'

describe("<CatShow />", () => {
  it("renders a name", () => {
    render (
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats}/>} />
        </Routes>
      </MemoryRouter>
    )
    screen.logTestingPlaygroundURL()
    const catName = screen.getByRole('heading', {
      name: /winston/i
    })
    expect(screen.getByText(/winston/i)).toBeInTheDocument("Winston")
  })
}) 