import React from "react";

import Animate from "react-smooth";

import useStore from "../../store/app";

import StationsFilter from "./../StationsFilter/StationsFilter";

import { useWindowDimensions } from "./../../hooks/useWindowDimensions";

import { FILTER_TYPES } from "./../../helpers/const";

import { BsStarFill } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";
import { MdLens } from "react-icons/md";

import {
  StationsContainer,
  StationsShowButton,
  StationBlock,
  StationBlockHeader,
  StationTitle,
  ButtonFavorite,
  ControlsBlock,
  PlayButton,
  NoFavoritesTitle,
} from "./Stations.styled";

const Stations = () => {
  const {
    onlineRadioStations,
    setStationToPlay,
    setActiveIndex,
    activeIndex,
    addToFavorite,
    setLocalStorage,
    getFromLocalStorage,
    filterType,
    setIsPlayButtonClick,
  } = useStore();

  const [showStations, setShowStations] = React.useState(false);

  const widthOfDisplay = useWindowDimensions().width;

  React.useEffect(() => {
    getFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (widthOfDisplay > 768) {
      setShowStations(false);
    }
  }, [widthOfDisplay]);

  const onAddToFavoriteClick = (id) => {
    addToFavorite(id);
    setLocalStorage();
  };

  const onPlayClick = (id) => {
    setStationToPlay(id);
    setActiveIndex(id);
    setIsPlayButtonClick(true);
  };

  const onShowStationsClick = () => {
    setShowStations(!showStations);
  };

  const getFilteredStations = (filter, stations) => {
    if (filter === FILTER_TYPES.ALL_STATIONS) {
      return stations;
    }

    if (filter === FILTER_TYPES.FAVORITE) {
      return stations.filter((station) => station.isFavorite);
    }
  };

  const filteredStations = getFilteredStations(filterType, onlineRadioStations);

  const areThereAnyFavorites = filteredStations.some(
    (station) => station.isFavorite
  );

  return (
    <>
      <>
        {widthOfDisplay < 768 ? (
          <StationsShowButton
            onClick={() => onShowStationsClick()}
            type="button"
          >
            {showStations ? `Show stations` : `Hide stations`}
          </StationsShowButton>
        ) : null}
      </>

      <StationsContainer showStations={showStations}>
        <StationsFilter />
        {!areThereAnyFavorites && filterType === FILTER_TYPES.FAVORITE ? (
          <NoFavoritesTitle>You haven't favorite radios yet.</NoFavoritesTitle>
        ) : null}
        {filteredStations.map((station) => {
          const { id, name, isFavorite } = station;
          return (
            <Animate key={id} from="0.5" to="1" attributeName="opacity">
              <StationBlock isClicked={activeIndex === id}>
                <StationBlockHeader>
                  <StationTitle>{name}</StationTitle>
                  <ButtonFavorite
                    isFavorite={isFavorite}
                    onClick={() => onAddToFavoriteClick(id)}
                  >
                    <BsStarFill />
                  </ButtonFavorite>
                </StationBlockHeader>
                <ControlsBlock>
                  <PlayButton
                    isClicked={activeIndex === id}
                    onClick={() => onPlayClick(id)}
                  >
                    {activeIndex === id ? <MdLens /> : <FiPlayCircle />}
                  </PlayButton>
                </ControlsBlock>
              </StationBlock>
            </Animate>
          );
        })}
      </StationsContainer>
    </>
  );
};

export default Stations;
