import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react";
import BannerImage from "./BannerImage";

// International Date formatter
// const dateFormatter = new Intl.DateTimeFormat("en-US", {
//   month: "short",
//   day: "numeric",
//   year: "numeric",
// });

const ArticleTeaser = ({ article, slug, category }) => {
  console.log("article teaser", article);

  const isPageComponent = article?.component == "page";
  //   let date = !isPageComponent && new Date(article?.date?.split(" ")[0]);

  return (
    <>
      {!isPageComponent && (
        <Link href={`/${slug}`}>
          <div className="columnContent flex flex-col items-start">
            <div className="relative w-full aspect-w-16 aspect-h-9">
              {article?.heroImage && (
                <>
                  <img
                    className="w-full h-full object-center object-cover rounded-lg"
                    alt={article?.heroImage?.alt}
                    src={`${article?.heroImage?.filename}/m/`}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </>
              )}
            </div>
            <div className="my-3">
              <h2 className="text-2xl font-[500]">{article.title}</h2>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default ArticleTeaser;
