import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MoviesSection = styled.section`
  box-shadow: 1px 1px 5px #494848;
`;

export const MoviesContainer = styled.div`
  max-width: 1200px;
  height: auto;
  padding: 10px 10px;
  margin-right: auto;
  margin-left: auto;
`;

export const MoviesGoBack = styled(Link)`
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  border-radius: 3px;
  border: 1px solid #000000;
  background-color: #f1f1f1;
  color: #000000;

  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0 5px;

  &:hover {
    background-color: #b6b6b1;
  }
`;

export const DataMovie = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 20px;
`;

export const AdditionalUl = styled.ul`
  display: flex;
  gap: 40px;
  text-decoration: none;
  list-style: none;
`;

export const AdditionalLink = styled(NavLink)`
  transition-property: color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  color: black;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;

  font-weight: 500;
  font-size: 15px;
  line-height: 1;

  &:hover {
    color: orange;
  }

  &.active {
    color: orange;
  }
`;

export const CastImg = styled.img`
  max-width: 100px;
  height: auto;
`;