import { useCharacters } from "../hooks/useCharacters"

export const GridCharacters = ({characters}) => {

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-0 grid gap-3" style={{width: "1780px"}}>
        {
            characters.map((char) => (
                <div key={char.id} className="card mt-3 ">              
                <img style={{ width: "100%", height: "15rem", objectFit: "cover" }} className="card-img-top" src={char.image} alt={char.name} />
                    <div className="card-body">
                        <h5 className="card-title">{char.name}</h5>
                        <p className="card-text">Especie: {char.species}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </>
  )
}