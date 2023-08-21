import React from "react";

const TitleH2 = ({ blok }) => {
  // console.log("TitleH2", blok);
  let textAlign = (val) => {
    switch (blok.textAlign) {
      case "text-left":
        return "textLeft";
        break;
      case "text-center":
        return "textCenter";
        break;
      case "text-right":
        return "textRight";
        break;
      default:
        return "textLeft";
        break;
    }
  };
  let marginBottom = (val) => {
    switch (blok.marginBottom) {
      case "mb-8":
        return "mb8";
        break;
      default:
        return "mb-0";
        break;
    }
  };
  return (
    <h2
      className={`text-4xl font-bold ${textAlign(
        blok.textAlign
      )} ${marginBottom(blok.marginBottom)}`}
    >
      {blok.text}
    </h2>
  );
};

export default TitleH2;
