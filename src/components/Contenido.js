import React, {useEffect, useState} from 'react'

export default function Contenido() {
    const [users, setUsers] = useState([]);
    const getData = async() =>{
        const resp = await fetch('https://simulacroprueba.herokuapp.com/personajes')
        const data = await resp.json()
        setUsers(data)
        
    }
    const datakeys = users.map( user =>({
        ...user,
        key: user.id
    }))

    useEffect(()=>{
        getData()
    }, [])
    useEffect(() => {
    }, [users])
    
  return (
    <div><ul>{datakeys.map(x => 
    <li key={x.id}>
    {`${x.name} ${x.descripcion} `}
    <img src={x.img}/>
    </li>
    )
    
    }</ul></div>
  )
}
