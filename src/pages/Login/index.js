import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyleds';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/examlpe/actions';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  };
  return (
    <Container>
      <Title>
        Login <small>ois</small>
      </Title>
      <Paragrafo>Lorem iParagrafosum dolor sit amet consectetur .</Paragrafo>
      <button type="button" onClick={handleClick}>
        enviar
      </button>
    </Container>
  );
}
