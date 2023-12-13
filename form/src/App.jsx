import './App.css'
import {useState} from "react";

function App() {

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: ''
    })


    const handleChange = (e) => {
        const {value, name} = e.target
        const newData = {...formData}
        newData[name] = value
        setFormData(newData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('form submit')
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type={'text'} onChange={handleChange} value={formData.nom} name={'nom'} placeholder={'Votre nom'} />
            <input type={'text'} onChange={handleChange} value={formData.prenom} name={'prenom'} placeholder={'Votre prénom'} />
            <input type={'text'} onChange={handleChange} value={formData.age} name={'age'} placeholder={'Votre âge'} />
            <input type={'submit'} value={'Valider'} />
        </form>
    </>
  )
}

export default App