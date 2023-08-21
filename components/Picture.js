import React from "react";

const Picture = ({ blok }) => {
  let imageStyles = (val) => {
    switch (blok.imageStyle) {
      case "full-cover":
        return "full-cover";
        break;
      case "full-contain":
        return "full-contain";
        break;
      case "inherit-contain":
        return "inherit-contain";
        break;
      default:
        return "inherit-contain";
        break;
    }
  };
  let margin = (val) => {
    switch (blok.margin) {
      case "my-5":
        return "my5";
        break;
      case "my-8":
        return "my8";
        break;
      case "my-10":
        return "my10";
        break;
      default:
        return "my5";
        break;
    }
  };
  return (
    <div className={`relative ${margin(blok.margin)}`}>
      {blok?.image?.filename && (
        <img
          className={`rounded-lg ${imageStyles(blok.imageStyle)}`}
          alt={blok?.image?.alt}
          src={`${blok.image.filename}/m/`}
        />
      )}
    </div>
  );
};

export default Picture;
