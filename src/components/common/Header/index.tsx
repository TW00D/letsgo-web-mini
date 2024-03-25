import Search from "./Search";
import { Toggle } from "./Toggle";
import Write from "./Write";
import * as h from "./style";

export function Header() {
  return (
    <>
      <h.HeaderContainer>
        <Toggle />
        <h.SuggestionContainer></h.SuggestionContainer>
        <Search />
        <Write />
      </h.HeaderContainer>
    </>
  );
}
