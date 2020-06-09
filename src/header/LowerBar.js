import React from "react";
import {Link} from "react-router-dom";
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
            <Link to="/submissions" className="link">Submissions</Link>
            <Link to="/problems" className="link">Problems</Link>
            <Link to="/algorithms" className="link">Algorithms</Link>
        </MenuBar>
    );
};

export default LowerBar;