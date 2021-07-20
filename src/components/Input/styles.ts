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

export const CommonInputBox = styled.fieldset`
  width: 100%;
  label {
    font-weight: bold;
    display: block;
  }
  input {
    width: 100%;
    font-size: 16px;
    padding: 0.3rem 0.5rem;
    border: 3px solid #eee;
    border-radius: 5px;
    background-color: #eee;
    outline: none;
    transition: all 0.3s;
    &:hover,
    &:focus {
      border: 3px solid #ccc;
      background-color: #fff;
    }
    &:invalid {
      border: 3px solid #c62828;
    }
  }
`;
