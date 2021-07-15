import React, { useState } from "react";

function ToyForm({ toys, setToys }) {

const[formData, setFormData] = useState({
  name: "",
  image: "",
  likes: 0
})

function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = (event) => {
  event.preventDefault()

  const newToy ={
    ...formData,
    likes: 0
  }

  fetch("http://localhost:3001/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(newToy)
  })
      .then (r => r.json())
      .then(data => {
       setToys([...toys, data])
       console.log(data)
  })
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
