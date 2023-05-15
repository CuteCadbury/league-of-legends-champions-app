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
        <div className='formContainer'>
        <h1>Add A New Champion</h1>
          <form onSubmit={handleSubmit}>
              <br/>
              <label htmlFor="name">Name: </label>
              <input onChange={e => setName(e.target.value)} type="text" name="name" id="name" value={name}/>
              <br /><br /><br/>
              <label htmlFor="title">Title: </label>
              <input onChange={e => setTitle(e.target.value)} type="text" name="title" id="title" value={title}/>
              <br /><br /><br />
              <label htmlFor="tags">Tags: </label>
              <input onChange={e => setTags(e.target.value)} type="text" name="tags" id="tags" value={tags}/>
              <br /><br /><br/>
              <label className="card-img" htmlFor="icon">Image Url: </label>
              <input onChange={e => setIcon(e.target.value)} type="text" name="icon" id="icon" value={icon}/>
              <br /><br /><br/>
              <label htmlFor="description">Descriprion: </label>
              <input onChange={e => setDescription(e.target.value)} type="text" name="description" id="description" value={description}/>
              <br /><br /><br/>
              <input type="submit" value="Submit" className="submitbtn"/>
            </form>
        </div>
      </div>
      )
  }
  
export default NewChampion