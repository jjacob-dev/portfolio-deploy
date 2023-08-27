import React from "react";

interface Props {
  heading: string;
  description: string;
}

function Pbox(props: Props) {
  return (
    <>
      <div className="flex flex-col break-words gap-4 min-w-[300px] max-w-[400px] px-7 py-12 shadow-2xl rounded-2xl hover:text-white hover:bg-green-500 hover:-translate-y-2 ease-in-out duration-300 transition">
        <div className="text-2xl lg:text-3xl text-green-400">
          <h1>{props.heading}</h1>
        </div>
        <div className="text-md">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Pbox;
