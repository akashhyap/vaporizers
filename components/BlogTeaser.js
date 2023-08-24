import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogTeaser = ({ article, slug, category }) => {
  console.log("blog teaser", article);

  const isPageComponent = article?.component == "page";
  let date = !isPageComponent && new Date(article?.date?.split(" ")[0]);

  return (
    <>
      {!isPageComponent && (
        <div className="blog_teaser flex flex-col group bg-gray-100 p-5 rounded-xl transition duration-500 ease-in-out">
          {article?.body.map((item) => {
            return (
              <div key={item._uid}>
                <Link href={`/${slug}`}>
                  <h2 className="text-2xl">{item.text}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default BlogTeaser;
