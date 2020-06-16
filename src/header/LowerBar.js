import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const MenuBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 5vh;
  border-bottom-style: solid;
  
  .link{
    color:black;
    text-decoration: none;
    font-size: 1.5vh;
  }
`;

const LowerBar = () => {
    return (
        <MenuBar>
            <NavLink to="/submissions" className="link">Submissions</NavLink>
            <NavLink to="/problems" className="link">Problems</NavLink>
            <NavLink to="/algorithms" className="link">Algorithms</NavLink>
        </MenuBar>
    );
};

export default LowerBar;