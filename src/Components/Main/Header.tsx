import React from "react";
import ModalForm from "./Modal";

export default function Head() {
  return (
    <div className="h-[220px] w-[400px] mt-8 rounded-lg flex flex-col items-center bg-[#fffffe]">
      <div className="h-2/3 w-full flex flex-col items-center">
        <img
          className="h-[100px] w-[100px]"
          src="./Hamiket.png"
          title="Hamiket"
          alt="Hamiket Logo"
        />
        <h2 className="font-medium">
          Create your <strong>Hamiket</strong> account 👇🏻
        </h2>
      </div>
      <ModalForm />
    </div>
  );
}
