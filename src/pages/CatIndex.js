import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const CatIndex = ({ cats }) => {
  return(
    <main className="cat-index-cards">
      {cats.map((cat, index) => {
      return (
        <>
          <Card
  style={{
    width: '18rem'
  }}
    key={index}>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"/>
  <CardBody>
    <CardTitle tag="h5">
      {cat.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6">
      age: {cat.age}
    </CardSubtitle>
    <NavLink to={`/catshow/${cat.id}`} className="nav-link">
      Click to see more details
    </NavLink>
  </CardBody>
</Card>
        </>
      )
})}    
    </main>
)
}




export default CatIndex