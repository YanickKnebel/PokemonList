import React from 'react';
import styled from 'styled-components';

const StageImg = styled.img`
    width:100vw;
    height: 50vh;
    object-fit: cover;
    `;
const StageHeadline = styled.h1`
    font-size: 2 rem;
    color: green;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40vh;
`;
type StageProps ={
    headline?:string;
  }

const Stage:React.FC<StageProps>= ({headline}) => {
    return (
        <div>
            <StageHeadline>{headline}</StageHeadline>
            <StageImg src='img/pokemon_pikachu_banner.png'/>
        </div>
    )}
      
     
  
  
  export default Stage;
  