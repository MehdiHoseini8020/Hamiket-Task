import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  id: number;
  name: string;
  gender: string;
  age: string;
  pickerDay: string;
  pickerYear: string;
  pickerMonth: string;
  editMode: boolean;
  imgSrc: string;
  Data: any;
}

const initialState: initialState = {
  id: Math.random(),
  name: "",
  gender: "",
  age: "",
  pickerDay: "",
  pickerMonth: "",
  pickerYear: "",
  editMode: false,
  imgSrc: "",
  Data: [],
};

export const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    GetGender: (state, { payload }: { payload: string }) => {
      state.gender = payload;
    },
    GetPicker: (state, { payload }: { payload: any }) => {
      state.pickerDay = payload.day;
      state.pickerMonth = payload.month + 1;
      state.pickerYear = payload.year;
    },
    GetAge: (state, { payload }: { payload: string }) => {
      state.age = payload;
    },
    GetName: (state, { payload }: { payload: string }) => {
      state.name = payload;
    },
    IsEditMode: (state, { payload }: { payload: boolean }) => {
      state.editMode = payload;
    },
    GetData: (state, { payload }: { payload: any }) => {
      let data = [...state.Data];
      data.push(payload);
      state.Data = data;
    },
    DeleteItem: (state, { payload }: { payload: any }) => {
      let removedList = state.Data.filter((elem: any) => elem.id !== payload);
      state.Data = removedList;
    },
    EditItem: (state, { payload }: { payload: any }) => {
      const copy = [...state.Data];
      copy.splice(payload.ind, 1, payload.userData);
      state.Data = copy;
    },
    ImgSrc: (state, { payload }: { payload: string }) => {
      state.imgSrc = payload;
    },
  },
});

export const {
  GetData,
  GetGender,
  GetName,
  GetAge,
  GetPicker,
  IsEditMode,
  DeleteItem,
  EditItem,
  ImgSrc,
} = profileReducer.actions;
export default profileReducer.reducer;
