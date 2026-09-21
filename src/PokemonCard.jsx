import React from 'react';
import './PokemonCard.css';

export function PokemonCard({ pokemon }) {
  const { id, name, types, image } = pokemon;

  return (
    <article className="pokemon-card">
      <header className="card-header">
        <span className="pokemon-id">#004</span>
        <h2 className="pokemon-name">Charmander</h2>
      </header>
      
      <figure className="pokemon-image-container">
        <img 
          src={image} 
          alt={`Ilustração do ${name}`}
        />
      
      </figure>
      
      <ul className="pokemon-types">

        <li className={`type-badge type-${type.toLowerCase()}`}>{type}</li>

      </ul>
    </article>
  );
}


