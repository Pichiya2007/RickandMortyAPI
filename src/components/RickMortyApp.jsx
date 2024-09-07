import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { useState } from "react"
import { SearchCharacter } from "./SearchCharacter"

export const RickMortyApp = () => {


    const [page, setPage] = useState(1)
    const {characters, handleGetPersonaje} = useCharacters(page)
    
    const handleChange = (e, value) => {
        setPage(value)
    }

    return (
        <>
            <SearchCharacter handleGetPersonaje={handleGetPersonaje}/>
            <GridCharacters characters={characters}/>
            <Pagination style={{width: "100%", display: "flex", justifyContent: "center"}} count={10} page={page} onChange={handleChange} />
        </>
    )
}