import ItemContainer from "component/itemContainer/ItemContainer";
import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export default function ListContainer() {
  const colorList = ["red", "wheat", "green", "orange"];

  return (
    <ListWrapper>
      {colorList.map((data) => {
        return <ItemContainer color={data} />;
      })}
    </ListWrapper>
  );
}
