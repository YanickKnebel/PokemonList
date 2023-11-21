import React from 'react';

type FavoritesProps = {
  favorites: string[];
  addToFavorites: (pokemonName: string) => void;
  removeFromFavorites: (pokemonName: string) => void;
};

const Favorites: React.FC<FavoritesProps> = ({
  favorites,
  addToFavorites,
  removeFromFavorites
}) => {
  return (
    <div>
      <h2>Favoriten</h2>
      <ul>
        {favorites.map(pokemonName => (
          <li key={pokemonName}>
            {pokemonName}{' '}
            <button onClick={() => removeFromFavorites(pokemonName)}>Entfernen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
