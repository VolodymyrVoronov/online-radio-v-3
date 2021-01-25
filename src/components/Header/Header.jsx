import React from "react";

import { MdRadio } from "react-icons/md";

import { HeaderContainer, HeaderTitle, HeaderIcon } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Radio Record
        <HeaderIcon>
          <MdRadio />
        </HeaderIcon>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
