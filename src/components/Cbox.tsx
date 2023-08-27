import React from "react";

interface Props {
  heading: string;
  description: string;
  buttonName: string;
  link: string;
}

function Cbox(props: Props) {
  const openLink = () => {
    // Set the URL you want to open
    const linkUrl = props.link;

    // Open the link
    window.location.href = linkUrl;
  };

  return (
    <>
      <div className="flex flex-col gap-3 min-w-[300px] max-w-[400px]  shadow-2xl rounded-2xl">
        <div className="h-[8px] bg-emerald-400 00 rounded-t-2xl"></div>
        <div className="flex flex-col gap-4 px-7 py-6">
          <div className="text-xl lg:text-2xl font-semibold">
            <h1>{props.heading}</h1>
          </div>
          <div className="text-md text-gray-500">
            <p>{props.description}</p>
          </div>
          <button
            onClick={openLink}
            className=" hover:bg-emerald-400 border border-emerald-400 text-emerald-400 hover:text-white py-2 max-w-[70%] rounded-full transition"
          >
            <p>Visit {props.buttonName}</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cbox;
