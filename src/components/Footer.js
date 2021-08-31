import * as React from "react";
// import styled from "styled-components";

// const StyledFooter = styled.footer`
//   padding: 20px;
//   background-color: cornflowerblue;
//   color: white;
//   ${'' /* .purple {
//     color: purple;
//   } */}

// `;

// const StyledHeading = styled.h3`
//   padding: 20px;
//   background-color: cornflowerblue;
//   color: black;
// `;

const Footer = () => {
  return (
    <footer className="ftr">
      <p className="ftrText">Made with ❤️, 🧐, 🍵</p>
      <p className="ftrText">© Nichele Dunn 2021<sub className="ftrSub">  ... hey, that rhymes 🥸</sub></p>
    </footer>
  );
};

export default Footer;