import styled from "styled-components";

import { device } from "../../helpers/const";

import HeaderBgPattern from "../../assets/header/header-bg-pattern.jpg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  margin: 0;
  padding: 0;

  background-color: #2b2b2b;
  background-image: url(${HeaderBgPattern});
  background-repeat: repeat;

  border-bottom: 3px solid orange;
`;

const HeaderTitle = styled.h1`
  display: flex;

  margin: 0;
  padding: 0;

  padding: 5px 0 0 0;

  font-size: 42px;
  line-height: 48px;
  font-weight: 800;
  color: #ffffff;

  @media ${device.mobileS} {
    font-size: 32px;
    line-height: 40px;
  }

  @media ${device.mobileM} {
    font-size: 34px;
    line-height: 42px;
  }

  @media ${device.mobileL} {
    font-size: 36px;
    line-height: 44px;
  }

  @media ${device.tablet} {
    font-size: 38px;
    line-height: 46px;
  }

  @media ${device.laptop} {
    font-size: 42px;
    line-height: 48px;
  }
`;

const HeaderIcon = styled.span`
  display: block;

  margin: 0;
  padding: 0;

  margin-left: 15px;
`;

export { HeaderContainer, HeaderTitle, HeaderIcon };
