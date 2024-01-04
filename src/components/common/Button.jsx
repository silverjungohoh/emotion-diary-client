import { css, styled } from 'styled-components';

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  ${(props) => sizes[props.$size]}
  ${(props) => colors[props.$color]}
`;

const sizes = {
  small: css`
    width: 70px;
    height: 40px;
  `,
  medium: css`
    width: 160px;
    height: 40px;
  `,
  large: css`
    width: 300px;
    height: 50px;
  `,
};

const colors = {
  green: css`
    background-color: #66cdaa;
    &:hover {
      background-color: #60c1a0;
    }
  `,
  blue: css`
    background-color: #7ec8e3;
    &:hover {
      background-color: #74b8d0;
    }
  `,
  grey: css`
    background-color: #ececec;
  `,
};

Button.defaultProps = {
  $color: 'green',
  $size: 'large',
};

export default Button;
