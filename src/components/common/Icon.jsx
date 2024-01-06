import { styled } from 'styled-components';

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: #6b7280;
  }
`;

function Icon({ icon }) {
  return <IconWrapper>{icon}</IconWrapper>;
}

export default Icon;
