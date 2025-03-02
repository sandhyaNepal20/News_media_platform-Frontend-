import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-start; /* Align logo to the left */
  align-items: center;
  padding: 1% 2.5%;
  width: 100%;
  background-color: #101f3f;
  color: white;
  height: auto;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    justify-content: center; /* Center the logo on smaller screens */
    padding: 2% 5%;
  }

  /* Dark Mode Support */
  &.dark {
    background-color: #0d1a32;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
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
  color: white;
  transition: color 0.3s ease-in-out;

  @media (max-width: 400px) {
    font-family: "Times New Roman";
    font-size: 1.2em; /* Adjust font size for very small screens */
  }

  /* Dark Mode Support */
  .dark & {
    color: #d1d5db;
  }
`;

const RightsReserved = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1em;
  margin: 10px 0 0 0;
  color: white;
  transition: color 0.3s ease-in-out;

  @media (max-width: 600px) {
    font-size: 0.8em; /* Adjust font size for smaller screens */
  }

  /* Dark Mode Support */
  .dark & {
    color: #9ca3af;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper className="dark">
      <FooterContent>
        <Heading>TrueLine News</Heading>
        <RightsReserved>@2025 trueline@gmail.com</RightsReserved>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
