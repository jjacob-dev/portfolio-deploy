interface Props {
  heading: string;
  description: string;
}

function Ebox(props: Props) {
  return (
    <>
      <div className="flex flex-col break-words gap-4 min-w-[300px] max-w-[400px] px-7 py-12 shadow-2xl rounded-2xl">
        <div className="text-2xl lg:text-3xl">
          <h1>{props.heading}</h1>
        </div>
        <div className="text-md">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Ebox;
