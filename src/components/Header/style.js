import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5%;
  background: #000;
  color: #fff;
`

export const Logo = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  a{
    font-family: 'Comfortaa';
    padding: 2%;
    text-decoration: none;
    color: #fff;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  a {
    color: #fff;
    padding: 2%;
    font-family: 'Montserrat';
    font-width: 500;
    text-decoration: none;
  }
  a:hover {
    color: #299299;
  }
`