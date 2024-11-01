import React, { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { addTodo } from "./features/todos/todoSlicer";
import { useDispatch } from "react-redux";

export default function AddButton() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddClick = () => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
    }
    setInputValue("");
  };

  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          variant="outlined"
          label="Add Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: "437px", marginTop: "45px" }}
          sx={{ marginRight: 1 }}
        />

        <IconButton
          color="primary"
          onClick={handleAddClick}
          style={{ marginTop: "45px" }}
          aria-label="add"
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>
    </div>
  );
}
