import React from 'react';
import styled from 'styled-components';


const TileContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgb(255, 255, 255);
  padding: 10px;
  text-align: center;
  width:250px;
  height:310px;
  &:hover {
    cursor:pointer;
    background-color:#7f7f7f79
  }
`;

const TileImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const TileHeadline = styled.h2`
  margin-top: 10px;
  font-size: 1.5rem;
  color: #333;
`;

type TileProps ={
  imageSrc?:string;
  headline?:string;
} 

const Tile:React.FC<TileProps> = ({imageSrc,headline}) => {
  return (
    
    <TileContainer>
      {imageSrc ? <TileImage src={imageSrc} alt="Tile Image" />:<p>kein Img da!!</p>}
      {headline && <TileHeadline>{headline}</TileHeadline>}
    </TileContainer>
  );
};

export default Tile;
