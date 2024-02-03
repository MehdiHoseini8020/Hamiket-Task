import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { GetPicker } from "../../Redux/createSlice";
import { RoutState } from "../../Redux/store";

export default function DatePickers({
  setPickerYear,
  setPickerMonth,
  setPickerDay,
}: any) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();

  if (value) {
    let valuePicker = {
      day: value?.get("date"),
      month: value?.get("month"),
      year: value?.get("year"),
    };
    if (select.editMode) {
      setPickerYear(value?.get("year"));
      setPickerMonth(value?.get("month"));
      setPickerDay(value?.get("day"));
    } else {
      dispatch(GetPicker(valuePicker));
    }
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
