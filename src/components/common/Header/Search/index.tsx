import { useState, useRef, useEffect } from "react";
import * as s from "./style";
import SearchIcon from "../../../../assets/search.svg";

const Search = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContainerClick = () => {
    setInputVisible(true);
  };

  return (
    <s.SearchContainer onClick={handleContainerClick}>
      <s.SearchWrap>
        <img src={SearchIcon} alt="error" />
        {isInputVisible ? (
          <input
            type="text"
            placeholder="Search..."
            ref={inputRef}
            autoFocus
          />
        ) : (
          <span>Search...</span>
        )}
      </s.SearchWrap>
    </s.SearchContainer>
  );
};

export default Search;
