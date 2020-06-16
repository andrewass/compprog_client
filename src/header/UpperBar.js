import React from "react";
import styled from "styled-components";
import Authentication from "./Authentication";

const MenuBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 5vh;
   
  .logo{
    font-size: 3vh;
    font-weight: bold;
  }
`;

const UpperBar = (props) => {
    return (
        <MenuBar>
            <div className="logo">CompProg Client</div>
            <Authentication setUserInfo={props.setUserInfo} isSignedIn={props.isSignedIn}/>
        </MenuBar>
    );
};

export default UpperBar;
