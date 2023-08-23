import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Submenu = ({ blok }) => {
  // console.log("sub menu", blok);

  return (
    <div className="">
      <span className="">
        {blok?.title}
      </span>
    </div>
  );
};
export default Submenu;
