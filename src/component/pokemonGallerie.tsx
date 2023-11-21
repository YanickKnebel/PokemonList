import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Favorites from './favorites';
import { HeartSvg } from './svgs/iconHeartnotFill-2';
type Pokemon = {
  name: string;
  url: string;
};
const PokeContainer = styled.section`
  padding: 0 0 0 40px;
`;
const PokemonGalleryTile = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;
const TileText = styled.p`
  display: flex;
  align-self: center;
  justify-content: center;
`;
const PokemonGalleryImg = styled.img`
  width: 100%;
`;
const PokemonCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgb(255, 255, 255);
  padding: 10px;
  text-align: center;
  width: 250px;
  height: 310px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #7f7f7f;
    border: none;
  }
`;
const AddToFavorites = styled(HeartSvg)<{ $isSelected: boolean }>`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
  ${({ $isSelected }) =>
    $isSelected &&
    `
    fill: red;
  `}
`;
type PokemonGalleryProperties = {
  setPokeId: (id: number) => void;
};
const PokemonGallery: React.FC<PokemonGalleryProperties> = ({ setPokeId }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  // useEffect(() => {
  //   const storedFavorites = localStorage.getItem('favorites');
  //   if (storedFavorites) {
  //     setFavorites(JSON.parse(storedFavorites));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('favorites', JSON.stringify(favorites));
  // }, [favorites]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Fehler beim Abrufen der Pokemon-Liste:', error);
      }
    };

    fetchData();
  }, []);

  const addToFavorites = (pokemonName: string) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.includes(pokemonName)) {
        return [...prevFavorites, pokemonName];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (pokemonName: string) => {
    setFavorites(prevFavorites => prevFavorites.filter(name => name !== pokemonName));
  };

  return (
    <PokeContainer>
      <h1>Pokémon Galerie</h1>
      <Favorites
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
      <PokemonGalleryTile>
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.name}>
            <PokemonGalleryImg
              onClick={() => setPokeId(getPokemonId(pokemon.url))}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
                pokemon.url
              )}.png`}
              alt={pokemon.name}
            />
            <TileText>{pokemon.name}</TileText>
            <a onClick={() => addToFavorites(pokemon.name)}>
              <AddToFavorites
                $isSelected={Boolean(favorites.find(favorit => pokemon.name === favorit))}
              />
            </a>
          </PokemonCard>
        ))}
      </PokemonGalleryTile>
    </PokeContainer>
  );
};

const getPokemonId = (url: string): number => {
  const matches = url.match(/\/(\d+)\/$/);
  if (matches) {
    return parseInt(matches[1], 10);
  }
  return 0;
};

export default PokemonGallery;
