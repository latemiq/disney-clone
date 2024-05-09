import React from 'react'
import styled from 'styled-components'

    function Header() {
        return (
            <Nav>
                <Logo src="/images/logo.svg"/>
                <NavMenu>
                    <ul>
                        <li>
                            <a>
                                <img src='/images/home-icon.svg'/>
                                <p className='page-nav.page-bav--small.text-color--primary.margin--left-2'>STRONA GŁÓWNA</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src='/images/search-icon.svg'/>
                                <p>WYSZUKAJ</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src='/images/watchlist-icon.svg'/>
                                <p>MOJA LISTA</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src='/images/movie-icon.svg'/>
                                <p>FILMY</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src='/images/series-icon.svg'/>
                                <p>SERIALE</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src='/images/original-icon.svg'/>
                                <p>ORIGINALS</p>
                            </a>
                        </li>
                    </ul>
                </NavMenu>
            </Nav>
        )
    }

    export default Header

    const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    `
    const Logo = styled.img`
    width: 80px;
    `
    const NavMenu = styled.div`
        padding: 0 36px;
        font-size: 13px
        letter-spacing: 1.42px;
        line-height: 1.07;
        padding:16px 18px;
        p{
            color: F9F9F9;
            font: 13px Inspire-Bold sans-serif;
            font-family: bold;
            margin: 13px 0px 13px 8px;
            padding: 2px 0px;
            margin-left: 0.5rem;
        }
        a{
            display: flex;
        }
        img{
            width:24px;
            height:20px;
        }
        li{
            display: inline-block;
            list-style: none;
            padding: 16px 18px;
            margin: 36px;
        }
    `