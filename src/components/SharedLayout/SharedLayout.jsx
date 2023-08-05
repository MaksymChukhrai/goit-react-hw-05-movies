import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import css from '../Loader/Loader.css';
import {
  Header,
  Container,
  StyledLink,
  NavUlHeader,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavUlHeader>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </NavUlHeader>
          </nav>
        </Container>
      </Header>
      <main>
        <Suspense
          fallback={
            <Circles
              height="80"
              width="80"
              color="#4d78a9"
              wrapperClass={css.loader}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
