import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  height: 100%;
  padding: 16px 4px;
  :visited {
    color: #0b090a;
  }
`;
