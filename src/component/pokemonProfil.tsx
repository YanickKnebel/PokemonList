import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled Components
const PokemonContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const PokemonImage = styled.img`
  width: 200px;
`;

type PokemonData = {
  name: string;
  id: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  base_experience: number;
};
const PokemonInfo: React.FC<{ pokemonId: number }> = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data: PokemonData = await response.json();
        setPokemonData(data);
        console.log(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Pokemon-Daten:', error);
      }
    };

    fetchData();
  }, [pokemonId]); //[pokemonId]=> dependencie  wenn leer dasn immer nur wenn die seite neu geladen wird

  if (!pokemonData) {
    return <div>Lädt...</div>;
  }

  const { name, id, sprites, base_experience } = pokemonData;

  return (
    <PokemonContainer>
      <PokemonImage src={sprites.other['official-artwork'].front_default} alt={name} />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Bais-Xp:{base_experience}</p>
    </PokemonContainer>
  );
};

export default PokemonInfo;
