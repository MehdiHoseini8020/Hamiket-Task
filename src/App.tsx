import React from "react";
import Head from "./Components/Main/Header";
import FormsList from "./Components/Main/FormsList";

export default function App() {
  return (
    <div className="min-h-[100vh] w-screen m-0 p-0 flex flex-col gap-[35px] items-center bg-[#004643]">
      <Head />
      <FormsList />
    </div>
  );
}