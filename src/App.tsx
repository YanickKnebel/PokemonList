import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import NavigationBar from './component/nav';
import Stage from './component/stage';
import BackToDefoultButton from './component/backToList';
import PokemonGallery from './component/pokemonGallerie';
import PokemonInfo from './component/pokemonProfil';
const StyeldHedline = styled.h1`
  color: red;
  margin: 40px;
`;

function App() {
  const [activePokeId, setActivePokeId] = useState<number | undefined>(undefined);
  return (
    <div>
      <NavigationBar />
      <Stage headline="headline" />
      <StyeldHedline>{activePokeId}</StyeldHedline>
      {activePokeId ? (
        <>
          <BackToDefoultButton onClick={() => setActivePokeId(undefined)} />
          <PokemonInfo pokemonId={activePokeId}></PokemonInfo>
        </>
      ) : (
        <PokemonGallery setPokeId={setActivePokeId} />
      )}
    </div>
  );
}

export default App;
