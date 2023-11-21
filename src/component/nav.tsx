import React from 'react';
import styled from 'styled-components';


const Navbar = styled.nav`
  background-color: #4646467b;
  color: white;
  display: flex;
  flex-direction:row;
  padding: 10px;
  gap:10px;
  position: sticky;
  top: 0px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  &:hover {
    background-color: #555;
  }
`;

const Logo = styled.img`
width: 40px; 
height: auto; 
`;

const NavigationBar: React.FunctionComponent = () => {
  return (
    <Navbar>
      <Logo src="/img/logo.png" alt="logo"/>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Contact</NavItem>
    </Navbar>
  );
};

export default NavigationBar;
