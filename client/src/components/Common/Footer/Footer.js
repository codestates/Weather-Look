import React from "react";
import styled from "styled-components";
export const FooterContainer = styled.footer`
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5.5rem;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      <div>
        <h2>footer</h2>
      </div>
    </FooterContainer>
  );
};

export default Footer;
