import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-start; /* Align logo to the left */
  align-items: center;
  padding: 1% 2.5%;
  width: 100%;
  background-color: #101F3F; /* Set your desired background color */
  height: auto;
  @media (max-width: 768px) {
    justify-content: center; /* Center the logo on smaller screens */
  }
`;

const FooterImage = styled.img`
  width: 100px; /* Adjust the width of the image */
  height: auto; /* Keep the image aspect ratio */
  margin-right: 20px; /* Space between the logo and text */
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: "Times New Roman", Times, Baskerville, Georgia, serif;
  font-size: 2em;
  margin: 0;
  color: white; /* Text color is now white */
  @media (max-width: 400px) {
    font-family: "Times New Roman";
    font-size: 1em;
  }
`;

const RightsReserved = styled.p`
  font-family: Inter;
  font-size: 1em;
  margin: 10px 0 0 0;
  color: white; /* Text color is now white */
  @media (max-width: 600px) {
    font-size: 0.7em;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <FooterImage src="src/assets/logo.png" alt="Logo" /> */}
      <FooterContent>
        <Heading>TrueLine News</Heading>
        <RightsReserved>@2025trueline@gmail.com</RightsReserved>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
