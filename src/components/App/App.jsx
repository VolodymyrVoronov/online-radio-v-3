import React from "react";

import Header from "./../Header/Header";
import Stations from "./../Stations/Stations";
import Player from "./../Player/Player";

import { AppContainer, ContentContainer } from "./App.styled";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Stations />
        <Player />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
