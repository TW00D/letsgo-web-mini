import styled from "styled-components";

type TextItemProps = {
  selected: boolean;
};

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 75px;
  background-color: #fff;
  margin-top: -1.5%;
`;

export const SuggestionContainer = styled.div<TextItemProps>`
  width: 14%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  border-radius: 25px;

  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 200;
    font-family: "Pretendard";
    color: ${(props) => (props.selected ? "#db00ff" : "#D3D2DA")};
    background-image: ${(props) =>
      props.selected ? "linear-gradient(to right, #db00ff, #7945ec)" : "none"};
    -webkit-background-clip: text;
    background-clip: text;
  }
`;
