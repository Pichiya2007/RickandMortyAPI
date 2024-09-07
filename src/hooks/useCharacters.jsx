import React, { useEffect, useState } from 'react'
import { reqCharacters } from '../service/characters'

export const useCharacters = (page) => {
    
    const [characters, setCharacters] = useState([])

    const handleGetPersonaje = async (personaje, e) => {
        e.preventDefault()

        reqCharacters(page, personaje).then((data) => {
            console.log("Fetched data:", data)
            setCharacters(data.results)
        })
    }

    useEffect(() => {
        reqCharacters(page, "").then((data) => {
            console.log("Fetched data:", data)
            setCharacters(data.results)
        })
    }, [page])

    // Retorno del Hook
    return {
        characters,
        handleGetPersonaje
    }
}
