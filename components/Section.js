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
      default:
        return "my5";
        break;
    }
  };
  return (
    <div
      className={`${blok.fixWidth ? "max-w-[90%] xl:max-w-6xl mx-auto" : "w-full"} ${margin(blok.margin)}`}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Section;
