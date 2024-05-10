import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-image: url("/public/images/home-background.png");
  background-position: center;
  color: white;
  font-size: 34pt;
  display: flex;

`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;  
  span{
    display: flex;
    align-items: center;
  }

  a{
    display: flex;
    justify-content: center;
    margin: 25px;
  }

  a img{
    width: 24px;
  }
  span p{
    display: flex;
    font-size: 13px;
    letter-spacing: 1.42px;
    font-family: verdana;
    font-weight: bold;
  }
`
const Logo = styled.img`
  width: 86px;
  height: 48px;
  margin: 0 36px;
  margin-top: 15px;
`
const RightMenu = styled.div`
display: flex;
align-items: center;
margin-left: 610px;
font-family: century;
font-size: 15px;
.image{
  margin-left: 5px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
`

function Header() {
  return (
  <Nav>
    <NavMenu>
    <Logo src="/images/logo.svg" />
     <span>
        <a>
          <img src="/images/home-icon.svg" />
          <p>STRONA GŁÓWNA</p>
        </a>
     </span>
     <span>
        <a>
          <img src="/images/search-icon.svg" />
          <p>WYSZUKAJ</p>
        </a>
     </span>
     <span>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <p>MOJA LISTA</p>
        </a>
     </span>
     <span>
        <a>
          <img src="/images/movie-icon.svg" />
          <p>FILMY</p>
        </a>
     </span>
     <span>
        <a>
          <img src="/images/series-icon.svg" />
          <p>SERIALE</p>
        </a>
     </span>
     <span>
        <a>
          <img src="/images/original-icon.svg" />
          <p>ORIGINALS</p>
        </a>
      </span>
      <RightMenu>
        <span>Johny</span>
        <img className='image' src='/images/disney.png'/>
      </RightMenu>
    </NavMenu>
  </Nav>
  );
}

export default Header;