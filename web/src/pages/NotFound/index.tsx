import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Página não encontrada</h1>

        <Link to="/">
          <FiHome />
          Voltar para a página inicial
        </Link>
      </Content>
    </Container>
  );
};

export default NotFound;
