import { styled } from 'styled-components';

const TextInput = styled.input`
  width: 100%;
  height: ${(props) => props.height || '2.5rem'};
  border-radius: 0.5rem;
  border: 1px solid #bababa;
  padding: 0.5rem;
`;

export default TextInput;
