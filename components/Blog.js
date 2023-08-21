"use client";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Blog = ({ blok }) => {
  // console.log("blog", blok);
  return (
    <div className="blog-page" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </div>
  );
};

export default Blog;
