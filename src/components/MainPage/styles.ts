import styled, { css } from 'styled-components';

export const BannerContainer = styled.section`
  height: 100vh;
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 0.1rem;
    article {
      h1 {
        font-size: 72px;
        line-height: 1.2;
        font-weight: 800;
      }
      p {
        margin: 2rem 0;
        font-size: 18px;
        line-height: 1.5;
      }
    }
    .banner__right {
      position: relative;
      .circle {
        width: 28.125rem;
        height: 28.125rem;
        border-radius: 62% 38% 50% 50% / 40% 58% 42% 60%;
        background: linear-gradient(210deg, #8c30f5, #f1e4ff);
      }
      & > img {
        border-radius: 0.5rem;
        position: absolute;
        top: 50%;
        transform: translate(-10%, -50%);
        width: 22rem;
        box-shadow: 4px 4px 8px #666;
      }
    }
  }
`;

export const ProgressInfoContainer = styled.section`
  background-color: #f6bf80;
  height: 20rem;
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    article {
      flex: 1;
      h2 {
        font-size: 32px;
        font-weight: bold;
      }
      & > ul {
        display: flex;
        margin-top: 4rem;
      }
    }
    img {
      height: 100%;
    }
  }
`;

export const ProgressStepBox = styled.li`
  position: relative;
  margin-right: 4rem;
  flex: 1;
  line-height: 1.2;
  h4 {
    margin: 2rem 0 1.3rem 0;
    font-weight: 600;
    font-size: 20px;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
  }
  &::before {
    top: -1rem;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    background-color: #f1e4ff;
  }
  &::after {
    top: 0;
    right: 0;
    width: 8rem;
    border-top: 1px dashed #999;
  }
`;

export const VVTDemoContainer = styled.form<{ textError: string }>`
  .inner {
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    padding: 7rem 0;
    h2 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }
    p {
      color: #fff;
      width: 100%;
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      span:last-of-type {
        color: #000;
      }
    }
    textarea {
      flex: 1;
      resize: none;
      padding: 2rem;
      width: 100%;
      border: 2px solid black;
      line-height: 1.8;
      letter-spacing: 0.12rem;
      word-spacing: 0.2rem;
      outline: none;
      transition: all 0.3s ease-in-out;
      background-color: rgba(255, 255, 255, 0.95);
      &:focus {
        border: 2px solid #8c30f5;
      }
      &::placeholder {
        text-align: center;
        font-size: 2rem;
      }
    }
    & > strong {
      margin: 0.5rem 0;
      height: 1rem;
      align-self: center;
      color: #c62828;
    }
    & > button {
      align-self: center;
    }
    .circle {
      z-index: -1;
      position: absolute;
      top: 2rem;
      left: -5rem;
      width: 28.125rem;
      height: 28.125rem;
      border-radius: 62% 38% 50% 50% / 40% 58% 42% 60%;
      background: radial-gradient(
        circle at 68.3% -18.3%,
        #ff57d2 0,
        #ff4edb 12.5%,
        #f046e3 25%,
        #d63feb 37.5%,
        #b53cf2 50%,
        #8c3df9 62.5%,
        #4f40ff 75%,
        #0046ff 87.5%,
        #004bff 100%
      );
    }
  }
  ${({ textError }) =>
    textError &&
    css`
      .inner {
        textarea {
          border: 2px solid #c62828 !important;
        }
      }
    `}
`;
