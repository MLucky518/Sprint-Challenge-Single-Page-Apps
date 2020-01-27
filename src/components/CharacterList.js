import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
 
  const [characters,setCharacters] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")

    .then(res =>{
      console.log(res);
      setCharacters(res.data.results);
    })

    .catch(err =>{
      console.log(err.response);
    });
  }, []);

  console.log(characters);

  return (
    <section className="character-list">
      <Link to = "/"><h1 >Home</h1></Link>
      <br/>
      <SearchForm chars = {characters}/>
      <h2>{characters.map(char =>{
        return <CharacterCard id = {char.id}key = {char.id} name = {char.name} gender = {char.gender} species = {char.species} status = {char.status}/>
      })}</h2>
    </section>
  );
}
