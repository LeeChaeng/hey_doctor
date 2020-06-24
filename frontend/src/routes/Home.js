import React from "react";
import {} from "apexcharts";
import RChart from "../components/Chart";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

function Home() {
  return (
    <>
      <GlobalStyle />
      <Link to="/Input">입력하기</Link>
      <RChart />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background : #d1e9f5;
  }
`;

export default Home;
