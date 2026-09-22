import React from 'react';
import './PokemonCard.css';

export function PokemonCard({ pokemon }) {
  const { id, name, type, image } = pokemon;

  return (
    <div className="pokemon-card">
  
      <span className="pokemon-id">{id}</span>
      <h2 className="pokemon-name">{name}</h2>
     <figure className="pokemon-image-container">
        <img 
          src={image} 
          alt={`Ilustração do ${name}`}/>
      </figure>
    
      
    
      <ul>

        <li className={`type-badge type-${type.toLowerCase()}`}>
          {type}
        </li>

      </ul>
    </div>
  );
}


