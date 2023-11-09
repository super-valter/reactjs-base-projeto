import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome fontSize={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt fontSize={24} />
      </Link>
      <Link to="/logout">
        <FaSignInAlt fontSize={24} />
      </Link>
      *{botaoClicado ? 'Clicado' : 'Não clicado'}*
    </Nav>
  );
}
