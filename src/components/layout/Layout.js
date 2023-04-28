import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Main, Menu, MenuItem, MenuLink, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <Main>
      <Header>
        <Nav>
          <Menu>
            <MenuItem>
              <MenuLink to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/movies">Movies</MenuLink>
            </MenuItem>
          </Menu>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default Layout;
