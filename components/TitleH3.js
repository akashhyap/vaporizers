import React from 'react'

const TitleH3 = ({blok}) => {
  // console.log("TitleH3", blok);
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
  return (
    <h2 className={`text-xl font-[500] uppercase ${textAlign(
      blok.textAlign
    )}`}>{blok.text}</h2>
  )
}

export default TitleH3