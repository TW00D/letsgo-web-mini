import styled from "styled-components";

type ToggleItemProps = {
  selected: boolean;
};

export const ToggleContainer = styled.div`
  display: flex;
  width: 20%;
  margin-left: 2%;
`;
export const ToggleWrap = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #d3d2da;

  cursor: pointer;
`;

export const ToggleItem = styled.div<ToggleItemProps>`
  flex: 1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#db00ff" : "#D3D2DA")};
  background-image: ${(props) =>
    props.selected ? "linear-gradient(to right, #db00ff, #7945ec)" : "none"};
  -webkit-background-clip: text;
  background-clip: text;
  border-radius: 25px;
  border: 1px solid ${(props) => (props.selected ? "#7945ec" : "#d3d2da")};
  margin-right: 5px;
`;
