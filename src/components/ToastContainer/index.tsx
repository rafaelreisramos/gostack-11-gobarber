import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro muito importante</strong>
          <p>Não foi possível fazer login na aplicação muitas vezes ....</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro muito importante</strong>
          <p>Não foi possível fazer login na aplicação muitas vezes ....</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro muito importante</strong>
          <p>Não foi possível fazer login na aplicação muitas vezes ....</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;