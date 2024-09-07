import { useState } from "react"

export const SearchCharacter = ({handleGetPersonaje}) => {

    const [personaje, setPersonaje] = useState("")

    return (
    <>
        <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
            <form className="d-flex" onSubmit={(e) => { handleGetPersonaje(personaje, e) }}>
                <input className="form-control me-2" type="text" onChange={(e) => {setPersonaje(e.target.value)}}/>
                <input className="btn btn-outline-primary" type="submit" value="Buscar"/>
            </form>     
        </div>
    </>
  )
}