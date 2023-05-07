import { useState } from "react"

const NewChampion = ({ submitNewChampion }) => {

  const [ name, setName ] = useState("")
  const [ title, setTitle ] = useState("")
  const [ tags, setTags ] = useState("")
  const [ icon, setIcon ] = useState("")
  const [ description, setDescription ] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    if ([name, title, tags, icon, description].some(val => val.trim() === "")) {
      alert("Please fill out all the fields!!")
      return null
    }
  
    const newChampion = {
      name, 
      title, 
      tags, 
      icon, 
      description
    }

    fetch('http://localhost:3000/champions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newChampion)
    })
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        console.log(error.message)
      })
    alert("Submitted!")
  }

    return (
      <div>
        <h2>Add A New Champion</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input onChange={e => setName(e.target.value)} type="text" name="name" id="name" value={name}></input><br /><br />

          <label htmlFor="title">Title: </label>
          <input onChange={e => setTitle(e.target.value)} type="text" name="title" id="title" value={title} ></input><br /><br />

          <label htmlFor="tags">Tags: </label>
          <input onChange={e => setTags(e.target.value)} type="text" name="tags" id="tags" value={tags}></input><br /><br />

          <label className="card-img" htmlFor="icon">Image Url: </label>
          <input onChange={e => setIcon(e.target.value)} type="text" name="icon" id="icon" value={icon}></input><br /><br />

          <label htmlFor="description">Descriprion: </label>
          <input onChange={e => setDescription(e.target.value)} type="text" name="description" id="description" value={description}></input><br /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
  
export default NewChampion