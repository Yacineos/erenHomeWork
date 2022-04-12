import React, { Component } from 'react'
import './Pokecard.css'
const Pokecard = ({title , image , type , exp }) =>{
  return (
    <div className="card">
        <h3>{title}</h3>
        <div><img src={image} /></div>
        <p>{type}</p>
        <p>{exp}</p>
    </div>
  );
}
export default Pokecard ; 