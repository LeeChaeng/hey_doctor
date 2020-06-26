import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Input = () => {
  return (
    <Page>
      <Title>건강검진 이력 입력</Title>
      <Box>
        건강 검진 년도 :{" "}
        <Combo>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </Combo>
      </Box>
      <Box>
        나이 :{" "}
        <Combo>
          <option value="1">0~4세</option>
          <option value="2">5~9세</option>
          <option value="3">10~14세</option>
          <option value="4">15~19세</option>
          <option value="5">20~24세</option>
          <option value="6">25~29세</option>
          <option value="7">30~34세</option>
          <option value="8">35~39세</option>
          <option value="9">40~44세</option>
          <option value="10">45~49세</option>
          <option value="11">50~54세</option>
          <option value="12">55~59세</option>
          <option value="13">60~64세</option>
          <option value="14">65~69세</option>
          <option value="15">70~74세</option>
          <option value="16">75~79세</option>
          <option value="17">80~84세</option>
          <option value="18">85세+</option>
        </Combo>
      </Box>
      <Box>
        체중, 키 : <Text></Text>
      </Box>
      <Box>
        혈압
        <Box>
          수축기 혈압 : <Text></Text>
        </Box>
        <Box>
          이완기 혈압 : <Text></Text>
        </Box>
      </Box>
      <Box>
        식전 혈당(공복 혈당) : <Text></Text>
      </Box>
      <Box>
        총 콜레스테롤 : <Text></Text>
      </Box>
      <Box>
        (혈청지오티)AST : <Text></Text>
      </Box>
      <Box>
        (혈청지오티)ALT : <Text></Text>
      </Box>
      <Wrap>
        <Link to="/Home">
          <Button>확인</Button>
        </Link>
      </Wrap>
    </Page>
  );
};

const Page = styled.div`
  margin: 0 auto; /*페이지 중앙에 나타나록 설정*/
  margin-top: 10px;
  background-color: white;
  width: 50%;
  height: 700px;
  border-radius: 2em;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  padding-bottom: 1em;
  padding-top: 0.5em;
`;

const Box = styled.div`
  margin: 10px;
  font-size: 20px;
  padding: 5px;
`;

const Wrap = styled.div`
  text-align: center;
`;

const Button = styled.a`
  transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
  display: block;
  margin: 20px auto;
  max-width: 180px;
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 30px;
  color: rgba(16, 59, 181, 0.6);
  box-shadow: rgba(16, 59, 181, 0.4) 0 0px 0px 2px inset;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(16, 59, 181, 0.7) 0 0px 0px 40px inset;
  }
`;

const Text = styled.input`
  width: 200px;
  padding: 0.5em 0.5em;
  display: inline-block;
  border: 1px solid #999;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Combo = styled.select`
  width: 200px;
  padding: 0.5em 0.5em;
  font-family: inherit;
  background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg)
    no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #999;
  border-radius: 4px;
`;

export default Input;
