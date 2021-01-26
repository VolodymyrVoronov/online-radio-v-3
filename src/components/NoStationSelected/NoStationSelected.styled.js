import styled, { keyframes } from "styled-components";

import { device } from "../../helpers/const";

const NoStationSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileS} {
    width: 320px;

    margin: 0 auto;
  }

  @media ${device.mobileM} {
    width: 375px;
  }

  @media ${device.mobileL} {
    width: 425px;
  }

  @media ${device.tablet} {
    width: 380px;
  }

  @media ${device.laptopL} {
    width: 600px;
  }
`;

const NoStationTitle = styled.p`
  display: flex;

  margin: 0;
  padding: 0;

  font-family: "Turret Road", cursive;
  font-size: 26px;
  line-height: 29px;
  letter-spacing: 2px;
  text-transform: none;

  color: #ffffff;

  @media ${device.mobileS} {
    font-size: 22px;
    line-height: 26px;
    text-align: center;
  }

  @media ${device.mobileM} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${device.mobileS} {
    font-size: 26px;
    line-height: 29px;
  }
`;

const noStationIconAnimation = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  50% { transform: scale3d(1.1, 1.1, 1.1);}
  100% { transform: scale3d(1, 1, 1); }
`;

const NoStationIcon = styled.span`
  display: flex;

  margin: 0;
  padding: 0;

  margin-top: 45px;
  padding: 50px;

  font-family: "Turret Road", cursive;
  font-size: 160px;
  line-height: 160px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffffff;

  background-color: orange;

  border: 10px solid #ffffff;
  border-radius: 50%;

  animation: 5s ${noStationIconAnimation} infinite;

  @media ${device.mobileS} {
    margin-top: 25px;

    font-size: 70px;
    line-height: 70px;
  }

  @media ${device.mobileM} {
    font-size: 80px;
    line-height: 80px;
  }

  @media ${device.mobileS} {
    font-size: 90px;
    line-height: 90px;
  }

  @media ${device.laptopL} {
    font-size: 160px;
    line-height: 160px;
  }
`;

export { NoStationSelectedContainer, NoStationTitle, NoStationIcon };
