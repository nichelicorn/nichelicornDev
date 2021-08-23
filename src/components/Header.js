import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  background-color: cornflowerblue;
  color: white;
  ${'' /* .purple {
    color: purple;
  } */}

`;

// const StyledHeading = styled.h3`
//   padding: 20px;
//   background-color: cornflowerblue;
//   color: black;
// `;

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        {/* <li>
          <Link to="/til">Today I Learned</Link>
        </li> */}
        {/* <li>
          <Link to="/skating">Skating</Link>
        </li> */}
        {/* <li>
          <Link to="/fandf">Flora and Fauna</Link>
        </li> */}
      </ul>
    </StyledHeader>
  );
};

export default Header;