import {Link} from "react-router-dom";

const CharacterCard = ({character})=>{
    const id = character.url.split("/")[5];
    return (
        <>
          <div key={id} className="box">
            <span></span>
            <div className="content">
              <h2>{character.name}</h2>
              <p>
                  Año de Nacimiento: {character.birth_year}
              </p>
              <p>
              Altura: {character.height}
              </p>
              <p>
                  Peso: {character.mass}
              </p>
              <Link to={`/characters/${id}`}>Ir al Perfil</Link>
            </div>
          </div>
        </>
      );
}

export default CharacterCard;