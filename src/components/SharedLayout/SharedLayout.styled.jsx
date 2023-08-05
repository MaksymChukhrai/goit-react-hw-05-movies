import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #f1f1f1;
  width: 100%;
  padding: 10px 0;
  box-shadow: 1px 1px 5px #494848;
`;

export const Container = styled.div`
  max-width: 1200px;
  height: auto;
  padding: 0 10px;
  margin-right: auto;
  margin-left: auto;
  /* border: 2px solid #000000; */
`;

export const NavUlHeader = styled.ul`
  display: flex;
  gap: 20px;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled(NavLink)`
  transition-property: color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  color: black;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;

  &:hover {
    color: orange;
  }

  &.active {
    color: orange;
  }
`;