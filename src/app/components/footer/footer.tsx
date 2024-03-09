import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled(Container)`
  padding: 40px 20px;
  background: linear-gradient(145deg, #0f2027, #203a43, #2c5364);
  color: #ffffff;
  max-width: 100%;
  margin-top: auto; 
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  margin-bottom: 8px;
  &:hover {
    color: #4acfd9;
  }
  cursor: pointer; 
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            Innovating e-commerce with AI solutions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <StyledLink href="#">Home</StyledLink>
          <StyledLink href="#">Products</StyledLink>
          <StyledLink href="#">Contact</StyledLink>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;

