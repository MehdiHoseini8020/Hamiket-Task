import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../../Redux/store";
import { GetAge } from "../../Redux/createSlice";

export default function Age({setAge,userAge}:any) {
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    if (select.editMode) {
      setAge(event.target.value)
    } else {
      dispatch(GetAge(event.target.value as string));
    }
  };
  return (
    <Box sx={{ minWidth: 260 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select.editMode?userAge:select.age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"0 - 10"}>0 - 10</MenuItem>
          <MenuItem value={"10 - 20"}>10 - 20</MenuItem>
          <MenuItem value={"+20"}>+ 20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
