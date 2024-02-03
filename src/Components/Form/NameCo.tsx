import React from "react";
import TextField from "@mui/material/TextField";
import { RoutState } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GetName } from "../../Redux/createSlice";

export default function NameCo({ userName, setName }: any) {
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();
  return (
    <TextField
      sx={{ width: 260 }}
      label="Name"
      id="outlined-required"
      required
      type="text"
      value={select.editMode ? userName : select.name}
      autoComplete="off"
      onChange={(e) => {
        if (select.editMode) {
          setName(e.target.value);
        } else {
          dispatch(GetName(e.target.value));
        }
      }}
    />
  );
}
