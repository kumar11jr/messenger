"use client"
import React from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContainer>
        <StyledIconButton>
          <ChatIcon />
        </StyledIconButton>
        <StyledIconButton>
        <MoreVertIcon />
        </StyledIconButton>
        </IconContainer>
      </Header>
      <SearchIcon />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  /* Your styles for Container here */
`;

const Header = styled.div`
  /* Your styles for Header here */
  display:flex;
  justify-content:space-between;
  position:sticky;
  background-color: black;
  z-index:1;
  top: 0;
  padding:15px;
  height:80px;
  
`;

const UserAvatar = styled(Avatar)`
  /* Your styles for UserAvatar here */
  cursor:pointer;
`;

const IconContainer = styled.div``;

const StyledIconButton = styled(IconButton)`
  /* Your styles for StyledIconButton here */
  background-color: transparent; /* Set your desired background color */
  color: white; /* Set your desired text color */
  border-radius: 50%; /* Makes it round */
  padding: 8px; /* Set your desired padding */
  
  /* You can add more custom styles as needed */
`;

// You can add more styles for other components as needed
