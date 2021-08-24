import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  background-color: cornflowerblue;
  color: white;
  ${'' /* display: "flex"; */}
  ${'' /* flex-direction: "row";
  justify-content: "space-evenly"; */}
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
      </ul>
    </StyledHeader>
  );
};

export default Header;