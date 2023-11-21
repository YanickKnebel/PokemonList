import React from 'react';
import styled from 'styled-components';

const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 20px;
  min-width: min-content;
  height: 10px;
  border-radius: 5%;
`;
type BackToDefoultButtonProps = {
  onClick: () => void;
};
const BackToDefoultButton: React.FunctionComponent<BackToDefoultButtonProps> = ({ onClick }) => {
  return <BackButton onClick={onClick}>Back to List</BackButton>;
};
//   button komm in pokemonprofil da  er dan in dem container nach rechts kann.
export default BackToDefoultButton;
