import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css?family=Bangers');
    font-family: 'Bangers', sans-serif;
    text-align: center;
    font-size: 5rem;
`

const Header = ({ title }) => (
    <StyledHeader>{title}</StyledHeader>
)

export default Header;