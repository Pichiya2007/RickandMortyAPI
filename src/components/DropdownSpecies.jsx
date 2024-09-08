export const DropdownSpecies = ({ handleSpeciesChange }) => {

  const handleSelection = (species) => {
    handleSpeciesChange(species)  // Llamamos a la función de RickMortyApp para actualizar la especie seleccionada
  }

  return (
    <>
      <div className="dropdown container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filtrar por especie
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => handleSelection('Human')}>Human</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Alien')}>Alien</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Humanoid')}>Humanoid</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Poopybutthole')}>Poopybutthole</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Mythological')}>Mythological</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Animal')}>Animal</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Robot')}>Robot</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Cronenberg')}>Cronenberg</button></li>
          <li><button className="dropdown-item" onClick={() => handleSelection('Unknown')}>Unknown</button></li>
        </ul>
      </div>
    </>
  )
}
