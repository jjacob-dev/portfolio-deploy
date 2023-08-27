interface Props {
  image1: string;
  heading: string;
  description: string;
}

function BlogPost(props: Props) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col-reverse max-w-[80%] justify-center items-center py-10 lg:flex-row-reverse gap-8">
          <div className="flex flex-col lg:max-w-[50%] gap-2">
            <div className="text-4xl">
              <h1>{props.heading}</h1>
            </div>
            <div>
              <p>{props.description}</p>
            </div>
          </div>
          <div className="flex-1 items-center justify-center h-auto max-w-[450px]">
            <img className="rounded-xl" src={props.image1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
