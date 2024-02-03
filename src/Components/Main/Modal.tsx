import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@mui/material/Modal";
import Gender from "../Form/Gender";
import Date from "../Form/DatePicker";
import Age from "../Form/Age";
import NameCo from "../Form/NameCo";
import UploadImage from "../Form/UploadImage";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../../Redux/store";
import { GetAge, GetData, GetName } from "../../Redux/createSlice";

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

export default function ModalForm() {
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = () => {
    if (
      select.name &&
      select.gender &&
      select.pickerDay &&
      select.pickerMonth &&
      select.pickerYear &&
      select.age
    ) {
      let value = {
        id: Math.random(),
        name: select.name,
        age: select.age,
        gender: select.gender,
        pickerDay: select.pickerDay,
        pickerMonth: select.pickerMonth,
        pickerYear: select.pickerYear,
        imgSrc: select.imgSrc,
      };
      dispatch(GetData(value));
      dispatch(GetName(""));
      dispatch(GetAge(""));
      setOpen(false);
    } else {
      alert("Please fill in the information");
    }
  };
  return (
    <>
      <button
        className="h-[50px] w-[150px] rounded-2xl bg-[#f9bc60]"
        onClick={handleOpen}
      >
        Create <AddCircleOutlineIcon />{" "}
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
            <NameCo />
            <Date />
            <Age />
            <Gender />
            <button
              onClick={handleAdd}
              className="h-[50px] w-[150px] rounded-2xl bg-[#f9bc60] text-[#001e1d] text-[16px] font-medium"
            >
              Create Account
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
