import React from 'react'

export const reqCharacters = async (page, personaje = "") => {

    const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${personaje}`);
    const data = await resp.json(); // Corrección aquí
    console.log(data);
    return data;
}