import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import CatIndex from '../pages/CatIndex';
import mockCats from '../mockCats'

describe("<CatIndex />", () => {
  it ("has a heading", () => {
   render (
    <BrowserRouter>
      <CatIndex cats={mockCats}/>
    </BrowserRouter>
   )
   screen.logTestingPlaygroundURL()
   mockCats.forEach((cat) => {
    const allCats = screen.getAllByAltText(/image of /i)
    screen.debug(allCats[0]) 
    expect (allCats[0]).toBeInTheDocument()
   })
  })
})