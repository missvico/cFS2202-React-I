import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function StarWarsProfile(){
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    const [planet, setPlanet] = useState({})
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingMovies, setLoadingMovies] = useState(true)


    // const params = useParams()
    // const id = params.id
    
    useEffect(
        function(){
            axios(
                {
                    url: `https://swapi.dev/api/people/${id}`
                }
            ).then((response) => {
                setCharacter(response.data)
                return response.data
            }).then((characterData) =>{
                return axios(
                    {
                        url: characterData.homeworld
                    }
                )    
            }).then((planetResponse) => {
                setPlanet(planetResponse.data)
                setLoading(false)
                }
            )
        }
    ,[])

    useEffect(
        function(){
            if(character.films){
                const promiseArray = character.films.map(film => axios.get(film))
                Promise.all(promiseArray)
                .then((responseArray) => {
                    const moviesArray = responseArray.map(response => response.data)
                    setMovies(moviesArray)
                    setLoadingMovies(false)
                })

            }
        }
    ,[character.films])


    return(
        <>
        {loading || loadingMovies ?
        <div>LOADING</div>
        :
        <div>
           <h1>{character.name}</h1>
           <p>
                Año de Nacimiento: {character.birth_year}
              </p>
              <p>
              Altura: {character.height}
              </p>
              <p>
                  Peso: {character.mass}
              </p>
              {planet.name &&
              <div>
                    Planeta: {planet.name} 
              </div>
              }
              {
                movies.length !== 0 &&
                <div>
                    Peliculas: 
                    <ul>
                        {movies.map(movie =>{
                            return(<li>{movie.title}</li>)
                        })}
                    </ul>
              </div>
              }   
        </div>}
        </>
    )
}

export default StarWarsProfile;