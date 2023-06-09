import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import { Routes, Route } from "react-router-dom"
// import mockCats from "./mockCats"



const App = () => {
  const [cats, setCats] = useState([])
  const createCat = (cat) => {
    console.log(cat)
  }

  const catShow = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log(error))
  }
  
  useEffect(() => {
    catShow()
  }, [])
  
  const catNew = (createCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(createCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => catShow())
      .catch((errors) => console.log("Cat create errors:", errors))
  }
  const updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => catShow())
      .catch((errors) => console.log("Cat update errors:", errors))
  }

  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
      <Route path="/catnew" element={<CatNew createCat={createCat} />} />
      <Route path="/catedit/:id"element={<CatEdit cats={cats} updateCat={updateCat} />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    
      
    </>
  )
}

export default App
