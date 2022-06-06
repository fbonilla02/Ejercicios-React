import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import useFormulario from './components/useFormulario';

import Contenido from './components/Contenido';
import axios from 'axios';

function App() {
  const [personaje, setPersonaje] = useState({})
  const [formulario, handleChange, reset] = useFormulario({name: '', img:'', descripcion:''})
  const url = "https://simulacroprueba.herokuapp.com/personajes"
  const submit = async (e) =>{
    e.preventDefault()

    setPersonaje({
      ...personaje,
      formulario,
    })
    
    // if (personaje  !== '') {
      
    //   await fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify(personaje),
    //     headers: {
    //       'Content-Type': 'application/json; charset=UTF-8'
    //     }
    //   })
    // }
    reset()
  }
  // console.log(personaje);
  if(personaje.formulario !== undefined){
      axios.post(url, personaje.formulario)
  }
  useEffect(() => {
  }, [])
 
  return (

    <div>
      <form onSubmit={submit}>
        <Input label="Nombre" name="name" value={formulario.name} onChange={handleChange} />
        <Input label="img" name="img" value={formulario.img} onChange={handleChange} />
        <Input label="descripcion" name="descripcion" value={formulario.descripcion} onChange={handleChange} />
        <Button>enviar</Button>
      </form>
      <div>
        <Contenido/>
      </div>
    </div>
  );
}

export default App;
