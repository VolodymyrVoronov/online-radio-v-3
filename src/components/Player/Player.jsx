import React from "react";

import Animate from "react-smooth";

import useStore from "../../store/app";

import ReactHowler from "react-howler";

import { NoStationSelected } from "./../NoStationSelected/NoStationSelected";

import {
  FiPlayCircle,
  FiPauseCircle,
  FiVolume1,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

import {
  PlayerContainer,
  StationTitle,
  PlayerControls,
  PlayButton,
  VolumeControl,
  VolumeButton,
  VolumeRange,
} from "./Player.styled";

const Player = React.memo(() => {
  const { stationToPlay, isPlayButtonClick, setIsPlayButtonClick } = useStore();

  const [muted, setMuted] = React.useState(false);
  const [volume, setValue] = React.useState(1);
  const [lastVolume, setLastVolume] = React.useState(1);
  const [error, setError] = React.useState(false);

  const { name, streamUrl } = stationToPlay[0] || [];

  React.useEffect(() => {
    setIsPlayButtonClick(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPlayPauseClickHandler = () => {
    setIsPlayButtonClick(!isPlayButtonClick);
  };

  const onMuteClick = () => {
    setMuted(!muted);

    if (muted) {
      setValue(lastVolume);
    }

    if (!muted) {
      setValue(0);
    }
  };

  const onVolumeChange = (e) => {
    setValue(+e.nativeEvent.target.value);
    setLastVolume(+e.nativeEvent.target.value);

    if (+e.target.value === 0) {
      setMuted(true);
    }

    if (+e.target.value !== 0) {
      setMuted(false);
    }
  };

  const onErrorChangeHandler = () => {
    setError(true);
    console.log(error);
  };

  return (
    <PlayerContainer>
      {stationToPlay.length === 0 ? (
        <NoStationSelected />
      ) : (
        <>
          <StationTitle>Stream: </StationTitle>
          <StationTitle>{name}</StationTitle>
          <PlayerControls>
            <PlayButton onClick={onPlayPauseClickHandler}>
              {isPlayButtonClick ? <FiPauseCircle /> : <FiPlayCircle />}
            </PlayButton>
          </PlayerControls>
          <Animate
            from="1"
            to="0.5"
            attributeName="opacity"
            isActive={!isPlayButtonClick}
          >
            <VolumeControl>
              <VolumeButton onClick={onMuteClick}>
                {muted ? (
                  <FiVolumeX />
                ) : volume > 0.0 && volume < 0.65 ? (
                  <FiVolume1 />
                ) : (
                  <FiVolume2 />
                )}
              </VolumeButton>
              <Animate
                from="1"
                to="0.5"
                attributeName="opacity"
                isActive={muted}
              >
                <VolumeRange
                  type="range"
                  min="0"
                  max="1"
                  step=".05"
                  value={volume}
                  onChange={(e) => onVolumeChange(e)}
                />
              </Animate>
            </VolumeControl>
          </Animate>
          <ReactHowler
            src={streamUrl}
            playing={isPlayButtonClick}
            html5={true}
            mute={muted}
            volume={volume}
            onLoadError={onErrorChangeHandler}
          />
        </>
      )}
    </PlayerContainer>
  );
});

export default Player;
