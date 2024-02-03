import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../../Redux/store";
import EditModal from "./EditModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DeleteItem } from "../../Redux/createSlice";

export default function FormsList() {
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();

  return (
    <div className="h-fit w-[1440px] flex flex-col items-center mb-4">
      {select.Data.length === 0 ? (
        <h1 className="font-bold text-[24px] h-[539px]">
          There is not account to show ...{" "}
        </h1>
      ) : (
        <div className="h-full w-full overflow-x-hidden flex justify-center flex-wrap gap-[24px]">
          {" "}
          {select.Data.map((item: any, index: number) => {
            return (
              <div
                className="h-[400px] w-[400px] rounded-[16px] bg-[#abd1c6] flex flex-col items-center justify-around "
                key={index}
              >
                <img
                  className="h-[100px] w-[100px] rounded-[50%] bg-white"
                  src={item.imgSrc}
                />
                <div className="h-[30px] w-full text-center text-[18px] ">
                  Name : {item.name}
                </div>
                <div className="h-[30px] w-full text-center text-[18px] ">
                  Age : {item.age}
                </div>
                <div className="h-[30px] w-full text-center text-[18px] ">
                  Date of birth : {item.pickerDay} /{" "}
                  {item.pickerMonth < 10
                    ? "0" + item.pickerMonth
                    : item.pickerMonth}{" "}
                  / {item.pickerYear}
                </div>
                <div className="h-[30px] w-full text-center text-[18px] ">
                  Gender : {item.gender}
                </div>
                <EditModal params={item} ind={index} />
                <DeleteForeverIcon
                  onClick={() => {
                    dispatch(DeleteItem(item.id));
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
