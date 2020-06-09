
import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const MenuBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 5vh;
  
  .authLink{
    text-decoration: none;
    color: black;
    font-size: 1.5vh;
  }
  
  .logo{
    font-size: 3vh;
    font-weight: bold;
  }
`;

const UpperBar = () => {
    return (
        <MenuBar>
            <div className="logo">CompProg Client</div>
            <Link to="/stocks" className="authLink">Sign In</Link>
            <Link to="/currency" className="authLink">Sign Up</Link>
        </MenuBar>
    );
};

export default UpperBar;
