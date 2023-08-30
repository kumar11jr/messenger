"use client"
import React from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import * as EmailValidator from "email-validator"
const Sidebar = () => {
  
  const handleClick = () =>{
    const input = () => prompt(
      "Please enter an email address for the user"
    )
    if(!input) return null;
    if(EmailValidator.validate(input)){
      
    }
  }


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
      <Search>
      <SearchIcon />
      <SearchInput placeholder='Search in Chats' />
      </Search>
      <SidebarButton onClick={handleClick} >Start a New Chat</SidebarButton>
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
  // background-color: black;
  z-index:1;
  top: 0;
  padding:15px;
  height:80px;
  
`;

const SidebarButton = styled(Button)`
  width:100%;
  &&&{
    border-top: 1px solid whitesmoke;
    border-button:1px solid whitesmoke;
  }


`;

const UserAvatar = styled(Avatar)`
  /* Your styles for UserAvatar here */
  cursor:pointer;
`;

const IconContainer = styled.div``;

const StyledIconButton = styled(IconButton)`
  /* Your styles for StyledIconButton here */
  // background-color: transparent; /* Set your desired background color */
  // color: white; /* Set your desired text color */
  border-radius: 50%; /* Makes it round */
  padding: 8px; /* Set your desired padding */
  
  /* You can add more custom styles as needed */
`;

const Search = styled.div`
  display: flex;
  align-items:center;
  padding:20px;
  border-radius:2px;
`;
const SearchInput = styled.input`
  outline-width:0;
  border:none;
  flex:1;
`;
// You can add more styles for other components as needed
