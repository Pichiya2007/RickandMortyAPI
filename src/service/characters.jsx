import React from 'react'

export const reqCharacters = async (page, personaje, species = "") => {

    const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${personaje}&species=${species}`
    const resp = await fetch(url)
    const data = await resp.json()
    return data;
}
