import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
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

const Footer = () => {
  return (
    <StyledFooter>
      {/* <StyledHeading>This is my heading 🧭</StyledHeading> */}
      Hello, I am a footer 🛼
      {/* <span className="purple">🍆 purple thing</span> */}
    </StyledFooter>
  );
};

export default Footer;