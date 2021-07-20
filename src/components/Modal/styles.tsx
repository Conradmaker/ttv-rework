import styled from 'styled-components';
import { breath, fadeIn, slideUp } from 'src/utils/animations';

export const ModalWrappertContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ModalBox = styled.div`
  padding: 1.5rem 2rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.6rem #888;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.background.initial};
  animation: ${slideUp} 0.3s ease-in-out;
  position: relative;
  h2 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
`;

export const LoginModalBox = styled(ModalBox)`
  width: 30rem;
  .input__common + .input__common {
    margin: 1.2rem 0;
  }
  button {
    margin-top: 0.4rem;
  }
  .btn__wrapper {
    display: flex;
    button + button {
      margin-left: 0.7rem;
    }
  }
`;

export const TermModalBox = styled(ModalBox)`
  width: 63rem;
  h2 {
    margin: 0;
  }
  p {
    margin: 1.3rem 0;
  }
  ul {
    margin-bottom: 1rem;
    li {
      line-height: 1.2;
      &::before {
        content: '- ';
      }
    }
  }
`;

export const LoadingModalBox = styled(ModalBox)`
  width: 20rem;
  padding: 0;
  overflow: hidden;
  img {
    width: 100%;
  }
  span {
    font-weight: bold;
    position: absolute;
    bottom: 1.8rem;
    left: 0;
    right: 0;
    text-align: center;
    transform: translateX(-50%);
    animation: ${breath} 0.7s ease-in-out alternate infinite;
  }
`;
