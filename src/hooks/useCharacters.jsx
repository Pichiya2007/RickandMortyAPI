import React, { useEffect, useState } from 'react'
import { reqCharacters } from '../service/characters'

export const useCharacters = (page, species) => {
    
    const [characters, setCharacters] = useState([])

    const handleGetPersonaje = async (personaje, e) => {
        e.preventDefault()

        reqCharacters(page, personaje, species).then((data) => {
            console.log("Fetched data:", data)
            setCharacters(data.results)
        })
    }

    useEffect(() => {
        reqCharacters(page, "", species).then((data) => {
            console.log("Fetched data:", data)
            setCharacters(data.results)
        })
    }, [page, species])

    // Retorno del Hook
    return {
        characters,
        handleGetPersonaje
    }
}
