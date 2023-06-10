import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const CatNew = ({ createCat }) => {

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    hobbies: "",
    image: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return(
    <>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={newCat.name} />
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="text" name="age" onChange={handleChange} value={newCat.age} />
        </FormGroup> 

        <FormGroup>
          <Label for="hobbies">Hobbies</Label>
          <Input type="text" name="hobbies" onChange={handleChange} value={newCat.hobbies} />
        </FormGroup> 

        <FormGroup>
          <Label for="image">Picture</Label>
          <Input type="text" name="image" onChange={handleChange} value={newCat.image} />
        </FormGroup>

          <Button color="primary" onClick={handleSubmit} name="submit">
            Submit New Cat
          </Button>
          
        </Form>
    </>
)}




export default CatNew