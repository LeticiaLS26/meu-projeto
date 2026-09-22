import React from 'react';
import './PokemonCard.css';

export function PokemonCard({ pokemon }) {
  const { id, name, types, image } = pokemon;

  return (
    <article className="pokemon-card">
  
        <span className="pokemon-id">{id}</span>
        <h2 className="pokemon-name">{name}</h2>
     
        <img 
          src={image} 
          alt={`Ilustração do ${name}`}
        />
      
      <ul>

        <li className={`type-badge type-${type.toLowerCase()}`}>
          {type}</li>

      </ul>
    </article>
  );
}


