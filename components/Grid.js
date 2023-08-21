import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

const Grid = ({ blok }) => {
  // console.log("grid", blok);
  let grid = (val) => {
    switch (blok.grid) {
      case "grid-cols-2":
        return "g-cols-2";
        break;
      case "grid-cols-3":
        return "g-cols-3";
        break;
      default:
        return "g-cols-1";
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
  let alignItems = (val) => {
    switch (blok.itemAlign) {
      case "item-start":
        return "itemStart";
        break;
      case "item-center":
        return "itemCenter";
        break;
      case "item-end":
        return "itemEnd";
        break;
      default:
        return "itemStart";
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
      className={`grid gap-2 lg:gap-10 rounded-lg ${alignItems(blok.itemAlign)} ${grid(blok.grid)} ${
        blok.fixWidth ? "max-w-[90%] xl:max-w-6xl mx-auto" : "w-full"
      } ${bgColor(blok.bgColor)} ${margin(blok.margin)} ${padX(blok.padX)} ${padY(blok.padY)}`}
      {...storyblokEditable(blok)}
    >
      {blok?.column?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
