import { StoryblokComponent } from "@storyblok/react";
import Menus from "./Menu";

const CustomStoryblokComponent = ({ blok, closeMenu }) => {
  if (blok.component === "menu") { // Assuming 'menu' is the right component name
    return <Menus blok={blok} closeMenu={closeMenu} />;
  }
  
  return <StoryblokComponent blok={blok} />;
};

export default CustomStoryblokComponent;
