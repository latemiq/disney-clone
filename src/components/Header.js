import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  position: sticky;
  width: 100%;
  height: 70px;
  color: white;
  font-size: 34pt;
  display: flex;
  overflow-x: hidden;
`;

const NavMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  a {
    display: flex;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
  }

  a img {
    width: 24px;
  }

  a p {
    position: relative;
    display: flex;
    font-size: 13px;
    letter-spacing: 1.32px;
    font-family: verdana;
    font-weight: 600;
    margin-left: 5px;
  }

  ul {
    position: relative;
    right: -29.3%;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    font-family: verdana;
    font-size: 13px;
  }

  .image {
    margin-left: 16%;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

const Logo = styled.img`
  width: 86px;
  height: 48px;
  margin: 0 36px;
  margin-top: 15px;
`;

function Header() {
  return (
    <Nav>
      <NavMenu className='row'>
        <Logo className="col-sm" src="/images/logo.svg" />
        <div className="col-sm bg-primary text-white">
          <a>
            <img src="/images/home-icon.svg" />
            <p>STRONA GŁÓWNA</p>
          </a>
        </div>
        <div className="col-sm">
          <a>
            <img src="/images/search-icon.svg" />
            <p>WYSZUKAJ</p>
          </a>
        </div>
        <div className="col-sm">
          <a>
            <img src="/images/watchlist-icon.svg" />
            <p>MOJA LISTA</p>
          </a>
        </div>
        <div className="col-sm">
          <a>
            <img src="/images/movie-icon.svg" />
            <p>FILMY</p>
          </a>
        </div>
        <div className="col-sm">
          <a>
            <img src="/images/series-icon.svg" />
            <p>SERIALE</p>
          </a>
        </div>
        <div className="col-sm">
          <a>
            <img src="/images/original-icon.svg" />
            <p>ORIGINALS</p>
          </a>
        </div>
        <ul>
          <span>dzieciaki</span>
          <img className='image' src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F73277B06EE997988A5DD3356F145DB4A0D9C82A7656796DB20B93B2D0DC7C79/scale?width=96&format=png'/>
        </ul>
      </NavMenu>
    </Nav>
  );
}

export default Header;
