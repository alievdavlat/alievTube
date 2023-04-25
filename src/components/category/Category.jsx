import { Stack } from "@mui/material";
import React from "react";
import { category } from "../../constants/Index";
import { Colors } from "../../constants/Colors";

function Category({ selectedCategoryHandle, selectedCategory }) {
  return (
    <Stack
      direction={"row"}
      sx={{
       
        borderBottom: `1px solid ${Colors.secondary}`,
      }}>
      {category.map((item) => {
        return (
          <button
            key={item.name}
            className="category-btn"
            style={{
              borderRadius: "0",
              background: item.name === selectedCategory && Colors.secondary,
              color: item.name === selectedCategory && '#fff' 
            }}
            onClick={() => selectedCategoryHandle(item.name)}>
            <span style={{ color: item.name === selectedCategory ? '#fff' : Colors.secondary, marginRight: "15px" }}>
              {item.icon}
            </span>
            <span style={{ opacity: "1" }}>{item.name}</span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Category;
