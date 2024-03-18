import { NAV_SCORE } from "./constant";
import * as N from "./style";

const NavScore = () => {
  return (
    <>
      <N.NavContainer>
        {NAV_SCORE.map((score) => {
          return (
            <N.NavWraper>
              <N.NavScoreNumber>{score.score}</N.NavScoreNumber>
              <N.NavScoreTitle>{score.title}</N.NavScoreTitle>
            </N.NavWraper>
          );
        })}
      </N.NavContainer>
    </>
  );
};

export default NavScore;
