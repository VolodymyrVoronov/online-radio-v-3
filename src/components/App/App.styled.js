import styled from "styled-components";

import { device } from "../../helpers/const";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 1200px;

  margin: 0 auto;
  margin-top: 25px;

  @media ${device.mobileS} {
    flex-direction: column;

    width: 320px;

    margin: 0 auto;
    margin-top: 15px;
  }

  @media ${device.mobileM} {
    width: 375px;
  }

  @media ${device.mobileL} {
    width: 425px;
  }

  @media ${device.tablet} {
    flex-direction: row;

    width: 768px;
  }

  @media ${device.laptop} {
    width: 1024px;
  }

  @media ${device.laptopL} {
    width: 1200px;
  }
`;

export { AppContainer, ContentContainer };
