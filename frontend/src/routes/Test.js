import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";

const InputPage = () => {
  return (
    <>
      <GlobalStyle />
      <MainButton>
        <div className="in-line">
          <input type="text" defaultValue="" placeholder="이메일 주소입력" />
          <input type="button" defaultValue="JOIN" />
        </div>
      </MainButton>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background : #d1e9f5;
  }
`;
const MainButton = styled.div`
  .in-line {
    width: 350px;
    height: 40px;
  }

  input {
    margin: 0;
  }

  input[type="text"] {
    width: 70%;
    height: 100%;
    border: none;
    font-size: 1em;
    padding-left: 5px;
    font-style: oblique;
    box-sizing: border-box;
    color: black;
  }
  input[type="button"] {
    width: 30%;
    height: 100%;
    background-color: lightgray;
    border: none;
    background-color: white;
    font-size: 1em;
    color: #042aac;
    outline: none;
    margin-left: -10px;
    box-sizing: border-box;
  }
  input[type="button"]:hover {
    background-color: lightgray;
  }
`;

export default InputPage;
