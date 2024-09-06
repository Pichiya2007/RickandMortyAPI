import React from 'react'

export const reqCharacters = async (page) => {

    const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await resp.json(); // Corrección aquí
    console.log(data);
    return data;
}