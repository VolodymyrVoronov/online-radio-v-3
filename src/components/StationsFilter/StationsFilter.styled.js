import styled, { css } from "styled-components";

import { device } from "../../helpers/const";

const StationsFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 0;
  padding: 0;

  margin-bottom: 25px;

  @media ${device.mobileS} {
    flex-direction: column;

    margin: 0 auto;

    margin-bottom: 15px;
  }

  @media ${device.laptop} {
    flex-direction: row;

    margin: 0;

    margin-bottom: 25px;
  }
`;

const FilterButton = styled.button`
  display: block;

  width: 297px;

  margin: 0;
  padding: 0;
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

  &:nth-child(1) {
    margin-right: 5px;
  }

  @media ${device.mobileS} {
    width: 300px;

    padding: 5px 0;

    font-size: 25px;
    line-height: 25px;

    &:nth-child(1) {
      margin-bottom: 5px;
      margin-right: 0;
    }
  }

  @media ${device.mobileM} {
    width: 350px;

    padding: 7px 0;
  }

  @media ${device.mobileL} {
    width: 410px;

    padding: 8px 0;
  }

  @media ${device.tablet} {
    width: 300px;
  }

  @media ${device.laptop} {
    width: 240px;

    &:nth-child(1) {
      margin-bottom: 0;
      margin-right: 5px;
    }
  }

  @media ${device.laptopL} {
    width: 290px;

    padding: 10px 0;

    font-size: 28px;
    line-height: 28px;
  }

  &:hover {
    color: #2b2b2b;
    background-color: orange;

    transition: 0.5s ease;

    cursor: pointer;

    ${(props) =>
      props.areThereAnyFavorite
        ? css`
            span {
              color: #2b2b2b;

              transition: 0.5s ease;
            }
          `
        : null}
  }

  ${(props) =>
    props.activeAllStations
      ? css`
          color: #2b2b2b;
          background-color: orange;

          &:hover {
            cursor: default;
          }
        `
      : null}

  ${(props) =>
    props.activeFavorite
      ? css`
          color: #2b2b2b;
          background-color: orange;

          &:hover {
            cursor: default;
          }
        `
      : null}
`;

const IconWrapper = styled.span`
  padding-left: 20px;

  font-size: 24px;
  line-height: 24px;

  @media ${device.mobileS} {
    font-size: 20px;
    line-height: 20px;
  }

  @media ${device.laptopL} {
    font-size: 24px;
    line-height: 24px;
  }

  ${(props) =>
    props.areThereAnyFavorite
      ? css`
          color: orange;

          transition: 0.5s ease;
        `
      : css`
          color: #ffffff;

          transition: 0.5s ease;
        `};

  ${(props) =>
    props.activeFavorite
      ? css`
          color: #2b2b2b;
        `
      : null}
`;

export { StationsFilterContainer, FilterButton, IconWrapper };
