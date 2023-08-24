import {
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
// import HorizontalCardItem from "./HorizontalCardItem";
import BlogTeaser from "./BlogTeaser";
import { render } from "storyblok-rich-text-react-renderer";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Review = ({ blok }) => {
  // console.log("blok", blok);
  const router = useRouter();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        starts_with: "review/",
      });
      setBlog(data.stories);
      // console.log("data ==>", data);
    };
    getReviews();
  }, []);

  // Filter out sibling stories based on their full_slug.
  const filterSiblingStories = (story) => {
    const currentPath = router.asPath.startsWith("/")
      ? router.asPath.slice(1)
      : router.asPath;
    if (currentPath) {
      return story.full_slug.startsWith(currentPath);
    }
    return true; // If no currentPath provided, show all.
  };

  return (
    <>
      {blok?.content.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
      <hr />
      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {blog.filter(filterSiblingStories).map((story) => {
          // console.log("nested", story.full_slug);
          if (story.content.component !== "page") {
            return (
              <BlogTeaser
                key={story.uuid}
                article={story.content}
                slug={story.full_slug}
                category={blok.category}
              />
            );
          }
        })}
      </div>
    </>
  );
};
export default Review;
