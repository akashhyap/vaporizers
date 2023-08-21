import React from "react";

const BannerImage = ({ blok }) => {
  // console.log("blok image", blok);
  return (
    <>
      {blok?.image?.filename && (
        <img
          className="w-full h-full object-cover object-center rounded-lg"
          alt={blok?.image?.alt}
          src={`${blok?.image?.filename}/m/`}
        />
      )}
    </>
  );
};

export default BannerImage;
