import React from "react";

interface Props {
  heading: string;
  description: string;
  description2: string;
  description3: string;
}

function Hpara(props: Props) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[80%] lg:max-w-[70%] gap-4">
          <div className="text-2xl lg:text-3xl">
            <h1>{props.heading}</h1>
          </div>
          <div className="text-md">
            <p>{props.description}</p>
            <br></br>
            <p>{props.description2}</p>
            <br></br>
            <p>{props.description3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hpara;
