import { useState } from "react";
import * as t from "./style";
import { TOGGLE_ITEM } from "./constant";

export const Toggle: React.FC = () => {
    const [selected, setSelected] = useState<number>(0);
  
    const handleToggleClick = (index: number) => {
      setSelected(index);
    };
  
    return (
      <t.ToggleContainer>
        {TOGGLE_ITEM.map((item, index) => (
          <t.ToggleItem
            key={index}
            onClick={() => handleToggleClick(index)}
            selected={selected === index}
          >
            {item.title}
          </t.ToggleItem>
        ))}
      </t.ToggleContainer>
    );
};