import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, List, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "./features/todos/todoSlicer";

export default function DisplayTodo() {
  const todo = useSelector((state) => state.todo);
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSave = (id) => {
    dispatch(editTodo({ index: id, editValue: editValue }));
    setEditIndex(null);
    setEditValue("");
  };

  const handleEdit = (id, item) => {
    setEditValue(item);
    setEditIndex(id);
  };
  console.log(todo, "my todo");
  const display = (
    <>
      {todo.map((item, k) => (
        <div
          style={{
            width: "27em",
            position: "relative",
            backgroundColor: "bisque",
            top: "15px",
            left: "24.3em",
            display: "flex",
            alignItems: "center",
            padding: "1px",
            marginTop: "6px",
          }}
          key={k}
        >
          <List
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              wordBreak: "break-word",
              width: "100%",
              marginBottom: "10px",
              marginLeft: "12px",
            }}
          >
            {editIndex === k ? (
              <TextField
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => handleSave(k)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSave(k);
                  }
                }}
                autoFocus
                variant="outlined"
                size="small"
              />
            ) : (
              item
            )}
          </List>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: "10px",
            }}
          >
            {editIndex === k ? (
              <IconButton onClick={() => handleSave(k)}>
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleEdit(k, item)}>
                <EditIcon />
              </IconButton>
            )}
            <IconButton onClick={() => removeTodo(k)}>
              <DeleteIcon color="error"></DeleteIcon>
            </IconButton>
          </div>
        </div>
      ))}
    </>
  );

  return <>{display}</>;
}
