import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styled";
import { goToPokedex } from "../../routes/coordinator";

const Header = ({ leftButtonFunction, title, showRightButton }) => {
  const history = useHistory();

  const leftButtonTitle = () => {
    switch (title) {
      case "Pokemons List":
        return "Go to Pokedex";
      case "Pokedex":
        return "Go back to Pokemons List";
      default:
        return "Go back";
    }
  };

  return (
    <HeaderContainer>
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      <h1>{title}</h1>
      {showRightButton && (
        <RightHeaderButton onClick={() => goToPokedex(history)}>
          Go to Pokedex
        </RightHeaderButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
