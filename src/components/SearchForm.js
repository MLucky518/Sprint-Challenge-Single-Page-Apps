import React, { useState,useEffect } from "react";
import{ characterPics} from "../data";

export default function SearchForm(props) {
  console.log(props.chars);

  
  const[search,setSearched] = useState("");
  const[filtered,setFiltered] = useState([]);

  useEffect(() => {
   
     const filteredChars = props.chars.filter(char=>  char.name.toLowerCase().includes(search) );

    setFiltered(filteredChars);

  }, [search])

console.log(filtered);

  function handleChange(e){
      e.preventDefault();
      setSearched(e.target.value);

  }

  
  return (
    <section className="search-form">
     <input 
      type = "text"
      placeholder = "Search your favorite characters name"
      onChange = {handleChange}
      value = {search}>
     </input>
     <button type = "submit">Clear</button>
     
     
        {filtered.map(filt=>{
          return (
          <div classname = "filtered"><ul>
            <img className = "filt-pics"src = {characterPics[filt.id]} ></img>
            <li>{filt.name}</li>
            <li>{filt.gender}</li>
            <li>{filt.species}</li>
          </ul></div>);
          
        })}
      
    
    </section>
  );
}
