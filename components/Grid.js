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
  return (
    <div
      className={`grid gap-2 lg:gap-10 items-center rounded-lg ${grid(blok.grid)} ${
        blok.fixWidth ? "max-w-[90%] xl:max-w-6xl mx-auto" : "w-full"
      } ${bgColor(blok.bgColor)} ${margin(blok.margin)}`}
      {...storyblokEditable(blok)}
    >
      {blok?.column?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
