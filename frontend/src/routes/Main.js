import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const InputPage = () => {
  return (
    <>
      <GlobalStyle />
      <Total>
        <Title>hey Doctor</Title>
        <MainButton>
          <input
            type="text"
            className="text"
            defaultValue=""
            placeholder="본인 확인 코드를 입력하세요"
          />
          <Link to="/Home" className="button">
            <input type="button" className="button" defaultValue="JOIN" />
          </Link>
        </MainButton>
        <Link to="/Find" style={{ textDecoration: "none" }}>
          <Text>코드를 잊어버리셨나요?</Text>
        </Link>
      </Total>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background : #d1e9f5;
  }
`;

const Total = styled.div`
  margin-top: 280px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Text = styled.div`
  text-align: center;
  color: gray;
  font-style: oblique;
  padding-top: 10px;
  cursor: pointer;
`;

const MainButton = styled.div`
  margin: 0 auto; /*페이지 중앙에 나타나록 설정*/
  border-radius: 16px;

  width: 350px;
  height: 40px;

  input {
    margin: 0;
  }

  .text {
    width: 70%;
    height: 100%;
    border: none;
    font-size: 1em;
    padding-left: 5px;
    font-style: oblique;
    box-sizing: border-box;
    color: black;
    outline: none;
  }
  .button {
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
  .button:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

export default InputPage;
