import { styled } from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 0.5rem;
  transition: all 0.5s;
  padding: 2.5rem 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  @media (min-width: 480px) {
    width: 20.375rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

function Modal({ children }) {
  return (
    <Overlay>
      <Wrapper>{children}</Wrapper>
    </Overlay>
  );
}

export default Modal;
