import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

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

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  align-items: flex-start;

  width: 360px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  /* Position was added here to make it works with react-spring animated.
  The right CSS property participates in specifying the horizontal position of
  a positioned element. It has no effect on non-positioned elements. */
  position: relative;

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
