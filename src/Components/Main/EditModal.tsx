import React, { useState } from "react";
import Box from "@mui/material/Box";
import Date from "../Form/DatePicker";
import Modal from "@mui/material/Modal";
import UploadImage from "../Form/UploadImage";
import NameCo from "../Form/NameCo";
import Age from "../Form/Age";
import Gender from "../Form/Gender";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../../Redux/store";
import { EditItem, IsEditMode } from "../../Redux/createSlice";

const style = {
  position: "absolute" as "absolute",
  top: "46.5%",
  left: "49.9%",
  transform: "translate(-50%, -50%)",
  width: 405,
  height: 720,
  boxShadow: 24,
  backgroundColor: "#abd1c6",
  borderRadius: 2,
};

export default function EditModal({ params, ind }: any) {
  const dispatch = useDispatch();
  const select = useSelector((state: RoutState) => state.Reducer);
  const [name, setName] = useState(params.name);
  const [gender, setGender] = useState(params.gender);
  const [pickerDay, setPickerDay] = useState(params.pickerDay);
  const [pickerMonth, setPickerMonth] = useState(params.pickerMonth);
  const [pickerYear, setPickerYear] = useState(params.pickerYear);
  const [age, setAge] = useState(params.age);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    dispatch(IsEditMode(true));
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(IsEditMode(false));
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="h-[50px] w-[150px] rounded-2xl bg-[#f9bc60] text-[17px] font-medium mb-2"
      >
        Edit
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="h-full w-full flex flex-col items-center justify-around">
            <UploadImage />
            <NameCo userName={name} setName={setName} />
            <Date
              setPickerDay={setPickerDay}
              setPickerMonth={setPickerMonth}
              setPickerYear={setPickerYear}
            />
            <Age userAge={age} setAge={setAge} />
            <Gender userGender={gender} setGender={setGender} />
            <button
              onClick={() => {
                setOpen(false);
                dispatch(IsEditMode(false));
                dispatch(
                  EditItem({
                    userData: {
                      name: name,
                      id: Math.random(),
                      gender: gender,
                      age: age,
                      pickerDay: pickerDay,
                      pickerMonth: pickerMonth,
                      pickerYear: pickerYear,
                      imgSrc: select.imgSrc,
                    },
                    ind: ind,
                  })
                );
              }}
              className="h-[50px] w-[150px] rounded-2xl bg-[#f9bc60] text-[#001e1d] text-[16px] font-medium"
            >
              Edit Account
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
