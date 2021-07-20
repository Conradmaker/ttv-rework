import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  cursor: pointer;
  p {
    padding-left: 1rem;
    display: flex;
    align-items: center;
  }
  ul {
    position: absolute;
    top: 1.4rem;
    height: 0px;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid #eee;
    background-color: #fff;
    li > a {
      display: block;
      white-space: nowrap;
      padding: 0.7rem 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &:hover {
    ul {
      opacity: 1;
      height: 5rem;
    }
  }
`;
