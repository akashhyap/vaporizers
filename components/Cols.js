import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const Cols = ({ blok }) => {
  // console.log("Cols", blok);
  return (
    <div className="" {...storyblokEditable(blok)}>
      {blok?.link ? (
        <Link href={blok?.link?.cached_url}>
          {blok?.body?.map((nestedBlok) => (
            <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
          ))}
        </Link>
      ) : (
        <>
          {blok?.body?.map((nestedBlok) => (
            <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
          ))}
        </>
      )}
    </div>
  );
};

export default Cols;
