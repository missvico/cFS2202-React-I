import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import CharacterCard from "./components/CharacterCard"
import Pagination from "./components/Pagination"
import { useSearchParams } from "react-router-dom";

const StarWarsCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams()
  const currPage = searchParams.get("page") || 1

  useEffect(() => {
    axios({
      url: `https://swapi.dev/api/people/?page=${currPage}`,
    }).then((response) => {
        setCharacters(response.data.results)
        setTotalPages(Math.ceil(response.data.count/10))
    });
  }, [currPage]);

  const handleClick = (clickedPage) =>{
    setSearchParams({page: clickedPage});
  }

  return (
    <section>
      <h2>Personajes de Star Wars:</h2>
      <Pagination handleClick={handleClick} totalPages={totalPages} page={currPage}/>
      {characters.map(character => <CharacterCard character={character}/>)}
    
    </section>
  );
};

export default StarWarsCharacter;
