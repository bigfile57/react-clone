import React, { useState } from "react";
import ContentsContainer from "./components/ContentsContainer";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const HeaderStyle = styled.header`
  width : 100%;
  background-color: #91a7d4;
`

const App = () => {
  const [pageName, setPageName] = useState("docs");

  // 익명함수로 바인딩
  const SetControlPage = (e) => {
    setPageName(e.target.id);
  }
  const HeaderNav = () => {
    const HeaderNavStyle = styled.nav`
      background-color: #000;
      color : #fff;
      display : flex;
      width : 100%;
      border : 1px solid black;
      padding : 20px 20px;
      span{
        margin-left: 40px;
      }
      ul{
        display : flex;
        margin : 0 auto;
        li{
          padding : 0 16px;
        }
      }
    `;
    return (
      <HeaderNavStyle>
          <span>React</span>
          <ul>
              <li id="docs" onClick={SetControlPage}>
                문서
              </li>
              <li id="practice" onClick={SetControlPage}>
                자습서
              </li>
              <li id="blog" onClick={SetControlPage}>
                블로그
              </li>
              <li id="community" onClick={SetControlPage}>
                커뮤니티
              </li>
          </ul>
          <div>
            search
          </div>
      </HeaderNavStyle>
    )
  }

  const StartButtons = () => {
    return (
      <>
        <button>시작하기</button>
        <button>자습서 읽어보기</button>
      </>
    )
  }

  const HeaderMain = () => {
    const HeaderMainStyle = styled.section`
      background-color: #282c34;
      color : #fff;
      padding : 95px 66px 85px;
      text-align : center;
      h1{
        color : #61dafb;
        font-size : 60px;
      }
      p{
        margin-top : 20px;
        line-height : 34.5px;
        font-size : 30px;
      }
    `
    return (
      <HeaderMainStyle>
        <h1>React</h1>
        <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
        <StartButtons />
      </HeaderMainStyle>
    )
  }

    return (
    <>
    <GlobalStyles />
      <HeaderStyle>
        <HeaderNav />
        <HeaderMain />
      </HeaderStyle>
        <ContentsContainer pageName={pageName} />
    </>
    );
};

export default App;
