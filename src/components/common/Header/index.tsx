import { useState } from "react";
import Search from "./Search";
import { Toggle } from "./Toggle";
import Write from "./Write";
import * as h from "./style";

export function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSuggestionClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <h.HeaderContainer>
      <Toggle />
      <h.SuggestionContainer
        selected={isClicked}
        onClick={handleSuggestionClick}
        style={{
          color: isClicked ? "transparent" : "#D3D2DA",
          backgroundImage: isClicked
            ? "linear-gradient(to right, #db00ff, #7945ec)"
            : "none",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          border: isClicked ? "1px solid #7945ec" : "1px solid #d3d2da",
        }}
      >
        <span>추천</span>
      </h.SuggestionContainer>
      <Search />
      <Write />
    </h.HeaderContainer>
  );
}
