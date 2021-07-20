import styled from 'styled-components';

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
        width: 450px;
        height: 450px;
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
