import React from "react";
import oImage from "../images/offer.png";

function Offer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col-revers max-w-[60%] justify-center items-center gap-20 py-10 lg:flex-row">
          <div className="flex flex-col break-words lg:max-w-[50%]">
            <div className="text-5xl">
              <h1>What I Offer</h1>
            </div>
            <div>
              <p>
                Donna Jurgens at Opulent Nails in Mount Cotton is a qualified
                nail technician providing personalised, one on one, hygienic and
                gentle high quality services.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img className="rounded-full h-auto w-[400px]" src={oImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
