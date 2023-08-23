import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  let textSize = (val) => {
    switch (blok.textSize) {
      case "text-lg":
        return "textLg";
        break;
      case "text-xl":
        return "textXl";
        break;
      case "text-2xl":
        return "text2Xl";
        break;
      case "text-3xl":
        return "text3Xl";
        break;
      case "text-4xl":
        return "text-4Xl";
        break;
      default:
        return "textBase";
        break;
    }
  };
  let maxWidth = (val) => {
    switch (blok.maxWidth) {
      case "max-w-4xl":
        return "maxW4Xl";
        break;
      default:
        return "maxWNone";
        break;
    }
  };
  return (
    <div
      className={`leading-loose ${textSize(blok.textSize)} ${maxWidth(
        blok.maxWidth
      )} [&>h2]:text-4xl [&>h2]:my-5`}
      {...storyblokEditable(blok)}
    >
      {render(blok.body)}
    </div>
  );
};

export default Content;
