import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import CharacterCard from "./components/CharacterChard"
import Pagination from "./components/Pagination"

const StarWarsCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    axios({
      url: `https://swapi.dev/api/people/?page=${page}`,
    }).then((response) => {
        setCharacters(response.data.results)
        setTotalPages(Math.ceil(response.data.count/10))
    });
  }, [page]);

  const handleClick = (clickedPage) =>{
    setPage(clickedPage)
  }

  return (
    <section>
      <h2>Personajes de Star Wars:</h2>
      <Pagination handleClick={handleClick} totalPages={totalPages} page={page}/>
      {characters.map(character => <CharacterCard character={character}/>)}
    
    </section>
  );
};

export default StarWarsCharacter;
