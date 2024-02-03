import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetGender } from "../../Redux/createSlice";
import { RoutState } from "../../Redux/store";

export default function Gender({ setGender, userGender }: any) {
  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);
  function HandleChange(e: any) {
    if (select.editMode) {
      setGender(e.target.value);
    } else {
      dispatch(GetGender(e.target.value));
    }
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        onChange={HandleChange}
        defaultValue={select.editMode ? userGender : "other"}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}
