import styled, { keyframes, css } from "styled-components";

import { device } from "../../helpers/const";

const StationsContainer = styled.section`
  display: ${(props) => (props.showStations ? `none` : `flex`)};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 600px;
  height: 100%;

  margin: 0;
  padding: 0;

  margin-right: 25px;

  @media ${device.mobileS} {
    flex-direction: column;

    width: 320px;

    margin-right: 0;
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

  @media ${device.laptop} {
    width: 500px;
  }

  @media ${device.laptopL} {
    flex-direction: row;

    width: 600px;

    margin-right: 25px;
  }
`;

const NoFavoritesTitle = styled.p`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  margin: 0;
  padding: 0;

  margin-left: 5px;

  font-family: "Turret Road", cursive;
  font-size: 30px;
  line-height: 34px;

  color: #ffffff;

  @media ${device.mobileS} {
    margin-left: 0;

    padding-bottom: 15px;

    text-align: center;
    border-bottom: 3px dotted orange;
  }

  @media ${device.mobileM} {
    font-size: 32px;
    line-height: 36px;
  }

  @media ${device.mobileL} {
    padding: 0 15px 15px;
  }

  @media ${device.tablet} {
    border-bottom: none;
  }

  @media ${device.laptopL} {
    padding: 0;

    font-size: 30px;
    line-height: 34px;
  }
`;

const StationsShowButton = styled.button`
  display: flex;
  justify-content: center;

  width: auto;

  margin: 0;
  padding: 0;

  margin: 0 10px 25px 10px;
  padding: 10px 0;

  font-family: "Turret Road", cursive;
  font-size: 28px;
  line-height: 28px;

  color: #ffffff;

  background-color: #2b2b2b;

  border: 3px solid orange;
  border-radius: 50px;

  outline: none;

  transition: 0.5s ease;

  &:hover {
    color: #2b2b2b;
    background-color: orange;

    transition: 0.5s ease;

    cursor: pointer;
  }

  @media (pointer: coarse) {
    &:hover {
      color: #ffffff;

      background-color: #2b2b2b;
    }
  }
`;

const stationsShowButtonIconAnimationDown = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(5px);}
  100% { transform: translateY(0px); }
`;

const stationsShowButtonIconAnimationUp = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px);}
  100% { transform: translateY(0px); }
`;

const StationsShowButtonIcon = styled.span`
  display: block;

  margin: 0;
  padding: 0;

  margin-left: 10px;

  ${(props) =>
    props.showStations
      ? css`
          animation: 2s ${stationsShowButtonIconAnimationDown} infinite;
        `
      : css`
          animation: 2s ${stationsShowButtonIconAnimationUp} infinite;
        `};
`;

const StationBlock = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  width: 297px;

  margin: 0;
  padding: 0;

  margin-bottom: 10px;
  padding: 5px;

  background-color: #2b2b2b;

  border: 3px dotted orange;
  border-radius: 50px;

  transition: 0.5s ease;

  &:nth-child(even) {
    margin-right: 5px;
  }

  @media ${device.mobileS} {
    width: 300px;

    margin: 0 auto;
    margin-bottom: 5px;

    &:nth-child(even) {
      margin: 0 auto;
      margin-bottom: 5px;
    }
  }

  @media ${device.mobileM} {
    width: 350px;
  }

  @media ${device.mobileL} {
    width: 410px;
  }

  @media ${device.tablet} {
    width: 300px;
  }

  @media ${device.laptop} {
    width: 484px;
  }

  @media ${device.laptopL} {
    width: 290px;

    margin: 0;
    margin-bottom: 10px;

    &:nth-child(even) {
      margin: 0;
      margin-right: 5px;
      margin-bottom: 10px;
    }
  }

  ${(props) =>
    props.isClicked
      ? css`
          background-color: #434343;

          border: 3px solid orange;
        `
      : css`
          &:hover {
            background-color: #434343;

            border: 3px solid orange;

            transition: 0.5s ease;
          }
        `}
`;

const StationBlockHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-direction: row;
  flex-grow: 1;

  margin: 0;
  padding: 0;

  padding-left: 10px;
`;

const StationTitle = styled.p`
  display: flex;

  margin: 0;
  padding: 0;

  font-family: "Turret Road", cursive;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffffff;
`;

const ButtonFavorite = styled.div`
  display: flex;

  margin: 0;
  padding: 0;

  margin-left: auto;
  margin-right: 15px;

  font-family: "Turret Road", cursive;
  font-size: 18px;
  line-height: 18px;

  color: #ffffff;

  transition: 0.5s ease;
  ${(props) =>
    props.isFavorite
      ? css`
          color: orange;

          &:hover {
            cursor: pointer;

            transition: 0.5s ease;
          }
        `
      : css`
          &:hover {
            cursor: pointer;

            transition: 0.5s ease;
          }

          @media (pointer: coarse) {
            &:hover {
              color: #ffffff;
            }
          }
        `}
`;

const ControlsBlock = styled.div`
  display: flex;
  justify-content: center;

  margin: 0;
  padding: 0;
`;

const blinkingAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`;

const PlayButton = styled.div`
  display: flex;

  margin: 0;
  padding: 0;

  font-family: "Turret Road", cursive;
  font-size: 30px;
  line-height: 30px;

  color: #ffffff;

  background-color: transparent;

  transition: 0.5s ease;

  ${(props) =>
    props.isClicked
      ? css`
          animation: 3s ${blinkingAnimation} infinite;
          color: orange;
        `
      : css`
          &:hover {
            color: orange;

            cursor: pointer;

            transition: 0.5s ease;
          }
        `}
`;

export {
  StationsContainer,
  StationBlock,
  StationBlockHeader,
  StationTitle,
  ButtonFavorite,
  ControlsBlock,
  PlayButton,
  NoFavoritesTitle,
  StationsShowButton,
  StationsShowButtonIcon,
};
