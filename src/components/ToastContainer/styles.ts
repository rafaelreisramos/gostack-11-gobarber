import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

interface ToastProps {
  type?: 'success' | 'error' | 'info';
}

export const Toast = styled.div<ToastProps>`
  display: flex;
  align-items: flex-start;

  width: 360px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${props => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin-right: 12px;
  }

  div {
    flex: 1;

    strong {
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    margin-left: 12px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
