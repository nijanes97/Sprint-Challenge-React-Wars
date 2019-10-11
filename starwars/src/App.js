import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import './App.css';
import './components/StarWars';
import StarWars from './components/StarWars';

const CardContainer = styled.div
`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterArray, setCharacterArray] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response);
      setCharacterArray(response.data.results);
    })
    .catch(error => {
      console.log("data was not returned", error);
    })
  }, [])
  console.log(characterArray);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer>
        { characterArray.map((character, index) => {
          return <StarWars key={index} name={character.name} birthYear={character.birth_year} height={character.height} mass={character.mass} hair={character.hair_color} eye={character.eye_color} skin={character.skin_color} gender={character.gender} />
        })}
      </CardContainer>
    </div>
  );
}

export default App;
