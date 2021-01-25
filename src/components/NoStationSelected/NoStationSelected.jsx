import React from "react";

import { MdRadio } from "react-icons/md";

import {
  NoStationSelectedContainer,
  NoStationTitle,
  NoStationIcon,
} from "./NoStationSelected.styled";

export const NoStationSelected = () => {
  return (
    <NoStationSelectedContainer>
      <NoStationTitle>Play some station.</NoStationTitle>
      <NoStationIcon>
        <MdRadio />
      </NoStationIcon>
    </NoStationSelectedContainer>
  );
};
