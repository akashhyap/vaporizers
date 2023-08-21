import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

const Section = ({ blok }) => {
//   console.log("Section", blok);
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
      case "my-20":
        return "my20";
        break;
      case "my-24":
        return "my24";
        break;
      case "my-28":
        return "my28";
        break;
      default:
        return "my5";
        break;
    }
  };
  let bgColor = (val) => {
    switch (blok.bgColor) {
      case "bg-slate-100":
        return "bgSlate100";
        break;
      case "bg-slate-900":
        return "bgSlate900";
        break;
      case "bg-black":
        return "bgBlack";
        break;
      case "bg-brown":
        return "bgBrown";
        break;
      case "bg-gray-100":
        return "bgGray100";
        break;
      case "bg-231f20":
        return "bg-231f20";
        break;
      default:
        return "bgTransparent";
        break;
    }
  };
  let padX = (val) => {
    switch (blok.padX) {
      case "px-10":
        return "pX10";
        break;
      case "px-50":
        return "pX50";
        break;
      default:
        return "pX0";
        break;
    }
  };
  let padY = (val) => {
    switch (blok.padY) {
      case "py-10":
        return "pY10";
        break;
      case "py-16":
        return "pY16";
        break;
      case "py-50":
        return "pY50";
        break;
      case "py-75":
        return "pY75";
        break;
      default:
        return "pY0";
        break;
    }
  };
  return (
    <div
      className={`rounded-lg ${blok.fixWidth ? "max-w-[90%] xl:max-w-6xl mx-auto" : "w-full"} ${margin(blok.margin)} ${bgColor(blok.bgColor)} ${padX(blok.padX)} ${padY(blok.padY)}`}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Section;
