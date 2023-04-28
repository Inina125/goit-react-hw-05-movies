import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  height: 80px;
  padding: 0 15px;
  background: #fff;
`;

const Nav = styled.nav`
  display: flex;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 0 15px;
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #222;
  font-size: 20px;
  font-weight: 500;

  &.active {
    color: #2233ff;
  }
`;

export { Menu, Main, Header, Nav, MenuItem, MenuLink };
