import { css, styled } from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '2.5rem'};
  ${(props) => colors[props.$color]};
`;

const colors = {
  green: css`
    color: white;
    background-color: #66cdaa;
    &:hover {
      background-color: #60c1a0;
    }
  `,
  blue: css`
    color: white;
    background-color: #7ec8e3;
    &:hover {
      background-color: #74b8d0;
    }
  `,
  grey: css`
    color: black;
    background-color: #ececec;
    &:hover {
      background-color: #e5e7eb;
    }
  `,
};

Button.defaultProps = {
  $color: 'green',
};

export default Button;
