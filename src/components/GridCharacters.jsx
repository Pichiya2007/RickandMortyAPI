import { useCharacters } from "../hooks/useCharacters"

export const GridCharacters = ({characters}) => {

  return (
    <>
      <div className="d-flex flex-row row row-cols-6">
        {
            characters.map((char) => (
                <div key={char.id} className="card mt-5">              
                <img style={{ width: "13rem" }} className="card-img-top" src={char.image} alt={char.name} />
                    <div className="card-body">
                        <p className="card-text">Nombre: {char.name}</p>
                        <p className="card-text">Especie: {char.species}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </>
  )
}