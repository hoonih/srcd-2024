import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../assets/HeaderLogo";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderLogo />
      </HeaderTitle>
      <HeaderBtnBox>
        <HeaderBtn>
          <Link to={"/"}>시연회 소개</Link>
        </HeaderBtn>
        <HeaderBtn>
          <Link to={"/clubs"}>동아리 목록</Link>
        </HeaderBtn>
        <HeaderBtn>
          <Link to={"/faq"}>FAQ</Link>
        </HeaderBtn>
      </HeaderBtnBox>
      <HeaderLinkBtn>지원 폼 작성하기</HeaderLinkBtn>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

const HeaderTitle = styled.h1``;

const HeaderBtnBox = styled.div``;

const HeaderBtn = styled.button``;

const HeaderLinkBtn = styled.button``;
