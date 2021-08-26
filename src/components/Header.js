import * as React from "react";
import { Link } from "gatsby";
// import styled from "styled-components";

// Header styling
// const StyledHeader = styled.header`
//   padding: 20px;
//   background-color: cornflowerblue;
//   color: white;
// }
// `;



// const StyledHeading = styled.h3`
//   padding: 20px;
//   background-color: cornflowerblue;
//   color: black;
// `;

const Header = () => {
  return (
    <header className="hdr">
      {/* <div className="nameTile"> */}
        <h2 className="nameTile">Nichele D · 🦄</h2>
        {/* <h5>technology · nature · art</h5> */}
      {/* </div> */}
      <ul  className="hdrList">
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
    </header>
  );
};

export default Header;