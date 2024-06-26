import React from "react";
import Step from "./Step";

export default function Steps({ steps }) {
  return (
    <div className="rounded-lg col-span-full md:col-span-4 bg-blue-600 p-5 flex flex-row justify-between md:flex-col md:justify-center gap-10 md:bg-[url('/img/bg-sidebar-desktop.svg')]   bg-cover  sm:bg-[url('/img/bg-sidebar-mobile.svg')] sm:bg-cover flex-wrap ">
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}