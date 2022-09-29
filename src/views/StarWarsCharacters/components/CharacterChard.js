
const CharacterCard = ({character})=>{
    const id = character.url.split("/")[5];
    return (
        <>
          <div key={id} class="box">
            <span></span>
            <div class="content">
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
              <a href="#">Ir al Perfil</a>
            </div>
          </div>
        </>
      );
}

export default CharacterCard;