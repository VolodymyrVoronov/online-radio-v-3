import React from "react";

import useStore from "../../store/app";

import { FILTER_TYPES } from "./../../helpers/const";

import { BsStarFill } from "react-icons/bs";

import {
  StationsFilterContainer,
  FilterButton,
  IconWrapper,
} from "./StationsFilter.styled";

const StationsFilter = () => {
  const { onlineRadioStations, getFilterType } = useStore();

  const [activeAllStations, setActiveAllStations] = React.useState(true);
  const [activeFavorite, setActiveFavorite] = React.useState(false);

  const areThereAnyFavorite = onlineRadioStations.some(
    (station) => station.isFavorite
  );

  const onAllStationsClick = () => {
    getFilterType(FILTER_TYPES.ALL_STATIONS);
    setActiveAllStations(true);
    setActiveFavorite(false);
  };

  const onFavoriteClick = () => {
    getFilterType(FILTER_TYPES.FAVORITE);
    setActiveAllStations(false);
    setActiveFavorite(true);
  };

  return (
    <StationsFilterContainer>
      <FilterButton
        onClick={() => onAllStationsClick()}
        activeAllStations={activeAllStations}
        disabled={activeAllStations}
        type="button"
      >
        All stations
      </FilterButton>
      <FilterButton
        onClick={() => onFavoriteClick()}
        areThereAnyFavorite={areThereAnyFavorite}
        activeFavorite={activeFavorite}
        disabled={activeFavorite}
        type="button"
      >
        Favorite
        <IconWrapper
          areThereAnyFavorite={areThereAnyFavorite}
          activeFavorite={activeFavorite}
        >
          <BsStarFill />
        </IconWrapper>
      </FilterButton>
    </StationsFilterContainer>
  );
};

export default StationsFilter;
