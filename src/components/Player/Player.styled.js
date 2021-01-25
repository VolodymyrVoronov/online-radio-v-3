import styled from "styled-components";

import { device } from "../../helpers/const";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 600px;

  margin: 0;
  padding: 0;

  @media ${device.mobileS} {
    width: 320px;

    margin: 0 auto;
    margin: 25px 0 50px 0;
  }

  @media ${device.mobileM} {
    width: 375px;
  }

  @media ${device.mobileL} {
    width: 425px;
  }

  @media ${device.tablet} {
    width: 380px;
    margin-top: 0px;
  }

  @media ${device.laptop} {
    width: 500px;
  }

  @media ${device.laptopL} {
    width: 600px;
  }
`;

const StationTitle = styled.p`
  display: flex;

  margin: 0;
  padding: 0;

  font-family: "Turret Road", cursive;
  font-size: 26px;
  line-height: 29px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffffff;
`;

const PlayerControls = styled.section`
  display: flex;

  margin: 0;
  padding: 0;

  margin-top: 15px;
`;

const PlayButton = styled.div`
  display: flex;

  margin: 0;
  padding: 0;

  font-family: "Turret Road", cursive;
  font-size: 250px;
  line-height: 250px;

  color: #ffffff;

  transition: 0.5s ease;

  @media ${device.tablet} {
    font-size: 200px;
    line-height: 200px;
  }

  @media ${device.laptop} {
    font-size: 225px;
    line-height: 250px;
  }

  @media ${device.laptopL} {
    font-size: 250px;
    line-height: 250px;
  }

  &:hover {
    color: orange;

    transition: 0.5s ease;

    cursor: pointer;
  }
`;

const VolumeControl = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;

  margin-top: 15px;
`;

const VolumeButton = styled.div`
  display: flex;

  margin: 0;
  padding: 0;

  font-family: "Turret Road", cursive;
  font-size: 150px;
  line-height: 150px;

  color: #ffffff;

  transition: 0.5s ease;

  @media ${device.tablet} {
    font-size: 125px;
    line-height: 125px;
  }

  @media ${device.laptop} {
    font-size: 135px;
    line-height: 135px;
  }

  @media ${device.laptopL} {
    font-size: 150px;
    line-height: 150px;
  }

  &:hover {
    color: orange;

    transition: 0.5s ease;

    cursor: pointer;
  }
`;

const VolumeRange = styled.input`
  display: flex;

  margin-top: 25px;

  &[type="range"] {
    width: 250px;
    -webkit-appearance: none;

    @media ${device.tablet} {
      width: 200px;
    }

    @media ${device.laptop} {
      width: 225px;
    }

    @media ${device.laptopL} {
      width: 250px;
    }
  }

  &[type="range"]::-webkit-slider-runnable-track {
    height: 10px;
    background: #ffffff;
    border: none;
    border-radius: 3px;
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    margin-top: -8px;

    background: #000000;

    border-radius: 50%;
    border: 3px solid orange;

    transition: 0.5s ease;
  }

  &[type="range"]:focus {
    outline: none;
  }

  &[type="range"]::-webkit-slider-thumb:hover {
    background: orange;
    cursor: pointer;

    transition: 0.5s ease;
  }

  &[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ffffff;
  }
`;

export {
  PlayerContainer,
  StationTitle,
  PlayerControls,
  PlayButton,
  VolumeControl,
  VolumeButton,
  VolumeRange,
};
