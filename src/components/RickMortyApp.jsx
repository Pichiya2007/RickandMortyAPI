import { useState } from "react"
import Pagination from "@mui/material/Pagination"
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { SearchCharacter } from "./SearchCharacter"
import { DropdownSpecies } from "./DropdownSpecies"

export const RickMortyApp = () => {

    const [page, setPage] = useState(1)
    const [species, setSpecies] = useState("")  // Nuevo estado para la especie seleccionada
    const { characters, handleGetPersonaje } = useCharacters(page, species)

    const handleChange = (e, value) => {
        setPage(value)
    }

    const handleSpeciesChange = (selectedSpecies) => {
        setSpecies(selectedSpecies)
    }

    return (
        <>
            <SearchCharacter handleGetPersonaje={handleGetPersonaje} />
            <DropdownSpecies handleSpeciesChange={handleSpeciesChange} />
            <GridCharacters characters={characters} />
            <Pagination style={{width: "100%", display: "flex", justifyContent: "center"}} count={10} page={page} onChange={handleChange} />
        </>
    )
}
