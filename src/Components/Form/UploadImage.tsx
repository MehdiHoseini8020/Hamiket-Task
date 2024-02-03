import { useRef, useState } from "react";
import { RoutState } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ImgSrc } from "../../Redux/createSlice";

export default function Upload() {
  const [files, setFiles] = useState<string[]>([]);
  const [defaultSrc, setDefaultSrc] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<string>("");
  const ref: React.LegacyRef<HTMLInputElement> = useRef(null);
  const select = useSelector((state: RoutState) => state.Reducer);
  const dispatch = useDispatch();

  function _onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      var file = e.target.files["0"];
      var reader = new FileReader();
      var url = reader.readAsDataURL(file);
      reader.onloadend = function () {
        setSelectedFile(reader.result as string);
      }.bind(_onChange);
    }
  }

  return (
    <div className="h-[200px] w-full flex flex-col justify-around items-center">
      <img
        className="h-[100px] w-[100px] rounded-[50%] flex justify-center items-center bg-white"
        src={select.editMode ? select.imgSrc : defaultSrc}
      />
      <input ref={ref} onChange={_onChange} type="file" accept="image/*" />
      <button
        className="h-[35px] w-[100px] rounded-lg font-medium bg-[#f9bc60]"
        onClick={() => {
          if (selectedFile != "") {
            setFiles([selectedFile]);
            setDefaultSrc(selectedFile);
            dispatch(ImgSrc(selectedFile));
            if (ref.current) {
              ref.current.files = null;
              ref.current.value = "";
              setSelectedFile("");
            }
          }
        }}
      >
        submit
      </button>
    </div>
  );
}
